import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { CustomIcon } from "../CustomIcon";
import { Box, Divider, Typography } from "@mui/material";

export interface Menu {
  id: number;
  ref: number;
  posicion: number;
  titulo: string;
  ruta: string;
  habilitado: boolean;
  protected: boolean;
  isModule: boolean;
  expand?: boolean;
  secciones: Section[];
  iconname?: string;
}

export interface Section {
  id: number;
  posicion: number;
  titulo: string;
  iconname: string;
  ruta: string;
  habilitado: boolean;
  protected: boolean;
  descripcion: string | null;
}

interface LoaderData {
  modulesJSON: Menu[];
  externals: Menu[];
}

export const CustomMenu = () => {
  const { modulesJSON, externals } = useLoaderData() as LoaderData;
  const [modules, setModules] = useState<Menu[]>([]);
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  useEffect(() => {
    setIsAllExpanded(modulesJSON.every((item) => item.expand));
    setModules(modulesJSON);
  }, []);

  const toggleExpandSection = (id: number) => {
    setModules([
      ...modules.map((module) => {
        if (module.id === id) {
          module.expand = !module.expand;
        }
        return module;
      }),
    ]);
  };

  const toggleExpandAllSection = () => {
    setModules([
      ...modules.map((module) => {
        return {
          ...module,
          expand: !isAllExpanded,
        };
      }),
    ]);
    setIsAllExpanded(!isAllExpanded);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink to={"/inicio"} className="custom-nav-link">
          <ListItemButton key="home" style={{ marginLeft: 5 }}>
            <ListItemIcon>
              <CustomIcon iconName="home" iconFontSize={35} />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </NavLink>
        <Box
          p={3}
          mr={-1}
          sx={{ cursor: "pointer" }}
          onClick={toggleExpandAllSection}
        >
          {isAllExpanded ? <ExpandLess /> : <ExpandMore />}
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {modules.map((module, i) => (
        <div key={module.titulo} hidden={module.protected}>
          <ListItemButton
            key={module.titulo + i}
            onClick={() => toggleExpandSection(module.id)}
            disabled={!module.habilitado}
          >
            <ListItemText primary={module.titulo} sx={{ mr: 4 }} />
            {module.expand ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={module.expand} timeout="auto" unmountOnExit>
            <>
              {module.secciones?.map((seccion, i) => (
                <List
                  key={seccion.descripcion! + i}
                  component="div"
                  disablePadding
                  hidden={seccion.protected}
                >
                  <NavLink
                    to={`${module.ruta}${seccion.ruta}`}
                    className="custom-nav-link"
                  >
                    <ListItemButton
                      disabled={!module.habilitado || !seccion.habilitado}
                      sx={{ pl: 5 }}
                    >
                      <ListItemIcon>
                        <CustomIcon
                          iconName={seccion.iconname}
                          iconFontSize={25}
                        />
                      </ListItemIcon>
                      <ListItemText primary={seccion.titulo} />
                    </ListItemButton>
                  </NavLink>
                </List>
              ))}
            </>
          </Collapse>
        </div>
      ))}

      <Divider sx={{ mt: 2.5 }} />
      <Box textAlign="center" mt={1}>
        <Typography variant="caption" color={"#2ea3f2"}>
          Links Externos
        </Typography>
      </Box>
      {externals.map((item) => (
        <ListItemButton
          key={item.titulo}
          onClick={() => window.open(item.ruta)}
          style={{ marginLeft: 5 }}
        >
          <ListItemIcon>
            <CustomIcon iconName={item.iconname} iconFontSize={25} />
          </ListItemIcon>
          <ListItemText primary={item.titulo} />
        </ListItemButton>
      ))}
    </List>
  );
};
