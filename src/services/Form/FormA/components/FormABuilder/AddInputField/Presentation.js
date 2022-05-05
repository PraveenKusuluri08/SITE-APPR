import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import {
  IconButton,
  TextField,
  MenuItem,
  Grid,
  FormControlLabel,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IOSSwitch from "../../../../../../shared/iosSwitch";
import {
  TextInput,
  CustomField,
} from "../../../../../../shared/formFileds";
import Select from "../BuilderComponents/Select";
import Geo from "../BuilderComponents/Geo";
import DateRange from "../BuilderComponents/DateRange";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Presentation(props) {
  const {
    handleClose,
    handleClickOpen,
    open,
    section,
    setNewFieldState,
    state,
    addNewField,
    sectionKey,
    isEdit,
  } = props;
  const fieldTypes = [
    "text",
    "alphanumeric",
    "name",
    "phone",
    "email",
    "number",
    "select",
    "checkbox",
    "date",
    "fromdate",
    "todate",
    "file",
  ];
  const newField = state.newField;
  return (
    <div >
      <div  > 

      {
        isEdit ? <span onClick={handleClickOpen} >Edit</span>
          :
          <IconButton onClick={handleClickOpen} style={{display:"flex",justifyContent:"space-between"}} >
            <AddCircleOutlineIcon color="primary" style={{width:"25px",height:"25px"}} />
          </IconButton>
}
      </div>

      <Dialog
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {section?.sectionName}
        </DialogTitle>
        <DialogContent dividers>
          <Grid justify="center" container spacing={2}>
            <Grid item xs={12} sm={newField.type === "" ? 12 : 4}>
              {newField.type !== "" ? (
                <CustomField
                  type={newField.type}
                  required={newField.required}
                  label={newField.label}
                  menuItems={newField.values}
                  handleChange={() => {}}
                />
              ) : (
                <h4 className="text-center">Select field to see the preview</h4>
              )}
            </Grid>
          </Grid>
          <br />
          <hr />
          <form onSubmit={addNewField}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  select
                  label="Field Type"
                  fullWidth
                  size="small"
                  required
                  variant="outlined"
                  value={newField.type}
                  onChange={(e) => setNewFieldState({ type: e.target.value })}
                  // helperText="Please select your currency"
                >
                  <MenuItem value={""}>
                    <em>None</em>
                  </MenuItem>
                  {fieldTypes.map((t) => {
                    return (
                      <MenuItem key={t} value={t}>
                        {t[0].toUpperCase() + t.slice(1)}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label={"Field Name"}
                  fullWidth
                  size="small"
                  required
                  variant="outlined"
                  value={newField.label}
                  onChange={(e) => setNewFieldState({ label: e.target.value })}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<IOSSwitch />}
                  label="Required Field"
                  required
                  value={newField.required}
                  onChange={(e) =>
                    setNewFieldState({ required: e.target.checked })
                  }
                />
              </Grid>
              {newField.type === "select" ? (
                <Grid item xs={12}>
                  <Select />
                </Grid>
              ) : null}

              {newField.type === "state" ? (
                <Grid item xs={12}>
                  <Geo sectionKey={sectionKey} />
                </Grid>
              ) : null}

              {newField.type === "todate" ? (
                <Grid item xs={12}>
                  <DateRange sectionKey={sectionKey} />
                </Grid>
              ) : null}
            </Grid>
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                color={isEdit ? "secondary" : "primary"}
              >
                {isEdit ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
