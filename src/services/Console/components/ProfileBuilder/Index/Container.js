import React, { useEffect } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import {
  _set_state,
  loadProfileTemplate,
  updateProfileTemplate,
  onFormBuilderUpdated,
} from "../../../middleware/profileBuilder";

function Container(props) {
  const {
    employeeID,
    setState,
    state,
    _load_profile_template,
    _update_profile_template,
  } = props;

  useEffect(() => {
    _load_profile_template();
  }, []);

  const onSave = () => {
    const data = state.profileTemplate.data.sections;
    _update_profile_template({ sections: data });
  };

  return (
    <div>
      <Presentation state={state} onSave={onSave} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.console.profileBuilder,
});

const mapDispatchToProps = (dispatch) => ({
  setState: (obj) => dispatch(_set_state(obj)),
  _load_profile_template: () => dispatch(loadProfileTemplate()),
  _update_profile_template: (data) => dispatch(updateProfileTemplate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
