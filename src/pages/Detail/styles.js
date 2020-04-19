import styled from 'styled-components/native';

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

export const Box = styled.View`
  background: #fff;
  width: 335px;
  border-width: 1px;
  border-radius: 3px;
  border-color: #f5f5f5;
  flex-direction: column;
  margin-bottom: 5px;
  flex-grow: 1;
`;

export const BoxHeader = styled.View`
  flex-direction: row;
  align-content: center;
  margin: 10px 0 0 10px;
`;

export const BoxHeaderTitle = styled.Text`
  font-size: 13px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const BoxField = styled.Text`
  font-size: 13px;
  color: #999;
  font-weight: bold;
  margin: 5px 0 0 15px;
`;

export const BoxValue = styled.Text`
  font-size: 13px;
  color: #666;
  margin: 0 0 5px 15px;
`;

export const BoxRow = styled.View`
  flex-direction: row;
`;

export const BoxColumn = styled.View`
  flex-direction: column;
  margin-right: 20px;
`;

export const ButtonGroup = styled.View`
  background: #f8f9fd;
  width: 335px;
  height: 83px;
  border-width: 1px;
  border-radius: 3px;
  border-color: #f5f5f5;
  flex-direction: row;
`;

export const Separator = styled.View`
  border-width: 1px;
  border-color: #f5f5f5;
`;
