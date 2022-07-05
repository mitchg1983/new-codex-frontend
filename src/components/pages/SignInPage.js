import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../../reduxStore/userState";
import Layout from "../Layout";

function SignInPage() {
  const { user, logIn, logOut } = useUser();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  // const onSignIn = async () => {
  //   console.log(signInForm);
  //   try {
  //     const response = await axios.post("http://localhost:6160/user-login", {
  //       ...signInForm,
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };


  //something is wrong here? line 31 is incorrect
  const onSignIn = async () => {
    try {
      const response = await axios
        .post("http://localhost:6160/user-login", {
          credentials: {
            email: signInForm.email,
            password: signInForm.password,
          },
        })
        .then((response) => {
          console.log(response.data);
          logIn(response.data.user);
        });
    } catch (error) {
      console.log("LOG IN FAILED - Error: ", error);
    }
  };

  const handleSignOut = async () => {
    console.log("Starting handleSignOut");

    try {
      axios.get("http://localhost:6160/user-logout").then((response) => {
        console.log("user log out response: ", response);
        // Remove the user data from the user context when a user logs out
        logOut();
      });
    } catch (error) {
      console.log("Error: ", error);
    }
    // lougout the user
  };

  // console.log("This is your sign in page, current user value is...:,", user);

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
      <Button variant="contained" onClick={handleSignOut}>
        Sign out
      </Button>
    </Layout>
  );
}

export default SignInPage;
