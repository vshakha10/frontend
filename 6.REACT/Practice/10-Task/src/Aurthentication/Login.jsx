import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
    const { user, login, logout } = useAuth();
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        login(username);
        setUsername('');
    };

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user}!</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;