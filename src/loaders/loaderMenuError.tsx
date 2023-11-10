export const loaderMenuError = async () => {
  const data = await fetch(
    "http://10.1.0.51:8080/WSSysGetDataREST/sysgetdatas",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ funcion: "fnappgetmenu2" }),
    }
  ).then((res) => res.json());

  return data.datos;
};
