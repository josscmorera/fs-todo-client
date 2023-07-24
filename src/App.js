import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const url = process.env.REACT_APP_URL_ENDPOINT;

  const fetchTodos = async () => {
    const response = await fetch(`${url}/todos/all-todos`);
    const data = await response.json();
    console.log(data);
    setTodos(data.data);
  };

  useEffect(() => {
    fetchTodos();
  }, [url]);

  async function handleNewTodo(todo) {
    const response = await fetch(`${url}/todos/new-todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    console.log(data);

    fetchTodos();
  }

  async function handleUpdateTodo(id, updatedTodo) {
    const response = await fetch(`${url}/todos/status/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });

    const data = await response.json();
    console.log(data);

    fetchTodos();
  }

  async function handleDeleteTodo(id) {
    const response = await fetch(`${url}/todos/delete/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    console.log(data);

    fetchTodos();
  }

  return (
    <div className="App">
      <NavBar />
      <h1>Full Stack Todo App</h1>
      <Outlet context={{todos, handleNewTodo, handleUpdateTodo, handleDeleteTodo }} />
    </div>
  );
}

export default App;

