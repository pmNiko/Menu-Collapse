import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { MunismaCard } from "../../components";
import { useTodos } from "../../hooks";

const PagoOnline = () => {
  const { getTodos, isLoading, todos } = useTodos();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <MunismaCard title="Pago de tributos online" showImage>
      <Box mx="auto">
        <Typography>Buscador de tributos.</Typography>
      </Box>

      {isLoading ? <p>Cargando...</p> : <p>{JSON.stringify(todos)}</p>}

      <Box></Box>
      <Box></Box>
    </MunismaCard>
  );
};

export default PagoOnline;
