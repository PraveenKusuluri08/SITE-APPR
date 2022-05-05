import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from "@material-ui/core"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Presentation({ onEdit, isEdit }) {
  return (
    <div>
      {
        isEdit ?
          <IconButton onClick={onEdit}  >
            <EditIcon color="default" />
          </IconButton>
          :
          <IconButton onClick={onEdit} color="primary"  style={{width:"20px",height:"20px"}} >
            <AddCircleOutlineIcon color="default" />
          </IconButton>
      }
    </div>
  )
}

export default Presentation
