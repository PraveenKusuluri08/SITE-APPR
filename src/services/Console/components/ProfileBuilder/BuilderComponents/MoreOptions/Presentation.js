import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Paper, Grid, IconButton } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddInputField from "../../AddInputField"

export default function Presentation(props) {
  const { anchorEl, handleClick, handleClose, onDelete, sectionKey, section, field } = props

  return (
    
    <div >
      <IconButton onClick={handleClick}>
        <ExpandMoreIcon fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><AddInputField field={field} isEdit={true} sectionKey={sectionKey} section={section} /></MenuItem>
        <MenuItem onClick={onDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
