import styles from '../../styles/login.module.css';
import Logo from '../../assets/1.png'
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
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className={styles.blocoLogin}>
                <Menulogin/>
            </div>
        </div>
    );
}

export default Login;