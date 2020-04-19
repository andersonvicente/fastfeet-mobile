import React, { useEffect, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import { format, parseISO } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '~/components/Background';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Avatar, Info, Field, Value, ButtonLogout } from './styles';

function Profile({ isFocused }) {
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setBarStyle('dark-content');
    }
  }, [isFocused]);

  const dispatch = useDispatch();

  const deliverymen = useSelector((state) => state.deliverymen.data);

  const dateFormatted = useMemo(
    () => format(parseISO(deliverymen.created_at), 'dd/MM/yyyy'),
    [deliverymen.created_at]
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: deliverymen.avatar
              ? deliverymen.avatar.url
              : `https://img.olx.com.br/thumbs256x256/92/924031004454159.jpg`,
          }}
        />
        <Info>
          <Field>Nome completo</Field>
          <Value>{deliverymen.name}</Value>
          <Field>Email</Field>
          <Value>{deliverymen.email}</Value>
          <Field>Data de cadastro</Field>
          <Value>{dateFormatted}</Value>
        </Info>
        <ButtonLogout onPress={handleLogout}>Logout</ButtonLogout>
      </Container>
    </Background>
  );
}

Profile.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Profile);
