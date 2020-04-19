import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  HeaderTitle,
  Progress,
  ProgressMark,
  ProgressLine,
  ProgressLabelGroup,
  ProgressLabelText,
  Footer,
  FooterColumn,
  FooterTitle,
  FooterValue,
  FooterTouchableDetail,
  FooterTouchableDetailText,
} from './styles';

export default function DeliveryItem({ data, onDetail }) {
  const dateFormatted = useMemo(
    () => format(parseISO(data.created_at), 'dd/MM/yyyy'),
    [data]
  );

  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={22} color="#7D40E7" />
        <HeaderTitle>Encomenda {data.id}</HeaderTitle>
      </Header>
      <Progress>
        <ProgressMark finished={data.created_at !== null} />
        <ProgressLine />
        <ProgressMark finished={data.start_date !== null} />
        <ProgressLine />
        <ProgressMark finished={data.end_date !== null} />
      </Progress>
      <ProgressLabelGroup>
        <ProgressLabelText>Aguardando Retirada</ProgressLabelText>
        <ProgressLabelText>Retirada</ProgressLabelText>
        <ProgressLabelText>Entregue</ProgressLabelText>
      </ProgressLabelGroup>
      <Footer>
        <FooterColumn>
          <FooterTitle>Data</FooterTitle>
          <FooterValue>{dateFormatted}</FooterValue>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Cidade</FooterTitle>
          <FooterValue>{data.recipient.city}</FooterValue>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle />
          <FooterTouchableDetail onPress={onDetail}>
            <FooterTouchableDetailText>Ver detalhes</FooterTouchableDetailText>
          </FooterTouchableDetail>
        </FooterColumn>
      </Footer>
    </Container>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.object.isRequired,
  onDetail: PropTypes.func,
};

DeliveryItem.defaultProps = {
  onDetail: null,
};
