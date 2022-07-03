import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../reduxStore/userState";
import Layout from "../Layout";
import axios from "axios";

function SignInPage() {
  const { user, logIn, logOut } = useUser();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const onSignIn = async () => {
    console.log(signInForm);
    try {
      const response = await axios.post("http://localhost:6160/user-login", {
        ...signInForm,
      });
      console.log(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Layout>
      <Box mb={2}>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          value={signInForm.email}
          onChange={(event) => {
            setSignInForm({
              ...signInForm,
              email: event.target.value,
            });
          }}
        />
      </Box>
      <Box mb={2}>
        <TextField
          id="password"
          label="Password"
          variant="standard"
          value={signInForm.lastName}
          onChange={(event) => {
            setSignInForm({
              ...signInForm,
              password: event.target.value,
            });
          }}
        />
      </Box>
      <Button variant="contained" onClick={onSignIn}>
        SignIn!
      </Button>
    </Layout>
  );
}

export default SignInPage;
