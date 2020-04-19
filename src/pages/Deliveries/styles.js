import styled from 'styled-components/native';

export const Header = styled.View`
  margin: 10px 10px 10px 10px;
  flex-direction: row;
  width: 323px;
  height: 68px;
  align-items: center;
`;

export const Photo = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
`;

export const Welcome = styled.View`
  margin-left: 10px;
  width: 158px;
  height: 45px;
  flex: 1;
  flex-direction: column;
`;

export const WelcomeText = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #444;
`;

export const Signout = styled.TouchableOpacity``;

export const DeliveriesHeader = styled.View`
  margin: 10px 10px 0 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 323px;
  height: 38px;
`;

export const DeliveriesTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const DeliveriesChooseGroup = styled.View`
  flex-direction: row;
`;

export const DeliveriesChoose = styled.TouchableOpacity`
  height: 30px;
  color: #444;
`;

export const DeliveriesChooseText = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.selected ? '#7d40e7' : '#999999')};
  font-weight: bold;
  margin-left: 10px;
  border-color: #7d40e7;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: ${(props) => (props.selected ? '1px' : '0')};
`;

export const DeliveriesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
