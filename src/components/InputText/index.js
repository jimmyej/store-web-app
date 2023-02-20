import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const InputText = ({ id, label, value, handleChange, focus = false, type = "text" }) => {
  return (
    <TextField
      id={id}
      name={id}
      autoComplete={id}
      type={type}
      margin="normal"
      variant="standard"
      label={label}
      value={value}
      onChange={handleChange}
      fullWidth
      autoFocus={focus}
    />
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  focus: PropTypes.bool,
  type: PropTypes.string
};

export default InputText;
