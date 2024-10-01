import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Button from './Button'; // Assume you have a Button component
import { useModal } from '../context/ModalContext';

const Navbar2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { openModal } = useModal();

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen)
  }
  const toggleMenu = () => setMenuOpen(!menuOpen);



  return (
    <nav className="p-4 raleway-600 w-full lg:w-[70%] mx-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold basis-3/6">
          <Link to={'/'}> <img className='h-8 md:h-8' src="/kodexxarlogo.png" alt="" /> </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 basis-2/6">
          <Link to={'/'}>Home</Link>
          <div className="relative flex items-center">
            <button onClick={toggleDropdown} className="focus:outline-none me-1">
              Schools
            </button>
            <p onClick={toggleDropdown} className='cursor-pointer'>
              <RiArrowDownSLine />
            </p>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                <Link to={'/product'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Product</Link>
                <Link to={'/data'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Data</Link>
                <Link to={'/engineering'} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Engineering</Link>
              </div>
            )}
          </div>
          <Link to={'/#about'}>About</Link>
          <Link to={'/help'}>Help</Link>
        </div>
        <div className="basis-1/6  justify-end hidden md:flex">
          <Button  onClick={openModal} text={"Apply"} className={""} />
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMenu}>
          <div className="fixed top-0 left-0 w-[75%] h-full bg-white p-4 shadow-lg z-50">
            <div className="flex flex-col space-y-4">
              <Link to={'/'} onClick={toggleMenu}>Home</Link>
              <div className='relative flex-col items-center'>
                <div className="flex items-center">
                  <button onClick={toggleDropdown} className="focus:outline-none me-1">
                    Schools
                  </button>
                  <p onClick={toggleDropdown} className='cursor-pointer'>
                    <RiArrowDownSLine />
                  </p>
                </div>
                {dropdownOpen && (
                  <div className="ml-4">
                    <Link to={'/product'} className="block py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Product</Link>
                    <Link to={'/data'} className="block py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Data</Link>
                    <Link to={'/engineering'} className="block py-2 text-gray-800 hover:bg-gray-200" onClick={toggleMenu}>Engineering</Link>
                  </div>
                )}
              </div>
              <Link to={'/#about'}  onClick={toggleMenu}>About</Link>
              <Link to={'/help'} onClick={toggleMenu}>Help</Link>
              <div onClick={toggleMenu} >
                <Button onClick={openModal} text={"Apply"} className={"mt-4"} />
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
