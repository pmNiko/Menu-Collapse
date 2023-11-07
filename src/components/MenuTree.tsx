import { Menu } from "../interfaces";

export const MenuTree = ({ items }: { items: Menu[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.titulo} style={{ marginBottom: 10 }}>
          {item.isModule ? (
            <div style={{ marginLeft: -100 }}>{item.titulo}</div>
          ) : (
            <button
              style={{
                boxShadow: "0px 3px 16px rgb(0,0,0, .5 )",
                marginBottom: 15,
                marginTop: 20,
                marginLeft: -80,
              }}
              onClick={() => window.open(item.ruta)}
            >
              {item.titulo}
            </button>
          )}

          <ul style={{ display: "flex", flexDirection: "column" }}>
            {item.secciones?.map((section) => (
              <button
                key={section.descripcion}
                style={{
                  boxShadow: "0px 3px 16px rgb(0,0,0, .5 )",
                  marginBottom: 15,
                  marginLeft: 50,
                }}
                onClick={() => console.log(`Ruta: ${item.ruta}${section.ruta}`)}
              >
                {section.titulo}
              </button>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
