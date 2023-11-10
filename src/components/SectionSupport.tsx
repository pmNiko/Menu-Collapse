import { Box, Divider, Typography } from "@mui/material";
import { MunismaCard } from ".";

export const SectionSupport = () => {
  return (
    <MunismaCard
      lg={5}
      title="Sección en mantenimiento"
      showImage
      minHeight="60vh"
      mt={3}
      mb={5}
    >
      <Box mx={3} textAlign="center">
        <Divider sx={{ marginBottom: 2 }} />

        <Typography fontWeight="bold">
          Este servicio se encuentra en mantenimiento, por favor intente acceder
          más tarde o comuniquese con soporte.
        </Typography>
      </Box>
      <Box></Box>
    </MunismaCard>
  );
};
