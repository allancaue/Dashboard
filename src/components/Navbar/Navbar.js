import React, { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { getSidebarElement } from '../Sidebar/Sidebar';
import Pessoa from '../../assets/people.png';
import { IoIosNotifications } from "react-icons/io";


const Navbar = () => {
    const [sidebarHidden, setSidebarHidden] = useState(true);
    const [searchFormVisible, setSearchFormVisible] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = getSidebarElement();
            if (sidebar && !sidebar.contains(event.target)) {
                setSidebarHidden(true);
            }
        };

        if (!sidebarHidden) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebarHidden]);

    const toggleSidebar = () => {
        const sidebar = getSidebarElement();
        sidebar.classList.toggle('hide');
        setSidebarHidden(!sidebarHidden);
    };

    const toggleSearchForm = () => {
        if (window.innerWidth < 576) {
            setSearchFormVisible(!searchFormVisible);
        }
    };

    const searchFormClassName = searchFormVisible ? 'form-input show' : 'form-input';

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    };

    return (
        <nav>
            <IoMenu onClick={toggleSidebar} />
            <a href="#" className="nav-link">Categorias</a>
            <button onClick={toggleSearchForm} className="nav-icon"></button>
            <form action="#" className={searchFormClassName}>
                <div className="form-input">
                    <input type="search" placeholder="Pesquisar..." />
                    <button type="submit" className="search-btn"><FaSearch /></button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden onClick={toggleDarkMode} />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <a href="#" className="notification">
                <IoIosNotifications />
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src={Pessoa} alt="Profile" />
            </a>
        </nav>
    );
};

export default Navbar;
