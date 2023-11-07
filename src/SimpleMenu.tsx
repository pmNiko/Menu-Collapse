import { Items } from "./type";

export const SimpleMenu = ({ items }: { items: Items[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          {item.title}
          {item.children && <SimpleMenu items={item.children} />}
        </li>
      ))}
    </ul>
  );
};
