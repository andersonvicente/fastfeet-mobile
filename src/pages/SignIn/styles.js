import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Button from '~/components/Button';

export const Background = styled.View`
  flex: 1;
  background: #7D40E7;
  align-items: center;
  justify-content: center;
`;

export const Texto = styled.Text`
  font-size: 16px;
  color: #fff;
`

export const SubmitButton = styled(Button)`
  background: #82BF18;
`
