import React from 'react'
import Edit from "../../../RenderProfile/RenderComponents/Edit"
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
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CustomRender from "../../../../../../../shared/components/valueRender"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CustomLabel from "../CustomLabelAndValue"
import ProfileCard from "../ProfileCard"

function Presentation(props) {
  const { state, section } = props
  const employeeProfile = {
    [section.access_key]: {},
    ...state.employeeProfile.data
  }
  return (
    <div>
      <ProfileCard
        header={section.sectionName}
        section={section}
        ContentToBeRendered={() => <div>
          <Grid container spacing={2}>
            {
              section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                return (
                  <Grid item>
                    <CustomLabel
                      label={field.label}
                      value={employeeProfile[section.access_key][field.name]}
                      type={field.type}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>}
      />
      {/* <TableCell width="40%" align="left">
        <Edit isEdit={true} editingData={employeeProfile[section.access_key]} index={null} sectionKey={section.access_key} />
      </TableCell> */}
    </div>
  )
}


export default Presentation