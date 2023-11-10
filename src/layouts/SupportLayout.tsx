import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Footer } from "../components";
import { MunismaCard } from "../components/MunismaCard";

export const SupportLayout = () => {
  return (
    <div>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" style={{ backgroundColor: "#2ea3f2" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 1 }}
              >
                <img
                  src="https://app.sma.gob.ar/inicio/static/media/sma.a0813f434e165adba2c0.png"
                  alt="logo"
                  width={"130px"}
                />
              </IconButton>

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
      </nav>

      <main>
        <MunismaCard
          lg={5}
          title="Sitio en mantenimiento"
          showImage
          minHeight="60vh"
          mt={3}
          mb={5}
        >
          <Box mx={3} textAlign="center">
            <Divider sx={{ marginBottom: 2 }} />
            <Typography fontWeight="bold">
              Gracias por utilizar nuestros servicios en línea, estamos
              trabajando para mejorar nuestra plataforma. El servicio se
              encuentra temporalmente en mantenimiento, por favor intente
              acceder más tarde.
            </Typography>
          </Box>
          <Box></Box>
          <Box></Box>
        </MunismaCard>
      </main>
      <Footer />
    </div>
  );
};
