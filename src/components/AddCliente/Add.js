import React from 'react';
import '../../styles/add.css';
import { useState } from 'react';

const Add = () => {
    const [showPopupState, setShowPopup] = useState(false);

    return (
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
                            <label htmlFor="lastname">CNPJ</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
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
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
                        </div>


                        <div className="inputbox">
                            <label htmlFor="confirmPassword">Confirme sua Senha</label>
                            <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite sua senha novamente" required />
                        </div>

                    </div>

                    <div className="cnpjinputs">
                        <div className="cnpjtitle">
                            <h6>Tipo de CNPJ</h6>
                        </div>

                        <div className="cnpjgroup">
                            <div className="cnpjinput">
                                <input id="female" type="radio" name="cnpj" />
                                <label htmlFor="female">SLU</label>
                            </div>

                            <div className="cnpjinput">
                                <input id="male" type="radio" name="cnpj" />
                                <label htmlFor="male">EI</label>
                            </div>

                            <div className="cnpjinput">
                                <input id="others" type="radio" name="cnpj" />
                                <label htmlFor="others">Ltda</label>
                            </div>

                            <div className="cnpjinput">
                                <input id="none" type="radio" name="cnpj" />
                                <label htmlFor="none">MEI</label>
                            </div>
                        </div>
                    </div>
                    <div className='botoes'>
                        <div className="cancellbutton">
                        <button onClick={() => { setShowPopup(false); }}>Cancelar</button>
                        </div>
                        <div className="continuebutton">
                            <button type='submit'>Adicionar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Add;