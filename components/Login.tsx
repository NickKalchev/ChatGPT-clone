'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../public/assets/logo.png";

function Login() {
    return (
        <div className="bg-[#11a680] h-screen flex flex-col items-center justify-center text-center">
            <Image 
                src={logo}
                alt="logo"
                width={300}
                height={300}
            />

            <button 
            onClick={() => signIn("google")}
            className="text-white py-3 px-6 rounded-xl font-bold text-3xl animate-pulse hover:bg-gray-200 hover:text-gray-800 hover:animate-none">
                Sign In to use ChatGPT
            </button>
        </div>
    )
}

export default Login;
