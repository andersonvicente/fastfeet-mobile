import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import PropTypes from 'prop-types';

import Logosvg from '~/assets/logo.svg';

import Cpf from '~/components/Cpf';

import { signInRequest } from '~/store/modules/auth/actions';

import { Background, Container, Form, FormInput, SubmitButton } from './styles';

function SignIn({ isFocused }) {
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#7d40e7');
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  const dispatch = useDispatch();
  const deliverymenIdRef = useRef();

  const [deliverymenId, setDeliverymenId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(deliverymenId));
  }

  return (
    <Background>
      <Container>
        <Logosvg width={244} height={48} />

        <Form>
          {/* <Cpf
            keyboardType="numeric"
            placeholder="Informe seu CPF"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={deliverymenId}
            onChangeText={setDeliverymenId}
          /> */}
          <FormInput
            keyboardType="numeric"
            placeholder="Informe seu ID de cadastro"
            ref={deliverymenIdRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={deliverymenId}
            onChangeText={setDeliverymenId}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(SignIn);
