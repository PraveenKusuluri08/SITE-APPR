import React, { useState } from "react";
import Presentation from "./Presentation";
import { useDispatch } from "react-redux";
import { onLogin } from "../../middleware";

const Container = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const handleChange = ({ target }) => {
    setSignIn({
      ...signIn,
      [target.id]: target.value,
    });
  };

  const handleCheckBox = (e) => {
    setSignIn((prevState) => ({
      ...prevState,
      isRemembered: !prevState.isRemembered,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first")
    if (signIn.email !== "" && signIn.password !== "")
      dispatch(onLogin(signIn))
  };
  return (
    <div>
      <Presentation
        signIn={signIn}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCheckBox={handleCheckBox}
      />
    </div>
  );
};

export default Container;
