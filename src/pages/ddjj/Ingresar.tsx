import { Box, Typography } from "@mui/material";
import { MunismaCard } from "../../components";

export default () => {
  return (
    <MunismaCard title="Declaraciones Juradas de comercio" showImage>
      <Box mx="auto">
        <Typography>
          Ingrese sus credenciales para acceder al de declaraciones.
        </Typography>
      </Box>

      <Box></Box>
      <Box></Box>
    </MunismaCard>
  );
};
