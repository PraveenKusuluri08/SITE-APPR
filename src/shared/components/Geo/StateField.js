import React, { useEffect, useState } from "react"
import { Grid, TextField, CircularProgress } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCountries } from "../../middleware/index"
import stateLoader from "../../../providers/stateLoader"
import { errorMsg } from "../../SnackBars/index"

function State(props) {
  const {
    label,
    handleChange,
    required,
    value = "",
    country,
    countries,
    key
  } = props
  const [selectedCountry, setSelectedCountry] = useState({})
  const [selectedState, setSelectedState] = useState({ name: "" })
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    if (countries.length && country)
      setSelectedCountry(
        countries.filter(
          (item) => item.iso2 === country || item.name === country
        )[0]
      )
  }, [country, countries.length])

  const [states, setStates] = useState([])

  useEffect(() => {
    async function fetchStates() {
      if (selectedCountry.iso2) {
        try {
          let data = await stateLoader(selectedCountry.iso2)
          console.log(data);
          setStates(data)
        } catch (error) {
          console.error(error)
          errorMsg("Failed to load states for " + country)
          // setStates([])
        }
      }
    }
    fetchStates()
  }, [selectedCountry.iso2])

  useEffect(() => {
    if (value.length && states.length) {
      setLoading(false)
      setSelectedState(
        states.filter(
          (item) => item.state_code === value || item.name === value
        )[0]
      )
    }
  }, [value, states.length])
  console.log(props, states, selectedState, value);
  return (
    <Autocomplete
      fullWidth
      options={states}
      onChange={(event, info) => {
        if (info) {
          handleChange({ target: { value: info.name } })
        }
      }}
      value={selectedState}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          key={key}
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
                {loading ? <CircularProgress color="inherit" size={15} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  const shared = state.shared.geoInfo
  return {
    countries: shared.countries.list,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _get_countries: () => {
      dispatch(getCountries())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(State)



