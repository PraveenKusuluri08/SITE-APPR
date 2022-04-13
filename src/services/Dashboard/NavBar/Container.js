import React, { useEffect } from "react";
import { connect } from "react-redux";
import { onSignout } from "../../Authentication/middleware";
import { getModules } from "../../EmployeeManagment/middleware";
import Presentation from "./Presentation";
import { useNavigate } from "react-router-dom";
import { isLoaded,isEmpty} from "react-redux-firebase";
function Container(props) {
  const navigate = useNavigate();
  useEffect(() => {
    props._getModules();
  }, [props._getModules]);
  console.log("props.modules", isLoaded(props.accessModules),isEmpty(props.accessModules));
  console.log("firstAUTH",props.auth)

  const handleSignout=()=>{
    props._onSignout()
    navigate("/lognin")
  }

  if(isLoaded(props.accessModules)&& !isEmpty(props.accessModules)){
    return (
      <div>
      <Presentation onSignout={handleSignout} accessModules={props.accessModules} auth={props.auth}/>
    </div>
  );
}else{
  return "Loading"
}
}
const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth,
    accessModules: state.employee.modules.accessModules,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _getModules: () => dispatch(getModules()),
    _onSignout: () => dispatch(onSignout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
