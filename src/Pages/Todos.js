import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TodoCard from '../Components/TodoCard';

function Todos() {
    const { todos } = useOutletContext();
    return (
        <div>
            <h1>Todos</h1>
            {todos && Array.isArray(todos) && todos.map((todo) => {
                return <TodoCard key={todo._id} todo={todo} />
            })} 
        </div>
    )
}

export default Todos;