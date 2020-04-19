import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Cpf({ style, ...rest }) {
  const [value, setValue] = useState('');
  const [mask, setMask] = useState(value);

  function onlyNumbers(val) {
    let numbers = '';
    for (let x = 0; x < val.length; x++) {
      switch (val.substr(x, 1)) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          numbers += val.substr(x, 1);
          break;
        default:
      }
    }
    return numbers;
  }

  function ApplyMask(val) {
    val = onlyNumbers(val);
    let result = '';
    result += val.substr(0, 2) + (val.substr(0, 2).length === 2 ? '.' : '');
    result += val.substr(2, 3) + (val.substr(2, 3).length === 3 ? '.' : '');
    result += val.substr(5, 3) + (val.substr(5, 3).length === 3 ? '/' : '');
    result += val.substr(8, 4) + (val.substr(8, 4).length === 4 ? '-' : '');
    result += val.substr(11, 2);
    setMask(`${result}`);
  }

  useEffect(() => {
    ApplyMask(value);
  }, [value]);

  return (
    <Container style={style}>
      <TInput {...rest} value={mask} onChangeText={setValue} />
    </Container>
  );
}

Cpf.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Cpf.defaultProps = {
  style: {},
};

export default Cpf;
