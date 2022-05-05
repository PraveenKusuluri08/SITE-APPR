import React, { useEffect } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import {
  _set_state,
  loadFormBTemplate,
  updateFormBTemplate,
  // onFormBuilderUpdated,
} from "../../../middleware/FormBBuilder";

function Container(props) {
  const {
    employeeID,
    setState,
    state,
    // _load_profile_template,
    // _update_profile_template,
  } = props;

  // useEffect(() => {
  //   _load_profile_template();
  // }, []);

  // const onSave = () => {
  //   const data = state.formATemplate.data.section;
  //   _update_profile_template({ sections: data });
  // };
  console.log("STATE--->-->",state)

  return (
    <div>
      <Presentation state={state}  />
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.formB.formBBuilder,
});

const mapDispatchToProps = (dispatch) => ({
  setState: (obj) => dispatch(_set_state(obj)),
  // _load_profile_template: () => dispatch(loadFormBTemplate()),
  // _update_profile_template: (data) => dispatch(updateFormBTemplate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
