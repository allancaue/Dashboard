import React, { useState } from "react";
import Botao from "../Botao/botao";
import styles from '../../styles/menuLogin.module.css';
import createInputField from './inputFactory';
import useAuthStrategy from './useAuthStrategy';

function Menulogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, user, loading, error } = useAuthStrategy();

    function handleSignIn(e) {
        e.preventDefault();
        signIn(email, password);
    }

    if (loading) {
        return <p>Caregando...</p>;
    }

    if (user) {
        console.log(user);
    }

    return (
        <div className={styles.container}>
            <div>
                <h2>Olá Novamente!</h2>
                <p>Seja bem vindo</p>
            </div>
            {createInputField("email", "floatingInput", "name@example.com", "Email", (e) => setEmail(e.target.value))}
            {createInputField("password", "floatingPassword", "Password", "Senha", (e) => setPassword(e.target.value))}
            <Botao nome="Login" onClick={handleSignIn} />
        </div>
    );
}

export default Menulogin;
