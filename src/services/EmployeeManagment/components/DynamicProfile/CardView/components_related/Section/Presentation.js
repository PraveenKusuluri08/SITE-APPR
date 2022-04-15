import React from 'react'
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
import Collapse from "../../../RenderProfile/RenderComponents/Collapse"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CustomRender from "../../../../../../../shared/components/valueRender"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TypeArrayCard from "../TypeArrayCard"
import TypeObjectCard from "../TypeObjectCard"

function Presentation(props) {
  const { state, section } = props
  const employeeProfile = state.employeeProfile
  return (
    <Grid item xs={4}>
      {
        section.entryType === "array" ?
          <TypeArrayCard {...props} />
          :
          null
      }

      {
        section.entryType === "object" ?
          <TypeObjectCard {...props} />
          :
          null
      }


      <div>
        <Collapse sectionKey={section.access_key} />
      </div>
    </Grid>
  )
}

export default Presentation
