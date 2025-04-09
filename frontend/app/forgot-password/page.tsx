"use client";

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Password reset failed');
            }

            toast.success('Password reset link sent to your email!');
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Password reset failed');
        }
    }

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h1>
                    <p className="text-gray-600">Enter your email to reset your password</p>
                </div>

                <form onSubmit={handlePasswordReset}>
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    )
}