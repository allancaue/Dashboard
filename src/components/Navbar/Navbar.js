import React from 'react';
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { getSidebarElement } from '../Sidebar/Sidebar';
import { useState } from 'react';
import Pessoa from '../../pages/dashboard/img/people.png'


const Navbar = () => {
    const [sidebarHidden, setSidebarHidden] = useState(true);

    const toggleSidebar = () => {
        const sidebar = getSidebarElement();
        sidebar.classList.toggle('hide');
        setSidebarHidden(!sidebarHidden);
    };

    const Navbar = () => {
        const [searchFormVisible, setSearchFormVisible] = useState(false);

        const toggleSearchForm = () => {
            if (window.innerWidth < 576) {
                setSearchFormVisible(!searchFormVisible);
            }
        };

        const searchFormClassName = searchFormVisible ? 'form-input show' : 'form-input';

        const [darkMode, setDarkMode] = useState(false);

        const toggleDarkMode = () => {
            setDarkMode(!darkMode);
            document.body.classList.toggle('dark');
        };

        return (
            <nav>
                <IoMenu onClick={toggleSidebar} />
                <a href="#" className="nav-link">Categorias</a>
                <button onClick={toggleSearchForm} className="nav-icon"><FaSearch /></button>
                <form action="#" className={searchFormClassName}>
                    <div className="form-input">
                        <input type="search" placeholder="Pesquisar..." />
                        <button type="submit" className="search-btn"><FaSearch /></button>
                    </div>
                </form>
                <input type="checkbox" id="switch-mode" hidden onClick={toggleDarkMode} />
                <label htmlFor="switch-mode" className="switch-mode"></label>
                <a href="#" className="notification">
                    <i className='bx bxs-bell' ></i>
                    <span className="num">8</span>
                </a>
                <a href="#" className="profile">
                    <img src={Pessoa} alt="Profile" />
                </a>
            </nav>
        );
    };

    return <Navbar />;
};

export default Navbar;
