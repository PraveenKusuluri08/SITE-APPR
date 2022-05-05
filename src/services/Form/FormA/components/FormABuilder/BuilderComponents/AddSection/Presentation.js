import React from 'react';
import { TextField, IconButton, Grid, Button, MenuItem } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';

export default function Presentation(props) {
  const {
    anchorEl,
    handleClick,
    handleClose,
    onAddSection,
    sectionName,
    setSectionName,
    setEntryType,
    entryType,
    state
  } = props

  const open = Boolean(anchorEl);
  

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add Section
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className="p-2" >
          <form onSubmit={onAddSection} >
            <TextField
              size="small"
              autoFocus
              label={"Section Name"}
              fullWidth
              required
              // helperText={Object.keys(state.formATemplate.data.sections).includes(sectionName) ? "Already a section exists" : ""}
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label={"Entry Type"}
              size="small"
              fullWidth
              required
              select
              value={entryType}
              onChange={(e) => setEntryType(e.target.value)}
            >
              <MenuItem value={"object"} >Single Entry</MenuItem>
              <MenuItem value={"array"} >Multiple Entry</MenuItem>
            </TextField>
            <br />
            <br />
            <div className="text-center w-100" >
              <Button
                // disabled={Object.keys(state.formATemplate.data.sections).includes(sectionName)}
                variant="contained"
                size="small"
                color="primary"
                type="submit"
              >
                Create
                </Button>
            </div>
          </form>
        </div>

      </Popover>
    </div>
  );
}
