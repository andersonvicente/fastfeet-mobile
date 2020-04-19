import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { withNavigationFocus } from '@react-navigation/compat';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import RNFetchBlob from 'rn-fetch-blob';

import BackgroundDelivery from '~/components/BackgroundDelivery';

import {
  confirmDeliveryRequest,
  resetRequest,
} from '~/store/modules/delivery/actions';

import {
  Container,
  Box,
  Camera,
  TakePicture,
  Photo,
  RemovePhoto,
  SubmitButton,
} from './styles';

// YellowBox.ignoreWarnings(['Require cycle:']);

function Confirm({ isFocused, route, navigation }) {
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#7d40e7');
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  const { delivery } = route.params;

  const dispatch = useDispatch();

  const deliverymen = useSelector((state) => state.deliverymen.data);
  const loading = useSelector((state) => state.delivery.loading);
  const success = useSelector((state) => state.delivery.success);

  const [camera, setCamera] = useState();
  const [file, setFile] = useState(null);

  useEffect(() => {
    function verifySuccess() {
      if (success === true) {
        dispatch(resetRequest());
        setFile(null);
        navigation.navigate('Deliveries');
      }
    }

    verifySuccess();
  }, [success, navigation, dispatch]);

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);

      setFile(data);
    }
  }

  async function handleSubmit() {
    RNFetchBlob.fetch(
      'POST',
      'http://localhost:4444/files',
      {
        'Content-Type': 'multipart/form-data; boundary=fastfeet',
      },
      [
        {
          name: 'file',
          filename: file.uri.substring(file.uri.lastIndexOf('/') + 1),
          type: 'image/jpg',
          // data: RNFetchBlob.wrap(file.uri),
          data: file.base64,
        },
      ]
    )
      .then((res) => {
        if (res.data) {
          const signature = JSON.parse(res.data);
          dispatch(
            confirmDeliveryRequest({
              deliveryId: delivery.id,
              deliverymenId: deliverymen.id,
              signatureId: signature.id,
            })
          );
        } else {
          Alert.alert('Falha no envio', 'Houve um erro ao enviar a foto');
        }
      })
      .catch(() => {
        Alert.alert('Falha no envio', 'Houve um erro ao enviar a foto');
      });
  }

  async function removePhoto() {
    setFile(null);
  }

  return (
    <BackgroundDelivery>
      <Container>
        <Box>
          {file ? (
            <>
              <Photo source={{ uri: file.uri }} />
              <RemovePhoto onPress={removePhoto}>
                <Icon name="delete-forever" size={35} color="#fff" />
              </RemovePhoto>
            </>
          ) : (
            <Camera
              ref={(cam) => {
                setCamera(cam);
              }}
              // style={styles.preview}
              type={RNCamera.Constants.Type.back}
              autoFocus={RNCamera.Constants.AutoFocus.on}
              flashMode={RNCamera.Constants.FlashMode.off}
              captureAudio={false}
              androidCameraPermissionOptions={{
                title: 'Permissão para usar a camêra',
                message: 'Precisamos da sua permissão para usar a camêra.',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancelar',
              }}
            >
              <TakePicture onPress={takePicture}>
                <Icon name="camera-alt" size={35} color="#fff" />
              </TakePicture>
            </Camera>
          )}
        </Box>
        <SubmitButton
          disabled={file === null}
          loading={loading}
          onPress={file !== null ? handleSubmit : null}
        >
          Enviar
        </SubmitButton>
      </Container>
    </BackgroundDelivery>
  );
}

Confirm.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Confirm);
