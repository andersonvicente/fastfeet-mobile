import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import PropTypes from 'prop-types';

import api from '~/services/api';
import BackgroundDelivery from '~/components/BackgroundDelivery';

import { Container, Subtitle, ProblemsList } from './styles';

import ProblemItem from '~/components/ProblemItem';

function Problems({ isFocused, route }) {
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#7d40e7');
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  const { delivery } = route.params;

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${delivery.id}/problems`);

      setProblems(response.data);
    }

    loadProblems();
  }, [delivery]);

  return (
    <BackgroundDelivery>
      <Container>
        <Subtitle>Encomenda {delivery.id}</Subtitle>
        <ProblemsList
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ProblemItem data={item} />}
        />
      </Container>
    </BackgroundDelivery>
  );
}

Problems.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Problems);
