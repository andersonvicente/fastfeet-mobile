import React, { useState } from 'react';

//import SvgUri from 'react-native-svg-uri';
import Logosvg from '~/assets/logo.svg';

import { Background, Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {

  const [deliverymanid, setDeliveryman] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Logosvg width={244} height={48} />

        <Form>
          <FormInput
            keyboardType="numeric"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={deliverymanid}
            onChangeText={setDeliveryman}
          />
          <SubmitButton onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
