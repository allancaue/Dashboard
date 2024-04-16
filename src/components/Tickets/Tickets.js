import React from 'react';
import Pessoa from '../../assets/people.png'
import { IoChatboxEllipses } from "react-icons/io5";
import { MdGpsNotFixed } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { CgDetailsLess } from "react-icons/cg";



const Tickets = () => {
    return (
        <main>
    <div className="head-title">
        <div className="left">
            <h1>Tickets</h1>
            <ul className="breadcrumb">
                <li>
                    <a href="#">Tickets</a>
                </li>
                <li><i className='bx bx-chevron-right' ></i></li>
                <li>
                    <a className="active" href="#">Início</a>
                </li>
            </ul>
        </div>
        <a href="#" className="btn-download">
            <i className='bx bxs-cloud-download' ></i>
            <span className="text">Baixar PDF</span>
        </a>
    </div>

    <div className="box-info">
        <div className="info-item">
            <i className='bx bxs-calendar-check' ></i>
            <div className="text">
                <h3>1020</h3>
                <p>Novos Pedidos</p>
            </div>
        </div>
        <div className="info-item">
            <i className='bx bxs-group' ></i>
            <div className="text">
                <h3>2834</h3>
                <p>Licenças vendidas</p>
            </div>
        </div>
        <div className="info-item">
            <i className='bx bxs-dollar-circle' ></i>
            <div className="text">
                <h3>R$2.543,00</h3>
                <p>Vendas Totais</p>
            </div>
        </div>
    </div>

    <div className="table-data">
        <div className="order">
            <div className="head">
                <h3>Tickets de suporte pendentes</h3>
                <a href='#'><IoFilterSharp /></a>
                <i className='bx bx-search' ></i>
                <i className='bx bx-filter' ></i>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Data de expiração</th>
                        <th>Status</th>
                        <th>Detalhes do ticket</th>
                        <th>Mensagens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={Pessoa} alt="Usuário" />
                            <p>João Silva</p>
                        </td>
                        <td>01-10-2024</td>
                        <td><span className="status completed">Pendente <MdGpsNotFixed /></span></td>
                        <td><span className="status completed">Detalhes</span></td>
                        <td><span className="status completed">Chat <IoChatboxEllipses /></span></td>
                    </tr>
                </tbody>
            </table>
            <div className="head">
                <h3>Tickets de suporte concluídos</h3>
                <a href='#'><IoFilterSharp /></a>
                <i className='bx bx-search' ></i>
                <i className='bx bx-filter' ></i>
            </div>
                        <table>
                <thead>
                    <tr>
                        <th>Usuário</th>
                        <th>Tempo de resolução</th>
                        <th>Status</th>
                        <th>Detalhes do ticket</th>
                        <th>Mensagens</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={Pessoa} alt="Usuário" />
                            <p>Allan Cauê</p>
                        </td>
                        <td>1 Dia</td>
                        <td><span className="status completed">Solucionado <MdGpsFixed /></span></td>
                        <td><span className="status completed">Detalhes</span></td>
                        <td><span className="status completed">Chat <IoChatboxEllipses /></span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>

    );
}

export default Tickets;
