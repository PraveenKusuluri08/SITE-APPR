import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { TextField, IconButton, Grid, Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Presentation(props) {
  const { values, deleteChip, anchorEl, handleClick, handleClose, onAdd, dropDownItem, setDropDownItem } = props
  const classes = useStyles();

  const open = Boolean(anchorEl);

  return (
    <Paper component="ul" className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <Grid container spacing={0}>
            {values.map((data) => {
              return (
                <span>
                  <Chip
                    label={data}
                    onDelete={() => deleteChip(data)}
                    className={classes.chip}
                  />
                </span>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <div>
            <IconButton variant="contained" color="primary" onClick={handleClick}>
              <AddIcon />
            </IconButton>
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
                <TextField
                  size="small"
                  autoFocus
                  label={"Value"}
                  value={dropDownItem}
                  onChange={(e) => setDropDownItem(e.target.value)}
                />
                <br />
                <br />
                <div className="text-center w-100" >
                  <Button
                    disabled={dropDownItem === ""}
                    onClick={onAdd}
                    variant="contained"
                    size="small"
                    color="primary"
                    type="submit"
                  >
                    Insert
                </Button>
                </div>
              </div>

            </Popover>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
