import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            if (password.length < 6) {
                setError('Password must be at least 6 characters long');
                return;
            }

            // Simulate registration success
            const userInfo = {
                name: name,
                email: email
            };
            
            localStorage.setItem('token', 'dummy-token');
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            
            navigate('/');
        } catch (err) {
            setError('Could not create account. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-96">
                {error && (
                    <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="px-4 py-3 flex items-center space-x-3 border-l-4 border-red-500">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm text-gray-700">{error}</p>
                        </div>
                    </div>
                )}

                <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>
                    <p className="text-center text-gray-600 mb-6">to continue to App</p>
                    
                    <div className="mb-4">
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Username"
                            required 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email"
                            required 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password"
                            required 
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <button 
                            type="button" 
                            className="text-blue-600 text-sm font-medium hover:text-blue-800"
                            onClick={() => navigate('/login')}
                        >
                            Sign in instead
                        </button>
                    </div>

                    <div className="flex items-center justify-end">
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200 font-medium"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
