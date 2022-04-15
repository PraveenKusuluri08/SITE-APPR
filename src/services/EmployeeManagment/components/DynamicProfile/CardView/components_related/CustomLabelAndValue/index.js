import React from 'react'
import CustomRender from "../../../../../../../shared/components/valueRender"

function CustomLabelAndValue({ type, label, value }) {
  return (
    <div className="text-dark" >
      <h5>{label}</h5>:
      <CustomRender
        type={type}
        value={value}
      />
    </div>
  )
}

export default CustomLabelAndValue
