import styled from 'styled-components/native';

export const Container = styled.View`
  width: 335px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border-color: #f5f5f5;
  border-width: 1px;
  margin-bottom: 10px;
  /* flex: 1; */
  flex-grow: 1;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
  width: 225px;
  padding: 15px 10px 15px 20px;
`;

export const CreatedAt = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
  width: 110px;
  padding: 15px 10px 15px 20px;
`;
