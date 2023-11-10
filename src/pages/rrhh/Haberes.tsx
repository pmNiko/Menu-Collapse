import { Box, Typography } from "@mui/material";
import { MunismaCard } from "../../components";

export default () => {
  return (
    <MunismaCard title="Recibo de haberes" showImage>
      <Box mx="auto">
        <Typography>
          Haga la solicitud para recibir el recibo de haberes a su email
          oficial.
        </Typography>
      </Box>

      <Box></Box>
      <Box></Box>
    </MunismaCard>
  );
};
