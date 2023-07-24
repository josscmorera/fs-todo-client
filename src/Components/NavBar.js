import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <br />
            <Link to="/">Todos</Link>
            <br />
            <Link to="/new-todo">New Todo</Link>
        </nav>
    );
};

export default NavBar;