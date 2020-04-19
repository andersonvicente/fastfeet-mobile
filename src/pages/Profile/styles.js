import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  margin: 50px 0 0 25px;
  flex-direction: column;
  width: 305px;
  height: 412px;
  align-items: center;
`;

export const Avatar = styled.Image`
  height: 136px;
  width: 136px;
  border-radius: 68px;
`;

export const Info = styled.View`
  margin: 30px 0 0 0;
  width: 100%;
`;

export const Field = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Value = styled.Text`
  font-size: 20px;
  color: #444;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonLogout = styled(Button)`
  background: #e74040;
  margin-top: 10px;
  width: 100%;
`;
