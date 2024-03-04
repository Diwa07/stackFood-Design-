import React, { useState } from "react";
import logo from '../../image/logo.svg'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="flex justify-between py-5 px-7">
      <div> <Link to="/"> <img src= {logo} alt=""   />  </Link> </div>
      <div className="hidden lg:flex">
     <ol className="flex cursor-pointer gap-9 " >
     <Link to="/">  <li>Home</li> </Link>
        <li>Features</li>
        <Link to="/price"> <li>Pricing</li> </Link>
        <li>Services</li>
        <li>Demo</li>
        <li>Get Help</li>
     </ol>
      </div>
      <div className="hidden lg:flex" >
        <button className="px-5 py-3 text-[white] font-bold bg-[#FF8C2D] rounded-2xl " > Buy Now</button>
        </div>
       
        <div className=" lg:hidden">
            <GiHamburgerMenu
              onClick={() => {
                setShowNav(true);
              }}
              className="text-3xl cursor-pointer"
            />
            {showNav && (
              <div className="absolute right-0 z-50  w-[60%] h-screen  bg-white border border-gray-300  top-2">
                <div className="hover:text-[red] cursor-pointer mb-2  text-3xl flex justify-end px-7 py-1  ">
                  <MdOutlineCancel
                    onClick={() => {
                      setShowNav(false);
                    }}
                  />
                </div>
                <ol className="px-4 py-4 ">
                 
                    <li className="hover:text-[#006156] cursor-pointer mb-7  rounded-2xl p-1 md:px-6 hover:bg-[#9c7c7c54] py-2">
                      Home
                    </li>
                
                  <li className="hover:text-[#006156] cursor-pointer mb-7  rounded-2xl p-1 md:px-6 hover:bg-[#9c7c7c54] py-2">
                    Features
                  </li>
             
                  <Link to="/price">   <li className="hover:text-[#006156] cursor-pointer mb-7  rounded-2xl p-1 md:px-6 hover:bg-[#9c7c7c54] py-2">
                      Pricing
                    </li> </Link>
             
                  <li className="hover:text-[#006156] cursor-pointer mb-7  rounded-2xl p-1 md:px-6 hover:bg-[#9c7c7c54] py-2">
                 Servvices
                  </li>
                  <li className="hover:text-[#006156] cursor-pointer mb-7  rounded-2xl p-1 md:px-6 hover:bg-[#9c7c7c54] py-2">
                   Demo
                  </li>
                  <li className="hover:text-[#006156] cursor-pointer mb-7  rounded-2xl p-1 md:px-6 hover:bg-[#9c7c7c54] py-2">
                    Get Help
                  </li>
                  <li className="flex justify-center">
                  <button className="px-5 py-3 text-[white] font-bold bg-[#FF8C2D] rounded-2xl " > Buy Now</button>
                  </li>
                </ol>
              </div>
            )}
          </div>









    </nav>
  );
};

export default Nav;
