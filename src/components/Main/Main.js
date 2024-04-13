import React from 'react';
import Pessoa from '../../pages/dashboard/img/people.png'

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
                    <i className='bx bx-dots-vertical-rounded' ></i>
                </li>
                {/* Outras tarefas aqui */}
            </ul>
        </div>
    </div>
</main>

    );
}

export default Main;
