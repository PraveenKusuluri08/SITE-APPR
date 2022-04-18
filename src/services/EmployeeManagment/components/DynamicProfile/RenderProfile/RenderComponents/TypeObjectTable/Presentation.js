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
import { styled } from '@mui/styles'
function Presentation(props) {

  const StyledTableRow = styled(TableRow)({
    background: 'linear-gradient(45deg, #280071 10%, #c42053 90%)',
  });
  const StyledTableCell = styled(TableCell)({
    color: 'white',
  })
  const { state, section } = props
  const employeeProfile = {
    [section.access_key]: {},
    ...state.employeeProfile.data
  }
  return (
    <div>
      <div>
        <h3 className="">
          {section.sectionName}:
        </h3>
      </div>
      <TableContainer component={Paper}>
        <Table
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <StyledTableRow>
              {
                section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                  return (
                    <StyledTableCell width="40%" align="left" style={{ color: 'white' }}>
                      {field.label}
                    </StyledTableCell>
                  )
                })
              }
              <StyledTableCell width="40%" align="left" style={{ color: 'white' }}>
                Actions
              </StyledTableCell>
            </StyledTableRow>
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
    </div >)
}


export default Presentation