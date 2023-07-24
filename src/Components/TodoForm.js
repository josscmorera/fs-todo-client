import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const TodoForm = () => {
    const navigate = useNavigate();
    const { handleNewTodo } = useOutletContext();
    const [content, setContent] = useState('');
    const status = 'not started';

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const newTodo = {
            content,
            status,
        }

        await handleNewTodo(newTodo);

        navigate('/');
    }

    return (
        <div className="todo-form">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="content">Content</label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;