import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <nav className=" p-4 raleway-600 w-[70%] mx-auto">
            <div className="container mx-auto flex items-center justify-between">
                <div className=" text-2xl font-bold basis-3/6">
                    <a href="#">Logo</a>
                </div>
                <div className="flex items-center space-x-4 basis-2/6">
                    <a href="#" className="">Home</a>
                    <div className="relative flex items-center" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className=" focus:outline-none me-1">
                            Schools
                        </button>
                        <p onClick={toggleDropdown} className='cursor-pointer'>
                            <RiArrowDownSLine />
                        </p>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <Link to={'/product'}  className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Product</Link>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Design</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Engineering</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="">About</a>
                    <a href="#" className="">Contact</a>
                </div>
                <div className='basis-1/6 flex justify-end'>
                        <Button text={"Apply"} className={"bg-purple-600 hover:bg-gray-100 hover:text-purple-600"} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar