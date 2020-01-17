/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';

const RadioButton = ({ data, groupLabel }) => (
  <>
    <FormControl component="fieldset">
      <FormLabel component="legend">{`${groupLabel[0].toUpperCase()}${groupLabel.slice(1)}`}</FormLabel>
      <RadioGroup aria-label={groupLabel} name={groupLabel} row>
        {data.map((it, index) => <FormControlLabel value={it.value} control={<Radio color="primary" />} label={it.label} key={index} />)}
      </RadioGroup>
    </FormControl>
  </>
);

RadioButton.propTypes = {
  /**
   * Data is defined provide the values and keys for the radio buttons
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  /**
   * Group Label is defined for group name
   */
  groupLabel: PropTypes.string
};

RadioButton.defaultProps = {
  groupLabel: 'Choose one'
};

export default RadioButton;
