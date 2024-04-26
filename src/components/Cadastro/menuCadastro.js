import styles from "../../styles/menuCadastro.module.css";
import Botao from "../Botao/botao";
import { auth, firestore} from "../../Js/funcoes";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { collection, addDoc } from "firebase/firestore"; 

function MenuCadastro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf, setCPF] = useState('');
    const [sexo, setSexo] = useState('');

    const [
        CreateUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    

    async function handleSignUp(e) {
        e.preventDefault();
        CreateUserWithEmailAndPassword(email, password);
        const docRef = await addDoc(collection(firestore, "users"), {
            email: {email},
            username: {username},
            cpf: {cpf},
            sexo: {sexo}
          });
    }

    if (loading) {
        return <p>Caregando...</p>;
    }

    if (user) {
        console.log(user);
    }

    if (error) {
        console.log("Erro");
    }

    return (
        <div className={styles.container}>
            <div>
                <h2>Olá!</h2>
                <p>Seja bem-vindo</p>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="username">Nome de usuario</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password">Senha</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="cpf" placeholder="CPF" value={cpf} onChange={(e) => setCPF(e.target.value)} />
                <label htmlFor="cpf">CPF</label>
            </div>
            <select class="form-select form-select-sm mb-3" aria-label="Small select example" onChange={(e) => setSexo(e.target.value)}>
                <option selected>Genero</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="O">Outro</option>
            </select>
            <Botao nome="Cadastrar" onClick={handleSignUp} />
        </div>
    );
}

export default MenuCadastro;
