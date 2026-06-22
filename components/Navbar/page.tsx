'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CodeXml, Menu, X, Download } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-50">
            <div className="w-full h-20 bg-black/40 backdrop-blur-md border-b border-gray-400 px-6 md:px-12 lg:px-20 flex justify-between items-center">

                <Link href="/" className="logo flex items-center text-white font-bold text-2xl z-50">
                    <span className="p-1 bg-yellow-500 hover:bg-purple-500 transition duration-300 rounded">
                        <CodeXml />
                    </span>
                    <span className="ml-2">Natkamon</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-gray-400 text-lg space-x-6">
                    <li><Link className="transition duration-300 hover:text-white" href="#aboutme">About Me</Link></li>
                    <li><Link className="transition duration-300 hover:text-white" href="#myskill">Skill</Link></li>
                    <li><Link className="transition duration-300 hover:text-white" href="#myprojects">Projects</Link></li>
                    <li><Link className="transition duration-300 hover:text-white" href="#contact">Contact</Link></li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block p-2 bg-yellow-500 hover:bg-yellow-400 transition duration-300 rounded-xl">
                    <Link className="text-white text-lg flex items-center gap-2" target='_blank' href="https://drive.google.com/drive/folders/1plPugp__DIKWIakxmKvMfH9wsX3tXSqk?usp=sharing">
                        <Download /> Resume
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none z-50"
                    onClick={toggleMenu}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div
                className={`md:hidden absolute w-full bg-black/40 backdrop-blur-md border-b border-gray-600 transition-all duration-300 ease-in-out ${isOpen ? 'top-20 opacity-100 visible' : 'top-[-400px] opacity-0 invisible'
                    }`}
            >
                <ul className="flex flex-col items-center py-6 space-y-6 text-gray-400 text-lg">
                    <li><Link onClick={toggleMenu} className="hover:text-white transition duration-300" href="#aboutme">About Me</Link></li>
                    <li><Link onClick={toggleMenu} className="hover:text-white transition duration-300" href="#myskill">Skill</Link></li>
                    <li><Link onClick={toggleMenu} className="hover:text-white transition duration-300" href="#myprojects">Projects</Link></li>
                    <li><Link onClick={toggleMenu} className="hover:text-white transition duration-300" href="#contact">Contact</Link></li>
                    <li className="pt-2">
                        <div className="p-2 px-4 bg-yellow-500 hover:bg-yellow-400 transition duration-300 rounded-xl">
                            <Link onClick={toggleMenu} className="text-white flex items-center" target='_blank' href="https://drive.google.com/drive/folders/1plPugp__DIKWIakxmKvMfH9wsX3tXSqk?usp=sharing">
                                <Download /> Resume
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;