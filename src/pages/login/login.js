import styles from '../../styles/login.module.css';
import Detalhe from '../../assets/Detalhe.svg'
import Botao from '../../components/Botao/botao';
import Menulogin from '../../components/Login/menuLogin';
import {useNavigate} from "react-router-dom"

function Login() {
    const navigete = useNavigate();

    const handleCadastroClick = () => {
        navigete('/cadastro');
    }

    return(
        <div className={styles.container}>
            <div className={styles.blocoInfo}>
                <div className={styles.info}>
                    <div>
                        <h1>Cadastre-se aqui!</h1>
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