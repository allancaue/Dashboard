import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { GrSystem } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import Logo from '../../assets/logo.png'

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index, icon) => {
        setActiveItem(index);
    };

    return (
        <section id="sidebar" className='sidebar hide'>
            <a href="#" className="brand">
                <img src={Logo} alt="logo" />
                <span className="text">LicenseLab</span>
            </a>
            <ul className="side-menu top">
                {[
                    { label: 'Dashboard', icon: <MdDashboard />, path: '/painel' }, 
                    { label: 'Meus Clientes', icon: <RiGroupFill />, path: '/cliente' }, 
                    { label: 'Softwares', icon: <GrSystem />, path: '/softwares' } 
                ].map((menuItem, index) => (
                    <li key={index} className={index === activeItem ? 'active' : ''}>
                        <Link
                            to={menuItem.path}
                            onClick={() => handleItemClick(index, menuItem.icon)}
                        >
                            {menuItem.icon && menuItem.icon}
                            <span className="text">{menuItem.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <CiLogout />
                        <span className="text">Sair</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Sidebar;
export const getSidebarElement = () => {
    return document.getElementById('sidebar');
}
