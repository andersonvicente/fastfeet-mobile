import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const Container = styled.View`
  flex-direction: column;
  width: 335px;
  flex: 1;
  flex-grow: 1;
  align-self: center;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  width: 305px;
  height: 400px;
  padding: 3px 3px 0 3px;
  background: #fff;
  margin-bottom: 5px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
`;

export const Camera = styled(RNCamera)`
  height: 100%;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 5px;
  justify-content: flex-end;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  background: ${(props) => (props.disabled ? '#DDD' : '#7d40e7')};
  width: 335px;
`;

export const TakePicture = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const RemovePhoto = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  position: absolute;
  top: 350px;
`;
