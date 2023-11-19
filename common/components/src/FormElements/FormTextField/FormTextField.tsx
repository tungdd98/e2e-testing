import React, { FC, memo } from 'react';
import { Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { FormInputProps } from '../form.types';

type FormTextFieldProps = FormInputProps & {
  textFieldProps?: TextFieldProps;
};

const FormTextField: FC<FormTextFieldProps> = ({
  name,
  control,
  label,
  textFieldProps,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          {...textFieldProps}
        />
      )}
    />
  );
};

export default memo(FormTextField);
