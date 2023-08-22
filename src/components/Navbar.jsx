import React from 'react';
import Logo from '../assets/Logo.gif'
import { NavLink, Outlet } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
        <header className="w-full flex justify-between items-center bg-[#000] sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] ">
            <NavLink to="/">
                <img src={Logo} alt="logo" className="w-40 object-contain" />

            </NavLink>
            <NavLink to="/add-album" className="font-inter font-medium bg-[#6469ff] text-white  px-2 text-xs py-2 hover:bg-blue-600 rounded">Create</NavLink>
        </header>
        {/* Render nested routes */}
        <Outlet />
    </>
  )
}

export default Navbar