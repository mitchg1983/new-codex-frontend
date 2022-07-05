import axios from "axios";
import { useState } from "react";

//THIS IS A TODO
//import CharacterCard from "../CharacterCard"

import Layout from "../Layout";
// import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

function MyCharactersPage() {
  const [characterList, setCharacterList] = useState([]);

  const onGetChars = async () => {
    console.log("onGetChars running...");
    try {
      const response = await axios.get("http://localhost:6160/get-all-chars");
      let tempCharList = await response.data;
      setCharacterList(tempCharList);
      console.log("Your new chracter list, ", characterList);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Layout>
      MY CHARACTERS
      <Box>
        <Typography variant="body1" component="div">
          Charcter Box
        </Typography>
      </Box>
      <Button variant="contained" onClick={onGetChars}>
        Get All Characters
      </Button>
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        {characterList.map((character) => (
          <Box m={2} key={character.charName} width="225px" maxWidth="100%">
            {/* <UserCard user={user} /> */}
            {character.charName}
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default MyCharactersPage;
