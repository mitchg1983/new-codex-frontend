import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
// import { useUser } from "../../reduxStore/userState";
import Layout from "../Layout";

function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordMatch: "",
  });

  const onRegister = async () => {
    console.log("onRegister starting!");
    console.log(registerForm);

    try {
      const response = await axios.post("http://localhost:6160/add-new-user", {
        ...registerForm,
      });
      console.log(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Layout>
      <Box p={2}>
        <h4>This is your registration page</h4>
        <Box mb={2}>
          <TextField
            id="firstName"
            label="First Name"
            variant="standard"
            value={registerForm.firstName}
            onChange={(event) => {
              setRegisterForm({
                ...registerForm,
                firstName: event.target.value,
              });
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="lastName"
            label="Last Name"
            variant="standard"
            value={registerForm.lastName}
            onChange={(event) => {
              setRegisterForm({
                ...registerForm,
                lastName: event.target.value,
              });
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            value={registerForm.username}
            onChange={(event) => {
              setRegisterForm({
                ...registerForm,
                username: event.target.value,
              });
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={registerForm.email}
            onChange={(event) => {
              setRegisterForm({ ...registerForm, email: event.target.value });
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="password"
            label="Password"
            variant="standard"
            value={registerForm.password}
            onChange={(event) => {
              setRegisterForm({
                ...registerForm,
                password: event.target.value,
              });
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="passwordMatch"
            label="Re-enter Password"
            variant="standard"
            value={registerForm.passwordMatch}
            onChange={(event) => {
              setRegisterForm({
                ...registerForm,
                passwordMatch: event.target.value,
              });
            }}
          />
        </Box>
        <Button variant="contained" onClick={onRegister}>
          Register!
        </Button>
      </Box>
    </Layout>
  );
}

export default RegisterPage;
