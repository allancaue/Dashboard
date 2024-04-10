import styles from './login.module.css';
import Detalhe from './img/Detalhe.svg'
import Botao from '../../components/Botao/botao';
import Menulogin from '../../components/Login/menuLogin';
import {useNavigate} from "react-router-dom"

function Login() {
    const navigete = useNavigate();

    const handleCadastroClick = () => {
        navigete('/cadastro');
    }

    return(
        <div className={styles.contener}>
            <div className={styles.blocoImfo}>
                <div className={styles.imfo}>
                    <div>
                        <h1>Cadastro aqui</h1>
                        <p>Caso vc ainda não seja cadastrdo</p>
                        <Botao nome = "Cadastro" onClick={handleCadastroClick} />
                    </div>
                </div>
                <div className={styles.imagemDetalhe}>
                    <img src={Detalhe} />
                </div>
            </div>
            <div className={styles.blocoLogin}>
                <Menulogin/>
            </div>
        </div>
    );
}

export default Login;