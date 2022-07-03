import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";

function HomePage() {
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {}, []);

  return (
    <Layout>
      <Box
        component="img"
        alt="Old Book"
        src="https://i.pinimg.com/736x/72/50/35/7250350b98592e28ff1193b2e8c1878b.jpg"
      />
    </Layout>
  );
}

export default HomePage;
