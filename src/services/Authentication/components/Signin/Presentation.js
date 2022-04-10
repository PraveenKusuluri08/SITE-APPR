import React, { useState } from "react";
import { InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import "../styles/styles.css";
import PropTypes from "prop-types";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {useNavigate } from "react-router-dom";
// import ForgotPassword from "../../../Pages/ForgotPassword";
import $ from "jquery";

const Presentation = (props) => {

  const { signIn, handleSubmit, handleChange, handleCheckBox } = props;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user/signup");
  };
  {
    $("body").on("contextmenu", (e) => {
      console.log("jquery", e);
      return false;
    });
  }
  return (
    <div className="login" style={{ overflow: "-moz-hidden-unscrollable" }}>
      <form onSubmit={handleSubmit}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.170", "gray.1800")}
          marginBottom={"70px"}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}></Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"dark-lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    id="email"
                    value={signIn.email}
                    onChange={handleChange}
                    type="email"
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="password"
                      onChange={handleChange}
                      value={signIn.password}
                      type={showPassword ? "text" : "password"}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox
                      id="isRemembered"
                      value={signIn.isRemembered}
                      onChange={handleCheckBox}
                    >
                      Remember me
                    </Checkbox>
                    <div id="forgot_password">
                      {/* <ForgotPassword /> */}
                    </div>
                  </Stack>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handleSubmit}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
              <Stack pt={6}>
                <Text
                  cursor={"pointer"}
                  color={"blue.400"}
                  align={"center"}
                  onClick={handleClick}
                >
                  New user? SignUp
                </Text>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </div>
  );
};

export default Presentation;

Presentation.prototypes = {
  signIn: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCheckBox: PropTypes.func,
};
