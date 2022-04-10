import React from "react";
import Signin from "../services/Authentication/components/Signin";
// import { ThemeModeToggler } from "../Helpers/AutoToggleTheme";
import { VStack } from "@chakra-ui/react";
import AnimatedPage from "../shared/Animator";
const SignInPage = () => {
  return (
    <AnimatedPage>
      <VStack
        marginLeft="auto"
        marginRight="auto"
        justifyContent="center"
        marginTop="50px"
        marginBottom="-90px"
      >
        {/* <ThemeModeToggler /> */}
      </VStack>
      <Signin />
    </AnimatedPage>
  );
};

export default SignInPage;
