import React from 'react'
import { TextField, IconButton, Grid, Button, MenuItem } from "@material-ui/core"

function Presentation(props) {
  const { onSelect, sectionKey, minDateKey = "", state } = props
  return (
    <div className="text-center" >
      <h4>Select the FROM DATE field to map with this TO DATE date field:</h4>
      <TextField
        select
        label="Map Start Date"
        fullWidth
        size="small"
        required
        variant="outlined"
        value={minDateKey}
        onChange={onSelect}
      // helperText="Please select your currency"
      >
        {
          state.formBTemplate.data.sections[sectionKey].fields.filter(f => f.type === "fromdate").map(t => {
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
