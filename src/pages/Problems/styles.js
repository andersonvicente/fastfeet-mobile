import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  width: 335px;
  align-self: center;
  margin-top: -80px;
  margin-bottom: 50px;
`;

export const Subtitle = styled.Text`
  width: 335px;
  height: 30px;
  background: transparent;
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  width: 100%;
  border-radius: 4px;
  border-color: #f5f5f5;
  flex-direction: column;
`;
