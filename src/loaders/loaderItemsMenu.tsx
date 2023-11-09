import data from "../menu.json";

export const loaderItemsMenu = async () => {
  return await new Promise((resolve, __) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
