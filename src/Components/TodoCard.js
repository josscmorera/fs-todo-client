import React from 'react';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const TodoCard = ({ todo }) => {
    const { handleUpdateTodo } = useOutletContext();
    const changeStatus = async (event) => {
        const newStatus = event.target.value;
        await handleUpdateTodo(todo._id, { ...todo, status: newStatus });
    }

    const date = new Date(todo.createAt);
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;

    return (
        <div className="todo-card">
            <h2>{todo.content}</h2>
            <p>Status: {todo.status}</p>
            <p>Date: {formattedDate}</p>
            <select onChange={changeStatus} value={todo.status}>
                <option value="not started">Not Started</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <Link to={`/todo-edit/${todo._id}`}>Edit</Link>
        </div>
    );
};

export default TodoCard;
