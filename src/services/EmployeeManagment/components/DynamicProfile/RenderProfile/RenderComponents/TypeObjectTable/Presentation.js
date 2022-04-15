import React from 'react'
import Edit from "../../RenderComponents/Edit"
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

function Presentation(props) {
  const { state, section } = props
  const employeeProfile = {
    [section.access_key]: {},
    ...state.employeeProfile.data
  }
  return (
    <div>
      <div className="d-flex justify-content-between" >
        <h3 className="">
          <u>{section.sectionName}:</u>
        </h3>
      </div>
      <TableContainer component={Paper}>
        <Table
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              {
                section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                  return (
                    <TableCell width="40%" align="left">
                      {field.label}
                    </TableCell>
                  )
                })
              }
              <TableCell width="40%" align="left">
                Actions
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {
                section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                  return (
                    <TableCell width="40%" align="left">
                      <CustomRender
                        type={field.type}
                        value={employeeProfile[section.access_key][field.name]}
                      />
                    </TableCell>
                  )
                })
              }
              <TableCell width="40%" align="left">
                <Edit isEdit={true} editingData={employeeProfile[section.access_key]} index={null} sectionKey={section.access_key} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}


export default Presentation