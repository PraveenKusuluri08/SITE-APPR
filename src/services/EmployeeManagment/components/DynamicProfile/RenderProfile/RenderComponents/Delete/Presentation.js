import React from 'react'
import Icon from '@material-ui/core/Icon';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Dialog, Typography, DialogContent, Button, DialogActions, IconButton, CircularProgress, FormHelperText } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import styles from "../../../../../../../styles/dialogStyles"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Presentation(props) {

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const { handleClickOpen, open, handleClose, onDelete, state, hideBtn, disableBtn } = props
  console.log(disableBtn)
  return (
    <div className="text-center">
      <IconButton
        onClick={() => onDelete()}
        color="secondary"
        onClick={handleClickOpen}
      >
        <DeleteOutlineIcon />
      </IconButton>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Are you sure?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You want to delete this item ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDelete} variant="contained" color="primary">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Presentation
