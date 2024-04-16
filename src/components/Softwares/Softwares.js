import React from 'react';
import Pessoa from '../../assets/people.png'
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


const Softwares = () => {
    return (
        <main>
    <div className="head-title">
        <div className="left">
            <h1>Softwares</h1>
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
            <span className="text">Adicionar Licença</span>
        </a>
    </div>
    <div className="table-data">
        <div className="order">
            <div className="head">
                <h3>Lista de softwares licenciados</h3>
                <CiSearch />
                <IoFilter />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Software</th>
                        <th>Usuário</th>
                        <th>Data de expiração</th>
                        <th>Status</th>
                        <th>Histórico de Atualizações</th>
                        <th>Tipo de Licença</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className="status completed">Avast - Antivirus</span></td>
                        <td>
                            <img src={Pessoa} alt="Usuário" />
                            <p>Davi Borges</p>
                        </td>
                        <td>01-10-2024</td>
                        <td><span className="status completed">Ativo</span></td>
                        <td><span className="status completed">Atualizações</span></td>
                        <td><span className="status completed">Standard</span></td>
                    </tr>
                    <tr>
                        <td><span className="status completed">Avira - Antivirus</span></td>
                        <td>
                            <img src={Pessoa} alt="Usuário" />
                            <p>José Vitor</p>
                        </td>
                        <td>01-10-2024</td>
                        <td><span className="status completed">Ativo</span></td>
                        <td><span className="status completed">Atualizações</span></td>
                        <td><span className="status completed">Premium</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>

    );
}

export default Softwares;
