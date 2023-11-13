import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    setIsLoading(true);
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((response) => response.json());

    setTodos(data);
    setIsLoading(false);
  };

  return {
    isLoading,
    todos,
    getTodos,
  };
};
