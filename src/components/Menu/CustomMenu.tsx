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

  useEffect(() => {
    setModules(modulesJSON);
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
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NavLink to={"/inicio"} className="custom-nav-link">
        <ListItemButton key="home">
          <ListItemIcon>
            <CustomIcon iconName="home" />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItemButton>
      </NavLink>
      {modules.map((module, i) => (
        <div key={module.titulo} hidden={module.protected}>
          <ListItemButton
            key={module.titulo + i}
            onClick={() => handleClick(module.id)}
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
                      // onClick={() => navigate(`${module.ruta}${seccion.ruta}`)}
                    >
                      <ListItemIcon>
                        <CustomIcon iconName={seccion.iconname} />
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
