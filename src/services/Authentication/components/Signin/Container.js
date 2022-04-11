import React, { useEffect, useState } from "react";
import Presentation from "./Presentation";
import { useToast } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogin } from "../../middleware";

const Container = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()

  // useEffect(()=>{
    
  // },[])
  const [loading, setLoading] = useState(false);
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
   if(signIn.email!==""&&signIn.password!=="")
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
