import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './Pages/Todos';
import TodoForm from './Components/TodoForm';
import EditTodoForm from './Components/EditTodoForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Todo />
      },
      {
        path: 'new-todo',
        element: <TodoForm />
      },
      {
        path: 'todo-edit/:id',
        element: <EditTodoForm />
      },      
    
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();