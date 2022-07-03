import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useUser } from "../../reduxStore/userState";
import Layout from "../Layout";
import UserCard from "../UserCard"

function AllUsersPage() {
  const [userList, setUserList] = useState([]);

  const onGetUsers = async () => {
    console.log("onGetUsers starting!");

    try {
      const response = await axios.get("http://localhost:6160/get-users");
      console.log("get all users...", response.data);
      let tempList = await response.data;
      console.log(tempList);
      setUserList(tempList);
      console.log("Your userList", userList);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Layout>
      <Box p={2}>
        <h4>This is your ALL USERS page</h4>
        <Button variant="contained" onClick={onGetUsers}>
          Get All Users
        </Button>
      </Box>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {userList.map((user) => (
          <Box m={2} key={user.firstName} width="225px" maxWidth="100%">
            <UserCard user={user} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default AllUsersPage;
