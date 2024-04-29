import Botao from "../Botao/botao";
import styles from '../../styles/menuLogin.module.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../Js/funcoes";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Menulogin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate(); 

    function handleSignIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then(() => navigate('/Painel'))
            .catch((error) => {
                console.error(error);
            });
    }

    if (loading) {
        return <p>Caregando...</p>;
    }

    if (user) {
        console.log(user);
    }

    return(
        <div className={styles.container}>
            <div>
                <h2>Olá Novamente!</h2>
                <p>Seja bem vindo</p>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <label for="floatingPassword">Senha</label>
            </div>
            <Botao nome="Login" onClick={handleSignIn}/>
        </div>
    );
}

export default Menulogin;