import React, { useState } from 'react';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(0); // Inicialmente nenhum item está ativo

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <section id="sidebar" className='sidebar'>
            <a href="#" className="brand">
                <i className='bx bxs-smile'></i>
                <span className="text">Orbita</span>
            </a>
            <ul className="side-menu top">
                {['Dashboard', 'Meus Clientes', 'Tickets', 'Mensagens', 'Softwares'].map((menuItem, index) => (
                    <li key={index} className={index === activeItem ? 'active' : ''}>
                        <a href="#" onClick={() => handleItemClick(index)}>
                            <i className={`bx bxs-${menuItem.toLowerCase().replace(/\s/g, '-')}`}></i>
                            <span className="text">{menuItem}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#">
                        <i className='bx bxs-cog' ></i>
                        <span className="text">Configurações</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="logout">
                        <i className='bx bxs-log-out-circle' ></i>
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