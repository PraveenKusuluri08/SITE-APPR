import React from "react"
import { TextField, MenuItem } from "@material-ui/core"
import {
  MobileNumberFormatter,
  NumberFormatCustom,
} from "./customNumberFormats"
import validate from "./validation"


export const TextInput = ({ label, name, handleChange, required, value = "", variant = "outlined" }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={handleChange}
      required={required}
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  )
}

export const AlphaNumericInput = ({ label, name, handleChange, required, value = "", variant = "outlined" }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={(e) => e.target.value.match(/^[a-z0-9]+$/i) || e.target.value.length === 0 ? handleChange(e) : () => { }}
      required={required}
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  )
}

export const NameInput = ({ label, name, handleChange, required, value = "", variant = "outlined" }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={(e) => validate.checkName(e.target.value) ? handleChange(e) : () => { }}
      required={required}
      helperText={value.length && !validate.checkName(value) ? "Enter valid " + label : ""}
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  )
}

export const PhoneInput = ({ label, name, handleChange, required, value = "", variant = "outlined" }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={handleChange}
      helperText={value.length && !validate.checkNumber(value) ? "Enter valid " + label : ""}
      variant={variant}
      size="small"
      required={required}
      value={value}
      fullWidth
      InputProps={{
        inputComponent: MobileNumberFormatter,
      }}
    />
  )
}

export const EmailInput = ({ label, name, handleChange, required, value = "", variant = "outlined", disabled = false }) => {
  return (
    <TextField
      label={label}
      name={name}
      disabled={disabled}
      type="email"
      onChange={handleChange}
      helperText={value.length && !validate.checkEmail(value) ? "Enter valid " + label : ""}
      required={required}
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  )
}

export const NumberInput = ({ label, name, handleChange, required, value = "", variant = "outlined" }) => {
  return (
    <TextField
      label={label}
      name={name}
      onChange={handleChange}
      variant={variant}
      size="small"
      required={required}
      value={value}
      fullWidth
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  )
}

export const SelectInput = ({ label, name, handleChange, required, menuItems, value = "", variant = "outlined" }) => {
  return (
    <TextField
      select
      label={label}
      name={name}
      onChange={handleChange}
      variant={variant}
      size="small"
      required={required}
      value={value}
      fullWidth
    >
      {
        menuItems.map(item => <MenuItem value={item} >{item}</MenuItem>)
      }
    </TextField>
  )
}


export function CustomField(details) {
  switch (details.type) {
    case "text": return <TextInput {...details} />

    case "name": return <NameInput {...details} />

    case "phone": return <PhoneInput {...details} />

    case "email": return <EmailInput {...details} />

    case "number": return <NumberInput {...details} />

    case "select": return <SelectInput {...details} />


    case "address": return <TextInput {...details} />

    case "alphanum": return <TextInput {...details} />


    case "alphanumeric": return <AlphaNumericInput {...details} />

    default: return <div />
  }
}