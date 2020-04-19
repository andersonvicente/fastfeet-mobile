import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import DeliveryItem from '~/components/DeliveryItem';

import {
  Header,
  Photo,
  Welcome,
  WelcomeText,
  Name,
  Signout,
  DeliveriesHeader,
  DeliveriesTitle,
  DeliveriesChooseGroup,
  DeliveriesChoose,
  DeliveriesChooseText,
  DeliveriesList,
} from './styles';

function Deliveries({ isFocused, navigation }) {
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setBarStyle('dark-content');
    }
  }, [isFocused]);

  const dispatch = useDispatch();

  const deliverymen = useSelector((state) => state.deliverymen.data);

  const [status, setStatus] = useState('available');
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`deliveryman/${deliverymen.id}/${status}`);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [deliverymen, status, isFocused]);

  function HandleLogout() {
    dispatch(signOut());
  }

  function HandleDeliveryStatus(param) {
    setStatus(param);
  }

  return (
    <Background>
      <Header>
        <Photo
          source={{
            uri: deliverymen.avatar
              ? deliverymen.avatar.url
              : `https://api.adorable.io/avatar/68/${deliverymen.name}.png`,
          }}
        />
        <Welcome>
          <WelcomeText>Bem vindo de volta,</WelcomeText>
          <Name>{deliverymen.name}</Name>
        </Welcome>

        <Signout onPress={HandleLogout}>
          <Icon name="exit-to-app" size={25} color="#E74040" />
        </Signout>
      </Header>
      <DeliveriesHeader>
        <DeliveriesTitle>Entregas</DeliveriesTitle>
        <DeliveriesChooseGroup>
          <DeliveriesChoose onPress={() => HandleDeliveryStatus('available')}>
            <DeliveriesChooseText selected={status === 'available'}>
              Pendentes
            </DeliveriesChooseText>
          </DeliveriesChoose>
          <DeliveriesChoose onPress={() => HandleDeliveryStatus('deliveries')}>
            <DeliveriesChooseText selected={status === 'deliveries'}>
              Entregues
            </DeliveriesChooseText>
          </DeliveriesChoose>
        </DeliveriesChooseGroup>
      </DeliveriesHeader>

      <DeliveriesList
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <DeliveryItem
            data={item}
            onDetail={() => navigation.navigate('Detail', { delivery: item })}
          />
        )}
      />
    </Background>
  );
}

Deliveries.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Deliveries);
