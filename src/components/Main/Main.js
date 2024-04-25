import React from 'react';
import Pessoa from '../../assets/people.png';
import { FaCalendarCheck } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import BarAndDoughnutChart from '../../pages/grafico/charts';

const Main = () => {
    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Painel de Controle</h1>
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
                    <FaCloudDownloadAlt />
                    <span className="text">Baixar PDF</span>
                </a>
            </div>

            <div className="box-info">
                <div className="info-item">
                    <FaCalendarCheck />
                    <div className="text">
                        <h3>1020</h3>
                        <p>Novos Pedidos</p>
                    </div>
                </div>
                <div className="info-item">
                    <FaUserGroup />
                    <div className="text">
                        <h3>2834</h3>
                        <p>Licenças vendidas</p>
                    </div>
                </div>
                <div className="info-item">
                    <AiFillDollarCircle />
                    <div className="text">
                        <h3>R$21.543,00</h3>
                        <p>Vendas Totais</p>
                    </div>
                </div>
            </div>

            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Pedidos Recentes</h3>
                        <i className='bx bx-search' ></i>
                        <i className='bx bx-filter' ></i>
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
                <div className="todo">
                    <div className="head">
                        <h3>Tarefas Pendentes</h3>
                        <i className='bx bx-plus' ></i>
                        <i className='bx bx-filter' ></i>
                    </div>
                    <ul className="todo-list">
                        <li className="completed">
                            <p>Tarefa 1</p>
                            <BsThreeDotsVertical />
                        </li>
                    </ul>
                    <ul className="todo-list">
                        <li className="not-completed">
                            <p>Tarefa 2</p>
                            <BsThreeDotsVertical />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Adicione o componente do gráfico aqui */}
            <div className="charts">
                <BarAndDoughnutChart />
            </div>
        </main>
    );
}

export default Main;
