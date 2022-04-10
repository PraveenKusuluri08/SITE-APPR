import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { firestoreConnect, isLoaded } from "react-redux-firebase"
import { compose } from "redux"
import Presentation from "./Presentation"

function Container(props) {
  const defaultProps = {
   empName:"",
   department:"",
  }
  const { formData, registeringEmail, empInfo = defaultProps } = props
  const [state, setState] = useState({})

  useEffect(() => {
    if (isLoaded(formData)) {
      let tempState = {}
      formData.forEach((item) => {
        tempState = {
          ...tempState,
          [item.section]: {},
        }
      })

      console.log(empInfo)

      formData.forEach((item) => {
        let portion = { ...tempState[item.section] }
        item.fields.forEach((field) => {

          if (field.isExist) {
            if (
              item.section === "personalinformation" &&
              field.name === "emailid"
            ) {
              portion[field.name] = registeringEmail
            } else if (
              item.section === "personalinformation" &&
              Object.keys(empInfo).includes(field.name)
            ) {
              portion[field.name] = empInfo[field.name]
            } else {
              portion[field.name] = ""
            }
          }
        })

        tempState = {
          ...tempState,
          [item.section]: portion,
        }
      })
      tempState = {
        ...tempState,
        formData,
      }

      setState((prevState) => ({
        ...prevState,
        ...tempState,
      }))
    }
  }, [formData, registeringEmail])

  const handleChange = (key, value, sectionName) => {
    // const key = event.target.name
    // const value = event.target.value
    let change = {
      ...state[sectionName],
      [key]: value,
    }
    setState({
      ...state,
      [sectionName]: change,
    })
    props.handleStateSet(sectionName, change)
  }

  const handleDateChange = (key, value, sectionName) => {
    let change = {}
    console.log(key, value, sectionName)
    if (!isNaN(Date.parse(value))) {
      change = {
        ...state[sectionName],
        [key]: value,
      }
      setState({
        ...state,
        [sectionName]: {
          ...state[sectionName],
          [key]: value,
        },
      })
    }
    props.handleStateSet(sectionName, change)
  }
  if (
    state.hasOwnProperty("formData") &&
    Object.keys(state).length &&
    state.formData.length
  ) {
    return (
      <div>
        <Presentation
          {...state}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
        />
      </div>
    )
  }
  console.log("formData🎢", formData)
  return (
    <div className="spinner">
      <div className="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    formData: state.firestore.ordered.formData,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "INVITATION_FORM_BUILDER",
        orderBy: ["index", "asc"],
        storeAs: "formData",
      },
    ]
  })
)(Container)
