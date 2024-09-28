"use client";

import React from "react";
import LoginAnimation from '@/components/LoginAnimation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signIn from "@/firebase/auth/signin";
import Link from 'next/link';
import { useAuthContext } from "@/context/AuthContext";


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const { user } = useAuthContext();
    const router = useRouter();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const handleForm = async (event) => {
        event.preventDefault();

        const { error } = await signIn(email, password);

        if (error) {
            return console.log(error);
        } else {
            router.push('/')
        }
    };

    return (
        <main className="bg-gradient-to-b from-dark to-lighterDark min-h-screen grid place-items-center p-7 md:p-10">
            { user ? <div className="max-w-xs w-auto h-auto p-5 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className='text-gray-400 font-medium text-center'>You are already logged in, do you want to go to the <Link href={'/'}><span className="text-blue-300">landing page</span></Link>?</p>
            </div> : <section className=''>
                <div className='flex flex-row max-w-4xl m-auto justify-center'>
                    <div className='flex flex-col justify-center gap-5'>
                        <form className='w-72' onSubmit={handleForm}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                                <div className="relative mb-5">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input onChange={(e) => setEmail(e.target.value)} required type="email" id="email" name="email" className="border border-gray-30 text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-orange-500 focus:border-orange-500" placeholder="name@prepme"></input>
                                </div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your Password</label>
                                <div className="relative mb-5">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                            <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                                        </svg>
                                    </div>
                                    <input type={passwordShown ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required id="password" name="password" className="border border-gray-30 text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-orange-500 focus:border-orange-500" placeholder="•••••••••"></input>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="showPassword" type="checkbox" value="" onClick={togglePassword} className="w-4 h-4 border rounded text-orange-500 bg-gray-700 border-gray-600 focus:ring-orange-500 ring-offset-gray-800 focus:ring-offset-gray-800" />
                                    </div>
                                    <label htmlFor="showPassword" className="ml-2 text-sm font-medium text-gray-300">Show Password</label>
                                </div>
                            </div>
                            <div className="flex flex-row gap-7 justify-center">
                                <Link href={"/signup"}><button type="button" className='text-lighterDark bg-white font-bold rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center'>SIGN UP</button></Link>
                                <button type="submit" className="text-white bg-gradient-to-t from-yellow-200 via-orange-460 to-orange-500 font-medium rounded-lg text-sm px-4 py-2.5 hover:animate-pulse text-center">LOGIN</button>
                            </div>
                        </form>
                    </div>
                    <div className='hidden lg:inline'>
                        <LoginAnimation></LoginAnimation>
                    </div>
                </div>
            </section>}
        </main>
    )
}
