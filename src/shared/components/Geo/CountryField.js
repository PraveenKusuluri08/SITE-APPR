import React, { useEffect, useState } from "react"
import { Grid, TextField, CircularProgress } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCountries } from "../../middleware/index"

function Country(props) {
  const {
    _get_countries,
    label,
    name,
    handleChange,
    required,
    value = "",
    key,
    stateKeyName,
    countries
  } = props
  const [selectedCountry, setSelectedCountry] = useState({})
  useEffect(() => {
    if (countries.length === 0)
      _get_countries()
  }, [countries.length])

  useEffect(() => {
    if (countries.length && value)
      setSelectedCountry(
        countries.filter(
          (item) => item.iso2 === value || item.name === value
        )[0]
      )
  }, [value, countries.length])

  return (
    <Autocomplete
      fullWidth
      options={countries}
      onChange={(event, info) => {
        if (info) {
          handleChange({ target: { value: info.name } })
        }
      }}
      value={selectedCountry}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          key={key}
          label={label}
          required={required}
          variant="outlined"
          size="small"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {!countries.length ? <CircularProgress color="inherit" size={15} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}

const mapStateToPropsForCountry = (state, ownProps) => {
  const shared = state.shared.geoInfo
  console.log("shared",shared)
  return {
    countries: shared.countries.list,
  }
}

const mapDispatchToPropsForCountry = (dispatch, ownProps) => {
  return {
    _get_countries: () => {
      dispatch(getCountries())
    },
  }
}

export default connect(mapStateToPropsForCountry, mapDispatchToPropsForCountry)(Country)



