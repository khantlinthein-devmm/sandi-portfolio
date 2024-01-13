import { CgNametag } from "react-icons/cg";
import { CgMenuRound } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { IoMdContact } from "react-icons/io";

import {useState} from 'react';

const Navbar = () => {

    const [toggle,setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }

  return (
    <>
    {/* Container */}
      <div className="flex items-center justify-between p-4 lg:flex-row  ">
        {/* NameLogo */}
        <div>
          <span className="text-slate-900 font-poppin text-3xl tracking-wider flex items-center ">
            <CgNametag />
            SANDI
          </span>
        </div>
        {/* Navbar user details */}
        <div className="space-x-8 mr-12 ">
          <div className="ssm:hidden lg:block space-x-2">
            <a
              href="#home"
              className="text-slate-900 hover:text-white rounded-full  px-5 py-2 text-xl "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-slate-900  hover:text-white rounded-full  px-5 py-2 text-xl "
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-900  hover:text-white rounded-full  px-5 py-2 text-xl "
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-slate-900 hover:text-white rounded-full  px-5 py-2 text-xl "
            >
              Contact
            </a>
          </div>
          <div className='ssm:block md:hidden' >

            {toggle ? (
                <AiOutlineCloseCircle onClick={closeMenu} size={30} className='text-white cursor-pointer' />
            ): (
                <CgMenuRound onClick={openMenu} size={30} className='text-white cursor-pointer' />
            )}
            
          </div>
        </div>
      </div>
        {/* Container End Section */}

        {/* Dropdown Section */}
      <div className='ssm:block lg:hidden '>
        {toggle ? (
            <div className='flex justify-between ml-10 '>
            <ul className=''>
                <li className='text-white  text-xl mb-2 cursor-pointer'><FaHome/></li>
                <li className='text-white  text-xl mb-2 cursor-pointer'><SiAboutdotme/></li>
                <li className='text-white  text-xl mb-2 cursor-pointer'><GoGoal/></li>
                <li className='text-white  text-xl mb-2 cursor-pointer'><IoMdContact/></li>
            </ul>
        </div>
        ): (
            <div></div>
        )};
        
      </div>
    </>
  );
};

export default Navbar;
