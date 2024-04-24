import React, { useState } from 'react';
import Pessoa from '../../assets/people.png';
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import '../../styles/add.css'

const Cliente = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomeContato, setNomeContato] = useState('');
    const [tipoCnpj, setTipoCnpj] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [uf, setUf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');

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
                    setLogradouro(data.setLogradouro);
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


    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode fazer o que precisar com os dados do formulário, como enviar para o servidor
        // Por exemplo, você pode enviar uma requisição POST com os dados do formulário para adicionar o cliente ao sistema
        console.log('Dados do formulário:', {
            cnpj,
            razaoSocial,
            nomeFantasia,
            endereco,
            nomeContato,
            tipoCnpj,
            municipio,
            uf,
            telefone,
            bairro,
            logradouro
        });
        // Resetar os campos após o envio, se necessário
        setCnpj('');
        setRazaoSocial('');
        setNomeFantasia('');
        setEndereco('');
        setNomeContato('');
        setTipoCnpj('');
        setMunicipio('');
        setUf('');
        setTelefone('');
        setBairro('');
        setLogradouro('');
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
                                    <label htmlFor="nomecontato">Nome do Contato</label>
                                    <input
                                        id="nomecontato"
                                        type="text"
                                        name="nomecontato"
                                        placeholder="Digite o nome do contato"
                                        required
                                        value={nomeContato}
                                        onChange={(e) => setNomeContato(e.target.value)}
                                    />
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
