import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom'; // Update with your custom context file

const EditTodoForm = () => {
    const navigate = useNavigate();
    const { handleUpdateTodo, handleDeleteTodo } = useOutletContext(); // Using custom hook here
    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Fetch the todo using the id from the URL
        // This is left as an exercise for you
    }, [id]);

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        const updatedTodo = {
            content,
            status,
        }

        await handleUpdateTodo(id, updatedTodo);

        navigate('/');
    }

    const handleDelete = async () => {
        await handleDeleteTodo(id);
        navigate('/');
    }
    
    return (
        <div className="todo-form">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="content">Content</label>
                <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                <label htmlFor="status">Status</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default EditTodoForm;