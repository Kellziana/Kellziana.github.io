'use client';

import { useState } from 'react';

function QuizPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-dark to-lighterDark">
            <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            placeholder="Enter your password"
                        />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default QuizPage;
