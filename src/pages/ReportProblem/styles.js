import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex-direction: column;
  width: 335px;
  flex: 1;
  flex-grow: 1;
  align-self: center;
  margin-top: -80px;
  margin-bottom: 80px;
  height: 400px;
`;

export const ProblemInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  multiline: true,
  textAlignVertical: 'top',
})`
  width: 335px;
  height: 300px;
  font-size: 16px;
  color: #999;
  background: #fff;
  border-radius: 5px;
  border-color: #f5f5f5;
  border-width: 1px;
  text-align: left;
  padding: 20px 20px 20px 20px;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  margin-top: 5px;
  width: 335px;
`;
