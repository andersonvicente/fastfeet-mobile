import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

export default function ButtonDelivery({
  disabled,
  text,
  iconName,
  iconColor,
  onPress,
}) {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Icon
        name={iconName}
        size={22}
        color={disabled ? '#999' : iconColor}
        style={{ opacity: disabled ? 0.3 : 1 }}
      />
      <ButtonText disabled={disabled}>{text}</ButtonText>
    </Container>
  );
}

ButtonDelivery.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

ButtonDelivery.defaultProps = {
  disabled: false,
  onPress: null,
};
