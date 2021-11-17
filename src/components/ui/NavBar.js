import React from "react";
import {FaUserAlt, FaSearch} from 'react-icons/fa'
import {IoCreateOutline} from 'react-icons/io5'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { CardWidget } from "./CardWidget";

export const NavBar = () => {
  return (
    <nav className = "bg-yellow-200">
      <div className="container mx-auto py-2 flex justify-between items-center">
          <Link to = "/">
            <div className="logo h-20 animate__animated animate__fadeInDown">
                <img src={logo} alt="" className = "h-full"/>
            </div>
          </Link>
          
          <div className="search shadow-2xl flex w-96 animate__animated animate__fadeIn">
              <input className="w-full p-2 outline-none" type="text" placeholder="Search..." />
              <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                  <FaSearch></FaSearch>
              </button>
          </div>

          <div className="user flex justify-between items-center animate__animated animate__fadeIn">
              <div className="login flex items-center">
                  <Link to = "/login">
                    <div className="flex items-center mr-5 ">
                        <FaUserAlt className = "text-2xl"></FaUserAlt>
                        <p className = "m-2">Inicia sesión</p>
                    </div> 
                  </Link>
                  <Link to = "/register">
                    <div className="flex items-center mr-5">
                        <IoCreateOutline className = "text-2xl"></IoCreateOutline>
                        <p className = "m-2">Crear cuenta</p>
                    </div>
                  </Link>
              </div>
              
              <CardWidget />
          </div>
      </div>
      <div className = "flex justify-center bg-white gap-4">
        <Link to = "/category/men's clothing">
          <button className = "p-2 hover:bg-purple-500 hover:text-white">Men's clothing</button>
        </Link>
        <Link to = "/category/jewelery">
          <button className = "p-2 hover:bg-purple-500 hover:text-white">Jewelery</button>
        </Link>
        <Link to = "/category/electronics">
          <button className = "p-2 hover:bg-purple-500 hover:text-white">Electronics</button>
        </Link>
        <Link to = "/category/women's clothing">
          <button className = "p-2 hover:bg-purple-500 hover:text-white">Women's Clothing</button>
        </Link>
      </div>
    </nav>
  );
};
/*  */