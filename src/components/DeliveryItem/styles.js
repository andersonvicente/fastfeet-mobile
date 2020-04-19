import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0 10px 10px;
  width: 335px;
  height: 170px;
  border-color: #f5f5f5;
  border-width: 1px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-content: center;
  margin: 10px 0 0 10px;
`;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const Progress = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0 0 40px;
`;

export const ProgressMark = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: ${(props) => (props.finished === true ? '#7d40e7' : '#fff')};
  border-width: 1px;
  border-color: #7d40e7;
`;

export const ProgressLine = styled.View`
  background: #7d40e7;
  width: 110px;
  height: 1px;
`;

export const ProgressLabelGroup = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 5px 20px 0 20px;
`;

export const ProgressLabelText = styled.Text`
  height: 50px;
  width: 60px;
  font-size: 8px;
  color: #999;
  text-align: center;
`;

export const Footer = styled.View`
  width: 335px;
  height: 64px;
  background: #f8f9fd;
  flex-direction: row;
`;

export const FooterColumn = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 20px;
  align-items: flex-start;
  justify-content: center;
`;

export const FooterTitle = styled.Text`
  font-size: 8px;
  color: #999;
`;

export const FooterValue = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;

export const FooterTouchableDetail = styled.TouchableOpacity`
  background: transparent;
`;

export const FooterTouchableDetailText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
