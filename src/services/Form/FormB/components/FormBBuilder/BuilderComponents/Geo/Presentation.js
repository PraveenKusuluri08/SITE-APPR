import React from 'react'
import { TextField, IconButton, Grid, Button, MenuItem } from "@material-ui/core"

function Presentation(props) {
  const { onSelect, sectionKey, countryKey = "", state } = props
  return (
    <div className="text-center" >
      <h4>Select the country field to map with this state field:</h4>
      <TextField
        select
        label="Map Country"
        fullWidth
        size="small"
        required
        variant="outlined"
        value={countryKey}
        onChange={onSelect}
      // helperText="Please select your currency"
      >
        {
          state.formBTemplate.data.sections[sectionKey].fields.filter(f => f.type === "country").map(t => {
            return <MenuItem key={t.name} value={t.name} >{t.label}</MenuItem>
          })
        }
      </TextField>
      <br />
      <br />
    </div>
  )
}

export default Presentation
