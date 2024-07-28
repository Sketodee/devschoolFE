import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

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
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className=" focus:outline-none">
                            Services
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Product</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Design</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tech</a>
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