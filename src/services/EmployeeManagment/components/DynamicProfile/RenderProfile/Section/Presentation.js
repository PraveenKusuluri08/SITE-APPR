import React from 'react'
import Edit from "../RenderComponents/Edit"
import {
  Grid,
  Button,
  Drawer,
  IconButton,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@material-ui/core';
import Collapse from "../RenderComponents/Collapse"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CustomRender from "../../../../../../shared/components/valueRender"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TypeArrayTable from "../RenderComponents/TypeArrayTable"
import TypeObjectTable from "../RenderComponents/TypeObjectTable"

function Presentation(props) {
  const { state, section } = props
  const employeeProfile = state.employeeProfile
  return (
    <Grid item xs={12}>
      {
        section.entryType === "array" ?
          <TypeArrayTable {...props} />
          :
          null
      }

      {
        section.entryType === "object" ?
          <TypeObjectTable {...props} />
          :
          null
      }

<br/>
      <div>
        <Collapse sectionKey={section.access_key} />
      </div>
    </Grid>
  )
}

export default Presentation
