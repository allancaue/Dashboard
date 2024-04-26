import React, { useState } from 'react';
import Pessoa from '../../assets/people.png';
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import '../../styles/add.css'
import { firestore } from '../../Js/funcoes'

const Cliente = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipoCnpj, setTipoCnpj] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [uf, setUf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [bairro, setBairro] = useState('');

    const handlePesquisarClick = async () => {
        if (cnpj.length === 14) {
            try {
                const response = await fetch(`http://localhost:3001/api/cnpj/${cnpj}`);
                const data = await response.json();

                if (data.status === 'OK') {
                    setRazaoSocial(data.nome);
                    setNomeFantasia(data.fantasia);
                    setMunicipio(data.municipio);
                    setUf(data.uf);
                    setTelefone(data.tel);
                    setBairro(data.bairro);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                alert('Erro ao buscar dados');
            }
        } else {
            alert('CNPJ inválido');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const db = firestore(); // Acessando a instância do Firestore
            await db.collection('clientes').add({
                cnpj,
                razaoSocial,
                nomeFantasia,
                endereco,
                tipoCnpj,
                municipio,
                uf,
                telefone,
                bairro
            });
            // Resetar os campos após o envio, se necessário
            setCnpj('');
            setRazaoSocial('');
            setNomeFantasia('');
            setEndereco('');
            setTipoCnpj('');
            setMunicipio('');
            setUf('');
            setTelefone('');
            setBairro('');
        } catch (error) {
            console.error('Erro ao adicionar cliente: ', error);
            alert('Erro ao adicionar cliente');
        }
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="formheader">
                                <div className="title">
                                    <h2>Dados do cliente</h2>
                                </div>
                                <IoMdClose onClick={() => setShowPopup(false)} />
                            </div>

                            <div className="inputgroup">
                                <div className="inputbox">
                                    <label htmlFor="cnpj">CNPJ</label>
                                    <input
                                        id="cnpj"
                                        type="text"
                                        name="cnpj"
                                        placeholder="Digite o CNPJ"
                                        required
                                        value={cnpj}
                                        onChange={(e) => setCnpj(e.target.value)}
                                    />
                                    <button
                                        id="pesquisar"
                                        type="button"
                                        name="pesquisar"
                                        onClick={handlePesquisarClick}
                                    >
                                        Pesquisar
                                    </button>
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="razao">Razão Social</label>
                                    <input
                                        id="razao"
                                        type="text"
                                        name="razao"
                                        placeholder="Digite a razão social"
                                        required
                                        value={razaoSocial}
                                        onChange={(e) => setRazaoSocial(e.target.value)}
                                    />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="nome">Nome Fantasia</label>
                                    <input
                                        id="nome"
                                        type="text"
                                        name="nome"
                                        placeholder="Digite o nome fantasia"
                                        required
                                        value={nomeFantasia}
                                        onChange={(e) => setNomeFantasia(e.target.value)}
                                    />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="endereco">Endereço</label>
                                    <input
                                        id="endereco"
                                        type="text"
                                        name="endereco"
                                        placeholder="Digite o endereço"
                                        required
                                        value={endereco}
                                        onChange={(e) => setEndereco(e.target.value)}
                                    />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="bairro">Bairro</label>
                                    <input
                                        id="bairro"
                                        type="text"
                                        name="bairro"
                                        placeholder="Digite o bairro"
                                        required
                                        value={bairro}
                                        onChange={(e) => setBairro(e.target.value)}
                                    />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="endereco">Cidade</label>
                                    <input
                                        id="municipio"
                                        type="text"
                                        name="municipio"
                                        placeholder="Digite a cidade"
                                        required
                                        value={municipio}
                                        onChange={(e) => setMunicipio(e.target.value)}
                                    />
                                </div>

                                <div className="inputbox">
                                    <label htmlFor="endereco">Estado</label>
                                    <input
                                        id="uf"
                                        type="text"
                                        name="uf"
                                        placeholder="Digite o estado"
                                        required
                                        value={uf}
                                        onChange={(e) => setUf(e.target.value)}
                                    />
                                </div>



                                <div className="inputbox">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input
                                        id="telefone"
                                        type="number"
                                        name="telefone"
                                        placeholder="Digite o telefone"
                                        required
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />
                                </div>


                            </div>
                            <div className="cnpjinputs">
                                <div className="cnpjtitle">
                                    <h6>Tipo de CNPJ</h6>
                                </div>

                                <div className="cnpjgroup">
                                    <div className="cnpjinput">
                                        <input
                                            id="slu"
                                            type="radio"
                                            name="tipoCnpj"
                                            value="SLU"
                                            checked={tipoCnpj === 'SLU'}
                                            onChange={(e) => setTipoCnpj(e.target.value)}
                                        />
                                        <label htmlFor="slu">SLU</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input
                                            id="ei"
                                            type="radio"
                                            name="tipoCnpj"
                                            value="EI"
                                            checked={tipoCnpj === 'EI'}
                                            onChange={(e) => setTipoCnpj(e.target.value)}
                                        />
                                        <label htmlFor="ei">EI</label>
                                    </div>

                                    <div className="cnpjinput">
                                        <input
                                            id="mei"
                                            type="radio"
                                            name="tipoCnpj"
                                            value="MEI"
                                            checked={tipoCnpj === 'MEI'}
                                            onChange={(e) => setTipoCnpj(e.target.value)}
                                        />
                                        <label htmlFor="mei">MEI</label>
                                    </div>
                                </div>
                            </div>
                            <div className='botoes'>
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
