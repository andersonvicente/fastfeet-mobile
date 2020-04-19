import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { withNavigationFocus } from '@react-navigation/compat';
import PropTypes from 'prop-types';

import BackgroundDelivery from '~/components/BackgroundDelivery';

import { Container, ProblemInput, SubmitButton } from './styles';

import { createRequest, resetRequest } from '~/store/modules/problem/actions';

function ReportProblem({ isFocused, route, navigation }) {
  useEffect(() => {
    if (isFocused) {
      StatusBar.setBackgroundColor('#7d40e7');
      StatusBar.setBarStyle('light-content');
    }
  }, [isFocused]);

  const { delivery } = route.params;

  const dispatch = useDispatch();

  const [problem, setProblem] = useState('');

  const loading = useSelector((state) => state.problem.loading);
  const success = useSelector((state) => state.problem.success);

  useEffect(() => {
    function verifySuccess() {
      if (success === true) {
        dispatch(resetRequest());
        setProblem('');
        navigation.navigate('Deliveries');
      }
    }

    verifySuccess();
  }, [success, navigation, dispatch]);

  function handleSubmit() {
    dispatch(
      createRequest({
        deliveryId: delivery.id,
        description: problem,
      })
    );
  }

  return (
    <BackgroundDelivery>
      <Container>
        <ProblemInput
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="sentences"
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={problem}
          onChangeText={setProblem}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Container>
    </BackgroundDelivery>
  );
}

ReportProblem.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  route: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(ReportProblem);
