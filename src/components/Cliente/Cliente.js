import React, { useState } from 'react';
import Pessoa from '../../assets/people.png';
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import '../../styles/add.css'

const Cliente = () => {
    const [showPopup, setShowPopup] = useState(false);

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
                <a href="#" className="btn-download" onClick={() => setShowPopup(true)}>
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
            {showPopup && (
                <div className='popup'>
                    <div className="form">
                        <form action="#">
                            <div className="formheader">
                                <div className="title">
                                    <h2>Dados do cliente</h2>
                                </div>
                            </div>

                            <div className="inputgroup">
                                <div className="inputbox">
                                    <label htmlFor="cnpj">CNPJ</label>
                                    <input id="cnpj" type="text" name="cnpj" placeholder="Digite o CNPJ" required />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="endereco">Endereco</label>
                                    <input id="endereco" type="text" name="endereco" placeholder="Digite o endereço" required />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="nomedaempresa">Nome da Empresa</label>
                                    <input id="nomedaempresa" type="text" name="nomedaempresa" placeholder="Digite o nome da empresa" required />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="email" name="email" placeholder="Digite o e-mail" required />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="numero">Celular</label>
                                    <input id="numero" type="tel" name="numero" placeholder="(xx) xxxx-xxxx" required />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="nomecontato">Nome do contato</label>
                                    <input id="nomecontato" type="text" name="nomecontato" placeholder="Digite o nome" required />
                                </div>

                            </div>

                            <div className="cnpjinputs">
                                <div className="cnpjtitle">
                                    <h6>Tipo de CNPJ</h6>
                                </div>

                                <div className="cnpjgroup">
                                    <div className="cnpjinput">
                                        <input id="slu" type="radio" name="cnpj" />
                                        <label htmlFor="slu">SLU</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input id="ei" type="radio" name="cnpj" />
                                        <label htmlFor="ei">EI</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input id="ltda" type="radio" name="cnpj" />
                                        <label htmlFor="ltda">Ltda</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input id="mei" type="radio" name="cnpj" />
                                        <label htmlFor="mei">MEI</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input id="me" type="radio" name="cnpj" />
                                        <label htmlFor="me">ME</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input id="sa" type="radio" name="cnpj" />
                                        <label htmlFor="sa">SA</label>
                                    </div>
                                </div>
                            </div>
                            <div className='botoes'>
                                <div className="cancellbutton">
                                    <button onClick={() => setShowPopup(false)}>Cancelar</button>
                                </div>
                                <div className="continuebutton">
                                    <button type='submit'>Adicionar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Cliente;
