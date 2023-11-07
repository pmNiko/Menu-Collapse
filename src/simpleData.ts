import { Items } from "./type";

export const items: Items[] = [
  {
    title: "Item 1",
    children: [
      {
        title: "Item 1.1",
        children: [
          {
            title: "Item 1.1.1",
          },
        ],
      },
      {
        title: "Item 1.2",
      },
    ],
  },
  {
    title: "Item 2",
    children: [
      {
        title: "Item 2.1",
      },
    ],
  },
];
