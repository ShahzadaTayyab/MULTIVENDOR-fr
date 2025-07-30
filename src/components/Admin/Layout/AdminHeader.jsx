// src/components/Layout/AdminHeader.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { backend_url } from "../../../server";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <header className="w-full h-[70px] bg-[#3321c8] flex items-center justify-between px-6 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/admin/dashboard" className="flex items-center">
        <img
          src="https://shopo.quomodothemes.website/assets/images/logo.svg"
          alt="Admin Logo"
          className="h-[40px]"
        />
        <span className="text-white text-lg font-semibold ml-3 hidden 600px:inline">
          Admin Panel
        </span>
      </Link>

      {/* Right Section - Profile */}
      <div className="flex items-center space-x-4">
        {user ? (
          <Link to="/admin/profile">
            <img
              src={`${backend_url}uploads/${user.avatar}`}
              alt="Admin Avatar"
              className="w-[40px] h-[40px] rounded-full object-cover border-2 border-white"
            />
          </Link>
        ) : (
          <Link to="/login">
            <CgProfile size={30} color="#fff" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
