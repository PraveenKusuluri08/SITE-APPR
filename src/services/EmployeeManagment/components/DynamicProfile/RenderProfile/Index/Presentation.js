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
import Section from "../Section"
// import PrintPDF from "../../../PrintPDF"
// import AssignRole from "../../../AssignRole"
import ProfilePercentage from "../../../ProfilePercentage"
import IDcard from "../../../IDcard"

function Presentation(props) {
  const { state } = props
  const profileTemplate = state.profileTemplate
  const employeeProfile = state.employeeProfile
  const sections = state.profileTemplate.data.sections
  const loadingCondition = profileTemplate.isLoading || employeeProfile.isLoading
  const errorCondition = (profileTemplate.error !== "") || (employeeProfile.error !== "")
  console.log("SECTIONS",sections)
  if (loadingCondition)
    return "Loading"
  else if (errorCondition)
    return "Failed to load"
  return (
    <div>
      {/* <Paper className="p-2" > */}
      <Grid className="rounded p-1" container spacing={1}>
        <Grid item md={3} sm={12} xs={12}>
          <div style={{ margin: "8px" }}>
            <IDcard profile={employeeProfile.data} id={employeeProfile.data.employeeID} individual={false} />
            <br />
            {/* <ProfilePercentage profile={employeeProfile.data} /> */}
            {/* <AssignRole id={employeeProfile.data.employeeID} profile={employeeProfile.data} /> */}
            {/* <PrintPDF profile={employeeProfile.data} id={employeeProfile.data.employeeID} individual={false} /> */}
          </div>
        </Grid>
        <Grid item md={9} sm={12} xs={12}>
          <Grid container spacing={1}>
            {
              Object.values(sections).sort((a, b) => a.sortPriority - b.sortPriority).map(item => {
                console.log("Itemm",item.access_key)
                return (
                  <Section key={item.access_key} section={item} />
               
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </div>
  )
}

export default Presentation
