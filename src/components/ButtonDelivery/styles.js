import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #999;
  text-align: center;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;
