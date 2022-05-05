import React, { useState, useEffect } from 'react'
import Presentation from "./Presentation"
import { _set_state } from "../../../middleware/FormABuilder"
import { connect } from "react-redux"
import initialState from "../../../state/FormABuilder"

function Container(props) {
  const { setState, state, section, sectionKey, isEdit, field } = props
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open === true && isEdit === true) {
      setState({
        newField: {
          ...state.newField,
          ...field
        }
      })
    }
    if (open === false) {
      setState({
        newField: initialState.newField
      })
    }
  }, [open])


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const name = state.newField.label.replace(/ /g, '').toLowerCase()
    setState({
      newField: {
        ...state.newField,
        name
      }
    })
  }, [state.newField.label])

  const setNewFieldState = (obj) => {
    setState({
      newField: {
        ...state.newField,
        ...obj
      }
    })
  }

  const addNewField = (e) => {
    e.preventDefault();
    const fields = state.formATemplate.data.sections[sectionKey].fields
    const newField = JSON.parse(JSON.stringify(state.newField))
    if (isEdit && fields.filter(f => f.name === newField.label.replace(/ /g, '').toLowerCase()).length > 1)
      return alert("A field already exists");

    if (!isEdit && fields.some(f => f.name === newField.label.replace(/ /g, '').toLowerCase()))
      return alert("A field already exists");
    handleClose();
    const existingFields = state.formATemplate.data.sections[sectionKey].fields
    // below stringify and parse operations are done because,
    // if we delete the any key or manipulated directly, the key will be modified in 
    // state also, so in order to overcome, the below method is being used
    if (newField.type !== "select") {
      delete newField.values
    }

    if (newField.type !== "todate") {
      delete newField.minDate
    }

    if (newField.type !== "state") {
      delete newField.country
    }

    newField.fieldPriority = isEdit ? newField.fieldPriority : existingFields.length + 1
    let index;
    if (isEdit) {
      for (let i = 0; i < existingFields.length; i++) {
        if (existingFields[i].name === newField.label.replace(/ /g, '').toLowerCase())
          existingFields[i] = newField
      }

    }
    setState({
      formATemplate: {
        ...state.formATemplate,
        data: {
          ...state.formATemplate.data,
          sections: {
            ...state.formATemplate.data.sections,
            [sectionKey]: {
              ...state.formATemplate.data.sections[sectionKey],
              fields: isEdit ? existingFields : [...existingFields, newField]
            }
          }
        }
      }
    })

  }


  return (
    <div>
      <Presentation
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
        section={section}
        setNewFieldState={setNewFieldState}
        addNewField={addNewField}
        state={state}
        sectionKey={sectionKey}
        isEdit={isEdit}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.formA.formABuilder
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)