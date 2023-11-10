import { Box, Typography } from "@mui/material";
import { MunismaCard } from "../../components";

export default () => {
  return (
    <MunismaCard title="Sueldos Municipales" showImage>
      <Box mx="auto">
        <Typography>Tabla de sueldos municipales.</Typography>
      </Box>

      <Box></Box>
      <Box></Box>
    </MunismaCard>
  );
};
