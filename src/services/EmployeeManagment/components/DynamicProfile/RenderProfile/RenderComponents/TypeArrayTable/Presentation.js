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
import CustomRender from "../../../../../../../shared/components/valueRender"

function Presentation(props) {
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
      <div className="d-flex justify-content-between" >
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h3 style={{marginLeft:"9px",fontSize:"18px",fontWeight:"bold"}}>
          <u>{section.sectionName}:</u>
        </h3>
        <div>
          <Edit isEdit={false} editingData={pushableData} index={employeeProfile[section.access_key].length} sectionKey={section.access_key} />
        </div>
      </div>
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
            {
              employeeProfile[section.access_key].map((obj, index) => {
                return (
                  <TableRow>
                    {
                      section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                        return (
                          <TableCell width="40%" align="left">
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