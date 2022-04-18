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
import Delete from "../Delete"
import { styled } from '@mui/styles';
import CustomRender from "../../../../../../../shared/components/valueRender"

function Presentation(props) {

  const StyledTableCell = styled(TableCell)({
    color: 'white',
    width: '5vw'
  })
  const StyledTableRow = styled(TableRow)({
    background: 'linear-gradient(45deg, #280071 10%, #c42053 90%)',
  });
  const { state, section, onDelete } = props
  const employeeProfile = {
    [section.access_key]: [],
    ...state.employeeProfile.data
  }
  console.log(section.access_key);
  const pushableData = section.fields.reduce((init, item) => {
    return {
      ...init,
      [item.name]: ""
    }
  }, {})
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>
          {section.sectionName}:
        </h3>
        <div>
          <Edit isEdit={false} editingData={pushableData} index={employeeProfile[section.access_key].length} sectionKey={section.access_key} />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table
          Table sx={{ minWidth: 700 }} aria-label="customized table"
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
            {
              employeeProfile[section.access_key].map((obj, index) => {
                return (
                  <TableRow>
                    {
                      section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                        return (

                          <TableCell width="40%" align="left" style={{}}>
                            <CustomRender
                              type={field.type}
                              value={obj[field.name]}
                            />
                          </TableCell>
                        )
                      })
                    }
                    <TableCell width="40%" align="left">
                      <div className="d-flex" >
                        <Edit isEdit={true} editingData={obj} index={index} sectionKey={section.access_key} />
                        <Delete
                          section={section}
                          index={index}
                        />
                      </div>

                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  )
}

export default Presentation