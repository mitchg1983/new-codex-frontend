import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Typography variant="h5" component="div">
              Ultra CODEX
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link to="/all-users-page">
            <Typography variant="body1" component="div">
              All Users Page
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link to="/user-login-page">
            <Typography variant="body1" component="div">
              Log In Page
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link to="/register-page">
            <Typography variant="body1" component="div">
              Registration Page
            </Typography>
          </Link>
        </Box>

        <Box>
          <Link to="/my-characters-page">
            <Typography variant="body1" component="div">
              My Characters
            </Typography>
          </Link>
        </Box>


        <Box>
          <Link to="/create-new-character-page">
            <Typography variant="body1" component="div">
              Create New Character
            </Typography>
          </Link>
        </Box>


        <Box>
          <Link to="/word-cloud-page">
            <Typography variant="body1" component="div">
              ACTION Word Cloud
            </Typography>
          </Link>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
