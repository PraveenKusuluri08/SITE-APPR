import React, { useEffect } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import {
  _set_state,
  // loadFormATemplate,
  // updateFormATemplate,
  // onFormBuilderUpdated,
  createForm
} from "../../../middleware/FormABuilder";
import { isEmpty, isLoaded } from "react-redux-firebase";

function Container(props) {
  const {
    employeeID,
    setState,
    state,
    _load_profile_template,
    _update_profile_template,
    createFromATemplate
  } = props;

//  useEffect(()=>{

//   const payload={
//     collectionName :"From-A-Employee-Template",
//     documentName:"FORM-A",
//    ...state
//   }
//   props.createFromATemplate(payload)
//  },[])
  // useEffect(() => {
  //   _load_profile_template();
  // }, []);

  // const onSave = () => {
  //   // const data = state.formATemplate.data.section;
  //   // _update_profile_template({ sections: data });
  //   const data={
  //     collectionName :"From-A-Employee-Template",
  //     documentName:"FORM-A",
  //    ...state
  //   }
  //   createFromATemplate({sections:data})
  // };
  console.log("STATE-SUMANTH-STATE", state)
  if (isLoaded(state) && !isEmpty(state))
    return (
      <div>
        <Presentation state={state}  />
      </div>
    )
  else 
  return(
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p>Loading ....</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state: state.formA.formABuilder,
});


const mapDispatchToProps = (dispatch) => ({
  setState: (obj) => dispatch(_set_state(obj)),
  createFromATemplate:(payload)=>dispatch(createForm(payload))
});

export default connect(mapStateToProps,mapDispatchToProps)(Container);
