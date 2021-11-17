import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarAuth } from '../ui/NavBarAuth'

export const Login = () => {
    return (
        <>
            <NavBarAuth />
            <div className = "flex justify-center items-center w-full h-screen">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 animate__animated animate__bounceIn">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Inicia Sesión </h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Ingresa tu email" />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Ingresa tu contraseña" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-purple-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login </button>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Aun no tienes una cuenta? 
                        <Link to = "/register"
                            className="border-b border-blue text-blue">
                            Registrate gratis
                        </Link>.
                    </div>
                </div>
            </div>
        </>
    )
}
