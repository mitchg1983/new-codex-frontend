import Layout from "../Layout";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function MyCharactersPage() {
  return (
    <Layout>
      MY CHARACTERS
      <Box>
        <Typography variant="body1" component="div">
          Charcter Box
        </Typography>
      </Box>
    </Layout>
  );
}

export default MyCharactersPage;
