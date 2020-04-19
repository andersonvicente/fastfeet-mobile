import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0px 15px;
  height: 45px;
  width: 325px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  font-size: 16px;
  color: #444;
`;
