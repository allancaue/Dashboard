import React, { useState } from 'react';
import Pessoa from '../../assets/people.png'
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import '../../styles/addlice.css'


const Softwares = () => {
    const [showPopup, setShowPopup] = useState(false);

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
                <a href="#" className="btn-download" onClick={() => setShowPopup(true)}>
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
            {showPopup && (
                <div className='popup'>
                    <div className="form">
                        <form action="#">
                            <div className="formheader">
                                <div className="title">
                                    <h2>Dados do Software</h2>
                                </div>
                            </div>
        
                            <div className="inputgroup">
                                <div className="inputbox">
                                    <label htmlFor="softname">Nome do Software</label>
                                    <input id="softname" type="text" name="softname" placeholder="Digite nome do software para o qual a licença está sendo cadastrada." required />
                                </div>
                                <div className="inputbox">
                                    <label htmlFor="nomedaempresa">Nome da Empresa</label>
                                    <input id="nomedaempresa" type="text" name="nomedaempresa" placeholder="Digite o nome da empresan" required />
                                </div>
        
                                <div className="inputbox">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
                                </div>
        
                                <div className="inputbox">
                                    <label htmlFor="number">Celular</label>
                                    <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required />
                                </div>
        
                                <div className="inputbox">
                                    <label htmlFor="key">Chave da Licença</label>
                                    <input id="key" type="key" name="key" placeholder="Insira a chave de autenticação" required />
                                </div>
        
        
                                <div className="inputbox">
                                    <label htmlFor="confirmPassword">Confirme sua Senha</label>
                                    <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required />
                                </div>
        
                            </div>
                            <div className='botoes'>
                                <div className="cancellbutton">
                                <button onClick={() => { setShowPopup(false); }}>Cancelar</button>
                                </div>
                                <div className="continuebutton">
                                    <button type='submit'>Adicionar Licença</button>
                                </div>
                            </div>
        
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Softwares;
