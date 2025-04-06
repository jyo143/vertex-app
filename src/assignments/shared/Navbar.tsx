import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  FaThLarge,
  FaChartBar,
  FaGlobeAmericas,
  FaBell,
  FaHandshake,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
const LogoIcon = () => (
  <img
    src="/src/assets/NavbarAssets/vertx-logo.png"
    alt="logo"
    className="w-[50px] h-[50px] rounded-full bg-white"
  />
);

const Navbar = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isAssignment1 = location.pathname.includes("/assignment-1");
  const isAssignment2 = location.pathname.includes("/assignment-2");
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="md:hidden sticky top-0 z-10 bg-black border-b border-[#333333]">
        <div className="flex justify-between items-center p-4 h-16">
          <img
            className="w-[36px] h-[36px] rounded-full"
            src="/src/assets/NavbarAssets/profile-pic.jpg"
            alt="profile-pic"
          />
          <LogoIcon />
          <p className={`flex flex-col items-center text-xs`}>
            <CiMenuKebab className="w-8 h-8 fill" />
          </p>
        </div>
        {isAssignment1 && (
          <div className="flex justify-around items-center h-10 text-sm text-[#888888]">
            <p className="text-white font-semibold border-b-2 border-white pb-2 px-2">
              Overview
            </p>
            <p className="pb-2 px-2">Reports</p>
            <p className="pb-2 px-2">Demographics</p>
          </div>
        )}
        {isAssignment2 && (
          <div className="flex justify-around items-center h-10 text-sm text-[#888888]">
            <p className="text-white font-semibold border-b-2 border-white pb-2 px-2">
              Overview
            </p>
            <p className="pb-2 px-2">Portfolio</p>
            <p className="pb-2 px-2">Experience</p>
            <p className="pb-2 px-2">Media</p>
          </div>
        )}
      </div>

      <div className="hidden md:block p-4">
        {isAssignment1 && (
          <div className="absolute top-4 left-4 flex flex-col space-y-4">
            <img
              className="w-[50px] h-[50px] rounded-full bg-white"
              src="/src/assets/NavbarAssets/vertx-logo.png"
              alt="logo"
            />
            <img
              className="w-[45px] h-[45px] rounded-full"
              src="/src/assets/NavbarAssets/profile-pic.jpg"
              alt="profile-pic"
            />
          </div>
        )}
        {isAssignment2 && (
          <div className="absolute top-4 left-4 flex flex-col space-y-4">
            <img
              className="w-[50px] h-[50px] rounded-full bg-white"
              src="/src/assets/NavbarAssets/vertx-logo.png"
              alt="logo"
            />
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="relative w-[50px] h-[50px] bg-[#555555] rounded-lg flex items-center justify-center"
              >
                <img
                  className="w-[45px] h-[45px] rounded-full object-cover"
                  src="/src/assets/NavbarAssets/profile-pic.jpg"
                  alt={`profile-pic-${i}`}
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 ${
                    i === 1 ? "bg-red-500" : "bg-green-500"
                  } border-2 border-[#555555] rounded-full`}
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center px-8 py-4">
          <div className="ml-4 flex flex-col">
            <div className="space-x-4 flex flex-row">
              <p className="text-lg font-bold ml-16">Vertxlabs, Inc</p>
              {isAssignment1 && (
                <p className="text-white mt-0.5 relative left-16">Analytics</p>
              )}
              {isAssignment2 && (
                <p className="text-white mt-0.5 relative left-16">Profile</p>
              )}
            </div>
          </div>
          <div className="flex justify-end items-end px-8">
            <div className="flex space-x-8">
              <p className="text-white">Activity</p>
              <p className="text-white">Log out</p>
            </div>
          </div>
        </div>
        {isAssignment1 && (
          <div className="flex justify-between">
            <div className="flex space-x-4 ml-72 pl-5 gap-4">
              <p className="text-white">Overview</p>
              <p className="text-[#555555]">Demographics</p>
            </div>
            <div>
              <p className="text-white mr-16">More</p>
            </div>
          </div>
        )}
        {isAssignment2 && (
          <div className="flex justify-between">
            <div className="flex space-x-4 ml-72 pl-5 gap-4">
              <p className="text-white">Overview</p>
              <p className="text-[#555555]">Portfolio</p>
              <p className="text-[#555555]">Experience</p>
              <p className="text-[#555555]">Media</p>
            </div>
            <div>
              <p className="text-white mr-16">More</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block w-1/6 pl-24 ml-10">
          <nav className="flex flex-col space-y-8">
            <p className="text-[#555555]">Dashboard</p>
            <p className="text-[#FFFFFF]">Analytics</p>
            <p className="text-[#555555]">Connect</p>
            <p className="text-[#555555]">Dealroom</p>
            <p className="text-[#555555]">Profile</p>
            <p className="text-[#555555]">Settings</p>
          </nav>
        </div>

        <div className="flex-1 overflow-auto pb-20 md:pb-0 md:p-8">
          {children}
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#111111] border-t border-[#333333] flex justify-around items-center z-10">
        <p className={`flex flex-col items-center text-xs`}>
          <FaThLarge className="w-5 h-5 mb-1" /> Dashboard
        </p>
        <p className={`flex flex-col items-center text-xs`}>
          <FaChartBar className="w-5 h-5 mb-1" /> Analytics
        </p>
        <p className={`flex flex-col items-center text-xs`}>
          <FaGlobeAmericas className="w-5 h-5 mb-1" /> Connect
        </p>
        <p className={`flex flex-col items-center text-xs`}>
          <FaBell className="w-5 h-5 mb-1" /> Activity
        </p>
        <p className={`flex flex-col items-center text-xs`}>
          <FaHandshake className="w-5 h-5 mb-1" /> Dealroom
        </p>
      </div>

      <div className="hidden md:block">
        <img
          className="w-[24px] h-[24px] rounded-full"
          src="/src/assets/NavbarAssets/plus-icon.svg"
          alt="plus-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
