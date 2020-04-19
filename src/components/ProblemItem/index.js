import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import { Container, Description, CreatedAt } from './styles';

export default function ProblemItem({ data }) {
  const dateFormatted = useMemo(
    () => format(parseISO(data.created_at), 'dd/MM/yyyy'),
    [data]
  );

  return (
    <Container>
      <Description>{data.description}</Description>
      <CreatedAt>{dateFormatted}</CreatedAt>
    </Container>
  );
}

ProblemItem.propTypes = {
  data: PropTypes.object.isRequired,
};
