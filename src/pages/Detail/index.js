import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Alert } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  confirmPickupRequest,
  resetRequest,
} from '~/store/modules/delivery/actions';

import BackgroundDelivery from '~/components/BackgroundDelivery';
import ButtonDelivery from '~/components/ButtonDelivery';

import {
  Container,
  Box,
  BoxHeader,
  BoxHeaderTitle,
  BoxField,
  BoxValue,
  BoxRow,
  BoxColumn,
  ButtonGroup,
  Separator,
} from './styles';

function Detail({ isFocused, route, navigation }) {
  const dispatch = useDispatch();

  const deliverymen = useSelector((state) => state.deliverymen.data);
  const success = useSelector((state) => state.delivery.success);

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#7d40e7');
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  useEffect(() => {
    function verifySuccess() {
      if (success === true) {
        dispatch(resetRequest());
        navigation.navigate('Deliveries');
      }
    }

    verifySuccess();
  }, [success, navigation, dispatch]);

  const { delivery } = route.params;

  const address = useMemo(() => `${delivery.recipient.address_street}`, [
    delivery,
  ]);

  const status = useMemo(() => (delivery.end_date ? 'Entregue' : 'Pendente'), [
    delivery,
  ]);

  const startFormatted = useMemo(
    () =>
      delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : '--/--/----',
    [delivery]
  );

  const endFormatted = useMemo(
    () =>
      delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : '--/--/----',
    [delivery]
  );

  const disableReportProblem = useMemo(() => delivery.end_date !== null, [
    delivery,
  ]);

  const disableConfirmDelivery = useMemo(
    () =>
      delivery.start_date === null ||
      delivery.end_date !== null ||
      delivery.canceled_at === null,
    [delivery]
  );

  const disableConfirmPickup = useMemo(() => delivery.canceled_at === null, [
    delivery,
  ]);

  const showConfirmPickup = useMemo(() => delivery.start_date === null, [
    delivery,
  ]);

  async function handleConfirmPickup() {
    Alert.alert(
      'Confirmação',
      'Confirma a retirada desta encomenda?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(
              confirmPickupRequest({
                deliveryId: delivery.id,
                deliverymenId: deliverymen.id,
              })
            );
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <BackgroundDelivery>
      <Container>
        <Box>
          <BoxHeader>
            <Icon name="local-shipping" size={22} color="#7D40E7" />
            <BoxHeaderTitle>Informações da entrega</BoxHeaderTitle>
          </BoxHeader>
          <BoxField>DESTINATÁRIO</BoxField>
          <BoxValue>{delivery.recipient.name}</BoxValue>
          <BoxField>ENDEREÇO DE ENTREGA</BoxField>
          <BoxValue>{address}</BoxValue>
          <BoxField>PRODUTO</BoxField>
          <BoxValue>{delivery.product}</BoxValue>
        </Box>
        <Box>
          <BoxHeader>
            <Icon name="event" size={22} color="#7D40E7" />
            <BoxHeaderTitle>Situação da entrega</BoxHeaderTitle>
          </BoxHeader>
          <BoxField>STATUS</BoxField>
          <BoxValue>{status}</BoxValue>
          <BoxRow>
            <BoxColumn>
              <BoxField>DATA DE RETIRADA</BoxField>
              <BoxValue>{startFormatted}</BoxValue>
            </BoxColumn>
            <BoxColumn>
              <BoxField>DATA DE ENTREGA</BoxField>
              <BoxValue>{endFormatted}</BoxValue>
            </BoxColumn>
          </BoxRow>
        </Box>
        <ButtonGroup>
          <ButtonDelivery
            disabled={disableReportProblem}
            text="Informar Problema"
            iconName="highlight-off"
            iconColor="#E74040"
            onPress={() => navigation.navigate('ReportProblem', { delivery })}
          />
          <Separator />
          <ButtonDelivery
            text="Visualizar Problemas"
            iconName="info-outline"
            iconColor="#E7BA40"
            onPress={() => navigation.navigate('Problems', { delivery })}
          />
          <Separator />
          {showConfirmPickup ? (
            <ButtonDelivery
              disabled={disableConfirmPickup}
              text="Confirmar Retirada"
              iconName="thumb-up"
              iconColor="#7D40E7"
              onPress={handleConfirmPickup}
            />
          ) : (
            <ButtonDelivery
              disabled={disableConfirmDelivery}
              text="Confirmar Entrega"
              iconName="check-circle"
              iconColor="#7D40E7"
              onPress={() => navigation.navigate('Confirm', { delivery })}
            />
          )}
        </ButtonGroup>
      </Container>
    </BackgroundDelivery>
  );
}

Detail.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Detail);
