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
import Delete from "../../../RenderProfile/RenderComponents/Delete"
import CustomRender from "../../../../../../../shared/components/valueRender"
import ProfileCard from "../ProfileCard"
import CustomLabel from "../CustomLabelAndValue"

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
      <ProfileCard
        header={section.sectionName}
        section={section}
        ContentToBeRendered={() => <div>
          {
            employeeProfile[section.access_key].map((obj, index) => {
              return (
                <Grid container spacing={2}>
                  {
                    section.fields.sort((a, b) => a.fieldPriority - b.fieldPriority).map(field => {
                      return (
                        <Grid item xs={4}>
                          <CustomLabel
                            label={field.label}
                            value={obj[field.name]}
                            type={field.type}
                          />
                        </Grid>
                      )
                    })
                  }
                  {/* <TableCell width="40%" align="left">
                    <div className="d-flex" >
                      <Edit isEdit={true} editingData={obj} index={index} sectionKey={section.access_key} />
                      <Delete
                        section={section}
                        index={index}
                      />
                    </div>

                  </TableCell> */}
                </Grid>
              )
            })
          }
        </div>}
      />
    </div>

  )
}

export default Presentation