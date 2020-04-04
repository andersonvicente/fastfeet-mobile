import React, { useState } from 'react';

import Button from '~/components/Button';
import { Background, Texto, SubmitButton } from './styles';

export default function SignIn({ navigation }) {

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Texto>
        Hello world
      </Texto>
      <SubmitButton onPress={handleSubmit}>
        Entrar no sistema
      </SubmitButton>
    </Background>
  );
}
