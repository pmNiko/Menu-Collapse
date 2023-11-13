import { Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Menu } from "./Menu";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#2ea3f2" }}>
        <Toolbar>
          <Menu />
          <NavLink to={"/"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 1 }}
              // onClick={() =>
              //   (window.location.href = "http://localhost:5173/inicio")
              // }
            >
              <img
                src="https://app.sma.gob.ar/inicio/static/media/sma.a0813f434e165adba2c0.png"
                alt="logo"
                width={"130px"}
              />
            </IconButton>
          </NavLink>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="right"
            padding={1}
            marginRight={3}
          >
            <Typography fontSize={16}>
              Municipalidad de San Martín de los Andes
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
