import React from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state } from "../../../../middleware/profileBuilder"

function Container(props) {
  const { sectionKey, fieldName, setState, state, section, field } = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = () => {
    const existingFields = state.profileTemplate.data.sections[sectionKey].fields

    setState({
      profileTemplate: {
        ...state.profileTemplate,
        data: {
          ...state.profileTemplate.data,
          sections: {
            ...state.profileTemplate.data.sections,
            [sectionKey]: {
              ...state.profileTemplate.data.sections[sectionKey],
              fields: existingFields.filter(field => field.name !== fieldName)
            }
          }
        }
      }
    })
    handleClose()
  }

  return (
    <div>
      <Presentation
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        onDelete={onDelete}
        sectionKey={sectionKey}
        section={section}
        field={field}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.console.profileBuilder
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
