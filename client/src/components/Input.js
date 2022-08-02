import React from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Input = ({ id, name, label, type, handleChange, autoComplete, handleShowPassword }) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      type={type}
      onChange={handleChange}
      autoComplete={autoComplete}
      required
      fullWidth
      margin="normal"
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      } : null}
    />
  );
};

export default Input;
