import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { firestore } from '../../Js/funcoes';
import { collection, addDoc, getDocs } from "firebase/firestore";
import '../../styles/add.css';

const Sistemas = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [sistema, setsistema] = useState('');
    const [tipo, setTipo] = useState('');
    const [sistemas, setsistemas] = useState([]);

    useEffect(() => {
        const fetchSistemas = async () => {
            const querySnapshot = await getDocs(collection(firestore, "sistemas"));
            const fetchedSistemas = [];
            querySnapshot.forEach((doc) => {
                fetchedSistemas.push({ id: doc.id, ...doc.data() });
            });
            setsistemas(fetchedSistemas);
        };
        fetchSistemas();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(firestore, "sistemas"), {
                nome: sistema,
                tipo
            });
            setsistema('');
            setTipo('');
            setShowPopup(false);
            setsistemas([...sistemas, { id: docRef.id, nome: sistema, tipo }]);
        } catch (error) {
            console.error('Erro ao adicionar licença: ', error);
            alert('Erro ao adicionar licença');
        }
    };

    const renderSistemas = () => {
        return sistemas.map((sistema) => (
            <tr key={sistema.id}>
                <td>{sistema.nome}</td>
                <td><span className="status completed">{sistema.tipo}</span></td>
            </tr>
        ));
    };

    return (
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Sistemas</h1>
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
                                <th>Sistema</th>
                                <th>Tipo de Licença</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderSistemas()}
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
                                    <h2>Dados do sistema</h2>
                                </div>
                                <IoMdClose onClick={() => setShowPopup(false)} />
                            </div>

                            <div className="inputgroup">
                                <div className="inputbox">
                                    <label htmlFor="sistema">Nome do sistema</label>
                                    <input
                                        id="sistema"
                                        type="text"
                                        name="sistema"
                                        placeholder="Digite nome do sistema "
                                        required
                                        value={sistema}
                                        onChange={(e) => setsistema(e.target.value)}
                                    />
                                </div>
                                <div className="inputbox">
                                    <label htmlFor="tipo">Tipo</label>
                                    <input
                                        id="tipo"
                                        type="text"
                                        name="tipo"
                                        placeholder="Digite o tipo"
                                        required
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
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

export default Sistemas;
