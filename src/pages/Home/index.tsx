import { Box, Card, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MunismaCard } from "../../components";
import { CustomIcon } from "../../components/CustomIcon";
import { useEffect, useState } from "react";
import "./home.css";
import { LoaderData, Section } from "../../interfaces/MenuItems";

export const HomePage = () => {
  const navigate = useNavigate();
  const { modulesJSON, externals } = useLoaderData() as LoaderData;
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const modulesWithSections = modulesJSON.map((module) => {
      const secciones = module.secciones.map((seccion) => {
        return {
          ...seccion,
          ruta: module.ruta + seccion.ruta,
        };
      });

      return {
        ...module,
        secciones,
      };
    });

    setSections(modulesWithSections.flatMap((item) => item.secciones));
  }, []);

  return (
    <MunismaCard xs={11} sm={8} md={7} lg={5} minHeight="50vh" mt={2} mb={5}>
      <div className="container">
        {sections.map((item) => (
          <Card
            key={item.titulo}
            sx={{
              boxShadow: 3,
              textAlign: "center",
              borderRadius: "5%",
              cursor: "pointer",
              webkitTouchCallout: "none",
              webkitUserSelect: "none",
              mozUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
            }}
            onClick={() => navigate(item.ruta)}
          >
            <Box py={2} px={1}>
              <CustomIcon iconName={item.iconname} />

              <Typography fontWeight="bold" variant="subtitle1">
                {item.titulo}
              </Typography>

              <Typography
                sx={{ fontSize: 14, my: 2 }}
                color="text.secondary"
                gutterBottom
              >
                {item.titulo}
              </Typography>
            </Box>
          </Card>
        ))}

        {externals.map((item) => (
          <Card
            key={item.titulo}
            sx={{
              boxShadow: 3,
              textAlign: "center",
              borderRadius: "5%",
              cursor: "pointer",
              webkitTouchCallout: "none",
              webkitUserSelect: "none",
              mozUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
            }}
          >
            <Box py={2} px={1}>
              <CustomIcon iconName={item.iconname} />

              <Typography fontWeight="bold" variant="subtitle1">
                {item.titulo}
              </Typography>

              <Typography
                sx={{ fontSize: 14, my: 2 }}
                color="text.secondary"
                gutterBottom
              >
                {item.titulo}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>
    </MunismaCard>
  );
};
