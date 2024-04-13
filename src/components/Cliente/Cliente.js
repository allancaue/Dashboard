import React from 'react';
import Pessoa from '../../assets/people.png'
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


const Cliente = () => {
    return (
        <main>
    <div className="head-title">
        <div className="left">
            <h1>Cliente</h1>
            <ul className="breadcrumb">
                <li>
                    <a href="#">Painel de Controle</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                    <a className="active" href="#">Início</a>
                </li>
            </ul>
        </div>
        <a href="#" className="btn-download">
            <FaPlus />
            <span className="text">Adicionar Cliente</span>
        </a>
    </div>
    <div className="table-data">
        <div className="order">
            <div className="head">
                <h3>Cliente</h3>
                <CiSearch />
                <IoFilter />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Data de expiração</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={Pessoa} alt="Usuário" />
                            <p>João Silva</p>
                        </td>
                        <td>01-10-2024</td>
                        <td><span className="status completed">Concluído</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>

    );
}

export default Cliente;
