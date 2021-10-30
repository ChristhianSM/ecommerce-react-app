import React from "react";
import {FaUserAlt, FaSearch} from 'react-icons/fa'
import {IoCreateOutline} from 'react-icons/io5'
import logo from '../../assets/logo.png'
import { CardWidget } from "./CardWidget";

export const NavBar = () => {
  return (
    <nav className = "bg-yellow-200">
      <div className="container mx-auto py-2 flex justify-between items-center">
          <div className="logo h-20 animate__animated animate__fadeInDown">
              <img src={logo} alt="" className = "h-full"/>
          </div>
          
          <div className="search shadow-2xl flex w-96 animate__animated animate__fadeIn">
              <input className="w-full p-2 outline-none" type="text" placeholder="Search..." />
              <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                  <FaSearch></FaSearch>
              </button>
          </div>

          <div className="user flex justify-between items-center animate__animated animate__fadeIn">
              <div className="login flex items-center">
                  <div className="flex items-center mr-5 ">
                      <FaUserAlt className = "text-2xl"></FaUserAlt>
                          <p className = "m-2">Inicia sesión</p>
                  </div> 
                  <div className="flex items-center mr-5">
                      <IoCreateOutline className = "text-2xl"></IoCreateOutline>
                      <p className = "m-2">Crear cuenta</p>
                  </div>
              </div>
              
              <CardWidget />
          </div>
      </div>
    </nav>
  );
};
/*  */