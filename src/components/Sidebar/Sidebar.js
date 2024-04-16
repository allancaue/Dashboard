import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { MdChat } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Logo from '../../assets/logo.png'


const Sidebar = () => {
    const [activeItem, setActiveItem, setClickedIcon] = useState(0); // Inicialmente nenhum item está ativo

    const handleItemClick = (index, icon) => {
        setActiveItem(index);
    };

    return (
        <section id="sidebar" className='sidebar'>
            <a href="#" className="brand">
                <img src={Logo} alt="logo" />
                <span className="text">LicenseLab</span>
            </a>
            <ul className="side-menu top">
                {[
                    { label: 'Dashboard', icon: <MdDashboard /> },
                    { label: 'Meus Clientes', icon: <RiGroupFill />                },
                    { label: 'Tickets', icon: <BiSupport />                },
                    { label: 'Mensagens', icon: <MdChat />                },
                    { label: 'Softwares', icon: <GrSystem />                }
                ].map((menuItem, index) => (
                    <li key={index} className={index === activeItem ? 'active' : ''}>
                        <a href="#" onClick={() => handleItemClick(index, menuItem.icon)}>
                            {menuItem.icon && menuItem.icon} {/* Renderiza o ícone se estiver disponível */}
                            <span className="text">{menuItem.label}</span>
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="side-menu">
                <li>
                    <a href="#">
                        <IoSettings />
                        <span className="text">Configurações</span>
                    </a>
                </li>
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
