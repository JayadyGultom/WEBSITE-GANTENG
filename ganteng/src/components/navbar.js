import React, { useState, useEffect, useRef } from 'react';
import Logo from '../asset/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const profileMenuRef = useRef(null);
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
                setIsProfileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem('token');
            const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
            if (token && userInfo.name) {
                setIsLoggedIn(true);
                setUserInfo(userInfo);
            }
        };

        checkLoginStatus();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleLogin = () => {
        setIsProfileMenuOpen(false);
        navigate('/login');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false);
        setUserInfo({ name: '', email: '' });
        setIsProfileMenuOpen(false);
        navigate('/');
    };

    const handleMenuClick = (path) => {
        setIsMenuOpen(false);
        navigate(path);
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-sm relative">
            <div className="flex items-center space-x-6">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="h-8 cursor-pointer" 
                    onClick={handleLogoClick}
                />
                
                <div className="relative" ref={menuRef}>
                    <button 
                        className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full transition-colors" 
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faBars} className="mr-2" />
                        Menu
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-lg py-2 w-48">
                            <ul className="flex flex-col">
                                <li 
                                    onClick={() => handleMenuClick('/video')}
                                    className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer flex items-center"
                                >
                                    Video
                                </li>
                                <li 
                                    onClick={() => handleMenuClick('/foto')}
                                    className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer flex items-center"
                                >
                                    Foto
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="relative" ref={profileMenuRef}>
                <button
                    className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                    onClick={toggleProfileMenu}
                >
                    <FontAwesomeIcon 
                        icon={faUserCircle} 
                        className="text-gray-600 text-xl"
                    />
                </button>
                {isProfileMenuOpen && (
                    <div className="absolute top-full right-0 bg-white shadow-lg mt-2 rounded-2xl py-2 w-80">
                        {isLoggedIn ? (
                            <div className="flex flex-col">
                                <div className="px-6 py-3 border-b border-gray-100">
                                    <div className="font-medium text-base">{userInfo.name}</div>
                                    <div className="text-sm text-gray-500">{userInfo.email}</div>
                                </div>
                                <button 
                                    onClick={handleLogout}
                                    className="px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <button 
                                    onClick={handleLogin}
                                    className="px-6 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                                >
                                    Login
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
