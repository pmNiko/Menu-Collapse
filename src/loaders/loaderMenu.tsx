import { Menu } from "../components/Menu/CustomMenu";

export const loaderMenu = async () => {
  const data = await fetch(
    "http://10.1.0.51:8080/WSSysGetDataREST/sysgetdata",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ funcion: "fnappgetmenu2" }),
    }
  ).then((res) => res.json());

  const json = data.datos as Menu[];

  return {
    modulesJSON: json.filter((item) => item.isModule),
    externals: json.filter((item) => !item.isModule),
  };
};
