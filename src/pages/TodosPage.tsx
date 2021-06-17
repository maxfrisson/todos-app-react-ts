import React, { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { TodoInterface } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as TodoInterface[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: TodoInterface = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Are you sure you want to delete this todo?");
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </>
  );
};