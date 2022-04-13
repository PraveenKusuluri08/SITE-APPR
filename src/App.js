import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignInPage from "./pages/Signin";
import "./App.css";
import Navbar from "./services/Dashboard/NavBar/";
import EmployeeRegisterPage from "./pages/EmployeeRegisterPage";
function App(props) {
  
  const { auth } = props;
  console.log("first", auth.uid);
 

  return auth.uid && auth.uid!==undefined? (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AnimatePresence>
  ) : (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="invitations/:newToken" element={<EmployeeRegisterPage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/lognin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(App);
