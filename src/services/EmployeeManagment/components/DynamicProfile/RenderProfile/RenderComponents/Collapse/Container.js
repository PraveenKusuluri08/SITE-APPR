import React, { useState, useEffect } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state } from "../../../../../middleware/dynamicProfileRender"
import Validations from '../../../../../../../shared/validation'

function Container(props) {
  const { sectionKey, state, setState, _update_profile, access_modules } = props
  const [componentState, setComponentState] = useState({
    filePath: "",
    fileName: ""
  })
  const [buttonDisability, setButtonDisability] = useState(true)

  const setEditingData = (obj) => {
    setState({
      editingData: {
        ...state.editingData,
        ...obj
      }
    })
    // checkDisability()
  }

  useEffect(() => {
    if (sectionKey && state.editingSection.access_key === sectionKey) {
      const fields = state.profileTemplate.data.sections[sectionKey].fields
      const condition = fields.every(field => {
        const {
          type,
          name,
          minDate = null,
          maxDate = null,
        } = field
        console.log(minDate, maxDate);
        const details = {
          type,
          value: state.editingData[name] || "",
          startDate: type === "fromdate" ? state.editingData[name] : state.editingData[minDate],
          endDate: type === "todate" ? state.editingData[name] : state.editingData[maxDate]
        }
        console.log(Validations.valueValidation(details), name, state.editingData[name]);
        return Validations.valueValidation(details)
      })
      console.log(sectionKey, condition);
      setButtonDisability(!condition)
    }

  }, [JSON.stringify(state.editingData)])

  // const checkDisability = () => {
  //   const fields = sectionKey ? state.profileTemplate.data.sections[sectionKey].fields : []
  //   const condition = fields.some(field => {
  //     const {
  //       type,
  //       name,
  //       minDate = null,
  //       maxDate = null,
  //     } = field
  //     const details = {
  //       type,
  //       value: state.editingData[name],
  //       minDate,
  //       maxDate
  //     }
  //     return Validations.valueValidation(details) === false
  //   })
  //   setButtonDisability(condition)
  // }

  useEffect(() => {
    const employeeID = state.employeeProfile.data.employeeID
    const fileName = [employeeID, "_", new Date().toISOString()].join("")
    const filePath = `EmployeeInfo/${employeeID}/${sectionKey}/${fileName}`
    setComponentState({
      filePath,
      fileName
    })
  }, [state.editingSection.access_key])

  // useEffect(() => {
  //   const index = state.editingIndex
  //   console.log(state.employeeProfile.data[sectionKey]);
  //   if (index === null)
  //     _set_Section_Data(state.employeeProfile.data[sectionKey])
  //   else if (index)
  //     _set_Section_Data(state.employeeProfile.data[sectionKey][index])
  // }, [state.editingIndex])

  const onUpdate = (e) => {
    e.preventDefault();
    const section = state.profileTemplate.data.sections[sectionKey]
    let profileSection = state.employeeProfile.data[sectionKey], data = {};
    if (section.entryType === "object") {
      data = {
        [sectionKey]: state.editingData
      }
    }
    else if (section.entryType === "array") {
      if (Array.isArray(profileSection))
        profileSection[state.editingIndex] = state.editingData
      else {
        profileSection = []
        profileSection.push(state.editingData)
      }

      data = {
        [sectionKey]: profileSection
      }
    }
    // return console.log(data);
    _update_profile(data, state.employeeProfile.data.employeeID, data)

  }

  return (
    <div>
      <Presentation
        {...props}
        setEditingData={setEditingData}
        access_modules={access_modules}
        onUpdate={onUpdate}
        componentState={componentState}
        buttonDisability={buttonDisability}
      />
    </div>
  )
}


const mapStateToProps = state => ({
  state: state.employee.dynamicProfileRender,
  // access_modules: state.employee.employeeModules.accessModules,
  names: state.firestore.data.names
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
  // _update_profile: (obj, employeeID, modifiedProfile) => dispatch(updateProfile(obj, employeeID, modifiedProfile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)