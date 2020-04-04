import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Texto } from './styles';

export default function Deliveries({ navigation }) {
  return (
    <Container>
      <Texto>
        Beatriz e Mia
      </Texto>
    </Container>
  );
}

Deliveries.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
