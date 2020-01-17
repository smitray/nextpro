/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox as ChkBx,
  FormGroup
} from '@material-ui/core';

const Checkbox = ({ data, groupLabel }) => (
  <>
    <FormControl component="fieldset">
      <FormLabel component="legend">{`${groupLabel[0].toUpperCase()}${groupLabel.slice(1)}`}</FormLabel>
      <FormGroup row>
        {data.map((it, index) => <FormControlLabel value={it.value} control={<ChkBx value={it.value} />} label={it.label} key={index} />)}
      </FormGroup>
    </FormControl>
  </>
);

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
  groupLabel: 'Choose any'
};

export default Checkbox;
