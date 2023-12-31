import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { CustomIcon } from "./CustomIcon";
import { Menu } from "../interfaces";

export const CustomMenu = ({ data }: { data: Menu[] }) => {
  const [modules, setModules] = useState<Menu[]>([]);
  const [externals, setExternals] = useState<Menu[]>([]);

  useEffect(() => {
    const sortedData = data
      .sort((a, b) => a.posicion - b.posicion)
      .map((item) => {
        return {
          ...item,
          secciones: item.secciones?.sort((a, b) => a.posicion - b.posicion),
        };
      });

    setModules(sortedData.filter((item) => item.isModule));
    setExternals(sortedData.filter((item) => !item.isModule));
  }, []);

  const handleClick = (id: number) => {
    setModules([
      ...modules.map((module) => {
        if (module.id === id) {
          module.expand = !module.expand;
        }
        return module;
      }),
    ]);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        px: 2,
        mt: -1,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {modules.map((module) => (
        <div key={module.titulo} hidden={module.protected}>
          <ListItemButton
            key={module.titulo}
            onClick={() => handleClick(module.id)}
            disabled={!module.habilitado}
          >
            <ListItemText primary={module.titulo} sx={{ mr: 4 }} />
            {module.expand ? <ExpandMore /> : <ExpandLess />}
          </ListItemButton>
          <Collapse in={module.expand} timeout="auto" unmountOnExit>
            <>
              {module.secciones?.map((seccion) => (
                <List
                  key={seccion.descripcion}
                  component="div"
                  disablePadding
                  hidden={seccion.protected}
                >
                  <ListItemButton
                    disabled={!module.habilitado || !seccion.habilitado}
                    sx={{ pl: 5 }}
                    onClick={() =>
                      console.log(`Ruta: ${module.ruta}${seccion.ruta}`)
                    }
                  >
                    <ListItemIcon>
                      <CustomIcon iconName={seccion.iconname} />
                    </ListItemIcon>
                    <ListItemText primary={seccion.titulo} />
                  </ListItemButton>
                </List>
              ))}
            </>
          </Collapse>
        </div>
      ))}

      {externals.map((item) => (
        <ListItemButton
          key={item.titulo}
          onClick={() => window.open(item.ruta)}
        >
          <ListItemIcon>
            <CustomIcon iconName={item.iconname} />
          </ListItemIcon>
          <ListItemText primary={item.titulo} />
        </ListItemButton>
      ))}
    </List>
  );
};
