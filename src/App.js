import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignInPage from "./pages/Signin";
import "./App.css";
import Navbar from "./services/Dashboard/Navbar";
import EmployeeRegisterPage from "./pages/EmployeeRegisterPage";
function App(props) {
  const { auth } = props;
  console.log("first", auth);

  return auth.uid? (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  ) : (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="invitations/:newToken" element={<EmployeeRegisterPage/>} />
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
