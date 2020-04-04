import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Texto } from './styles';

export default function Profile({ navigation }) {
  return (
    <Container>
      <Texto>
        Teste
      </Texto>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
