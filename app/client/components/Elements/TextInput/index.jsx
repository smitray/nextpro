import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const TextInput = ({ label, fullWidth }) => (
  <>
    <TextField
      label={label}
      margin="normal"
      variant="outlined"
      fullWidth={fullWidth}
    />
  </>
);

TextInput.propTypes = {
  /**
   * Label is used to define the text input
   */
  label: PropTypes.string.isRequired,
  /**
   * Full width is defined to make the text input 100% width
   */
  fullWidth: PropTypes.bool
};

TextInput.defaultProps = {
  fullWidth: false
};

export default TextInput;
