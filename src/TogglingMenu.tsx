import { useState } from "react";
import { Items } from "./type";

export const TogglingMenu = ({ items }: { items: Items[] }) => {
  const [displayChildren, setDisplayChildren] = useState({} as any);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.title}>
            {item.title}{" "}
            {item.children && (
              <button
                onClick={() => {
                  setDisplayChildren({
                    ...displayChildren,
                    [item.title]: !displayChildren[item.title],
                  });
                }}
              >
                {displayChildren[item.title] ? "-" : "+"}
              </button>
            )}
            {displayChildren[item.title] && item.children && (
              <TogglingMenu items={item.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
};
