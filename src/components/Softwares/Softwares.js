import React, { useState, useEffect } from 'react';
import Pessoa from '../../assets/people.png';
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { firestore } from '../../Js/funcoes';
import { collection, addDoc, getDocs } from "firebase/firestore";
import '../../styles/add.css';

const Softwares = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [software, setSoftware] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [date, setData] = useState('');
    const [clientes, setEmpresas] = useState([]);
    const [licencas, setLicencas] = useState([]);
    const [sistemas, setSistemas] = useState([]);


    useEffect(() => {
        const fetchEmpresas = async () => {
            const querySnapshot = await getDocs(collection(firestore, "clientes"));
            const fetchedEmpresas = [];
            querySnapshot.forEach((doc) => {
                fetchedEmpresas.push({ id: doc.id, ...doc.data() });
            });
            setEmpresas(fetchedEmpresas);
        };
        fetchEmpresas();

        const fetchLicencas = async () => {
            const querySnapshot = await getDocs(collection(firestore, "licencas"));
            const fetchedLicencas = [];
            querySnapshot.forEach((doc) => {
                fetchedLicencas.push({ id: doc.id, ...doc.data() });
            });
            setLicencas(fetchedLicencas);
        };
        fetchLicencas();

        const fetchSistemas = async () => {
            const querySnapshot = await getDocs(collection(firestore, "sistemas"));
            const fetchedSistemas = [];
            querySnapshot.forEach((doc) => {
                fetchedSistemas.push({ id: doc.id, ...doc.data() });
            });
            setSistemas(fetchedSistemas);
        };
        fetchSistemas();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firestore, "licencas"), {
                software,
                empresa,
                date
            });
            setSoftware('');
            setEmpresa('');
            setShowPopup(false);
            setLicencas([...licencas, { id: docRef.id, software, empresa }]);
        } catch (error) {
            console.error('Erro ao adicionar licença: ', error);
            alert('Erro ao adicionar licença');
        }
    };

    const renderSoftwareOptions = () => {
        return sistemas.map((sistemas) => (
            <option key={sistemas.id}>{sistemas.nome}</option>
        ));
    };


    const renderEmpresasOptions = () => {
        return clientes.map((clientes) => (
            <option key={clientes.id}>{clientes.razaoSocial}</option>
        ));
    };

    const renderLicencas = () => {
        return licencas.map((licencas) => (
            <tr key={licencas.id}>
                <td> {licencas.empresa} </td>
                <td>{licencas.software}</td>
                <td>{licencas.date}</td>
                <td><span className="status completed">Premium</span></td>
            </tr>
        ));
    };

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Licenças</h1>
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
                        <h3>Lista de clientes licenciados</h3>
                        <CiSearch />
                        <IoFilter />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Software</th>
                                <th>Expiração</th>
                                <th>Tipo de Licença</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderLicencas()}
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
                                    <h2>Dados do Software</h2>
                                </div>
                                <IoMdClose onClick={() => setShowPopup(false)} />
                            </div>

                            <div className="inputgroup">
                                <div className="inputbox">
                                    <label htmlFor="softname">Nome do Software</label>
                                    <select
                                        id="softname"
                                        name="softname"
                                        required
                                        value={software}
                                        onChange={(e) => setSoftware(e.target.value)}
                                    >
                                    <option value="">Selecione um Software</option>
                                        {renderSoftwareOptions()}
                                    </select>
                                </div>
                                <div className="inputbox">
                                    <label htmlFor="nomedaempresa">Nome da Empresa</label>
                                    <select
                                        id="nomedaempresa"
                                        name="nomedaempresa"
                                        required
                                        value={empresa}
                                        onChange={(e) => setEmpresa(e.target.value)}
                                    >
                                        <option value="">Selecione uma empresa</option>
                                        {renderEmpresasOptions()}
                                    </select>
                                </div>
                                <div className="inputbox">
                                    <label htmlFor="date">Expiração</label>
                                    <input
                                        id="date"
                                        type="date"
                                        name="date"
                                        placeholder="Digite a data de expiração"
                                        required
                                        value={date}
                                        onChange={(e) => setData(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='botoes'>
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
