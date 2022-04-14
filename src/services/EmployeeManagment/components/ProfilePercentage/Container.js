import React, { useState } from "react"
import { firestoreConnect, isLoaded } from "react-redux-firebase"
import Presentation from "./Presentation"
import { compose } from "redux"
import { connect } from "react-redux"
function Container(props) {
  const [state, setState] = useState({
    profile: props.profile,
    personalFilled: 0,
  })
  const profile = props.profile
  let totalFields = 0
  totalFields = 36
  const percentageCount = {
    personal: 20,
    emergencycontact: 20,
    employment: 20,
    workauth: 20,
    edu: 20,
  }

  let unFilledFields = 0
  let fillableSectionsTypeObj = ["personal", "mailingaddress"]
  let fillableSectionsTypeArr = [
    "emergencycontact",
    "employmenthistory",
    "workauth",
    "educationhistory",
  ]
  const personalFields = 12
  const mailingFields = 7
  const employmenthistoryFields = 3
  const emergencycontactFields = 2
  const educationhistoryFields = 8
  const workauthFields = 4
  const fillableSectionsTypeObjOfUnReq = ["middlename", "line2"]
  const fillableSectionsTypeArrOfUnReqEmpCon = ["emailid"]
  const fillableSectionsTypeArrOfUnReqEmpHis = [
    "toDate",
    "vendorEmail",
    "vendorName",
    "vendorPhone",
    "workingEmailid",
  ]
  const fillableSectionsTypeArrOfUnReqWorAut = ["work_number"]
  fillableSectionsTypeObj.forEach((item) => {
    Object.entries(profile[item]).forEach(([key, value]) => {
      console.log(key, value)
      if (
        key !== "isSupervisor" &&
        !value &&
        !fillableSectionsTypeObjOfUnReq.includes(key)
      ) {
        console.log(key)
        unFilledFields++
      }
    })
  })

  fillableSectionsTypeArr.forEach((item) => {
    try {
      if (item.length) {
        Object.entries(profile[item][0]).forEach(([key, value]) => {
          if (
            !value &&
            (item === "emergencycontact"
              ? !fillableSectionsTypeArrOfUnReqEmpCon.includes(key)
              : item === "employmenthistory"
              ? fillableSectionsTypeArrOfUnReqEmpHis.includes(key)
              : item === "workauth"
              ? fillableSectionsTypeArrOfUnReqWorAut.includes(key)
              : item === "educationhistory"
              ? fillableSectionsTypeArrOfUnReqEmpHis.includes(key)
              : null)
          ) {
            unFilledFields++
          }
        })
      }
      //else{
      //     if(item === 'emergencycontact')
      //         unFilledFields += emergencycontactFields
      //     else if(item === "employmenthistory")
      //         unFilledFields += employmenthistoryFields
      //     else if(item === "workauth")
      //         unFilledFields += workauthFields
      //     else if(item === "educationhistory")
      //         unFilledFields += educationhistoryFields
      // }
    } catch (error) {
      if (item === "emergencycontact") unFilledFields += emergencycontactFields
      else if (item === "employmenthistory")
        unFilledFields += employmenthistoryFields
      else if (item === "workauth") unFilledFields += workauthFields
      else if (item === "educationhistory")
        unFilledFields += educationhistoryFields
    }
  })

  return (
    <div>
      <Presentation
        percentageCount={percentageCount}
        totalFields={totalFields}
        unFilledFields={unFilledFields}
      />
    </div>
  )
}

export default Container
