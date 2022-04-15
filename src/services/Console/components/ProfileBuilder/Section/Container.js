import React, { useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import {
  _set_state,
  loadProfileTemplate,
  onFormBuilderUpdated,
} from "../../../middleware/profileBuilder";

function Container(props) {
  const {
    section,
    sectionKey,
    setState,
    state,
    _update_template,
    onInvitation,
  } = props;
  const obj = state.profileTemplate?.data?.sections[sectionKey]?.fields.reduce(
    (init, item) => ({ ...init, [item.name]: "" }),
    {}
  );
  console.log("OBJECT", obj);
  const [dummyData, setDummyData] = useState(obj);

  const setData = (data) => {
    return setDummyData((prevState) => ({
      ...prevState,
      ...data
  
    }))
  }
  console.log("state->ProfileBuilder",state.profileTemplate,sectionKey)
 
  return (
    <Presentation
      fields={state.profileTemplate?.data?.sections[sectionKey]?.fields || []}
      section={state.profileTemplate?.data?.sections[sectionKey]}
      sectionKey={sectionKey}
      dummyData={dummyData}
      handleAddToInvitationTemplate={handleAddToInvitationTemplate}
      setData={setData}
    />
  );
}

const mapStateToProps = (state) => ({
  state: state.console.profileBuilder,
  onInvitation: state.console.invitationTemplateReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setState: (obj) => dispatch(_set_state(obj)),
  _load_profile_template: () => dispatch(loadProfileTemplate()),
  _update_template: (data) => dispatch(onFormBuilderUpdated(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
