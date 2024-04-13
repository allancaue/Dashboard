import Botao from "../../components/Botao/botao";
import styles from '../../styles/cadastro.module.css';
import Detalhe from "../../assets/Detalhe.svg"
import MenuCadastro from "../../components/Cadastro/menuCadastro";
import {useNavigate} from "react-router-dom"

function Cadastro() {

    const navigete = useNavigate();

    const handleCadastroClick = () => {
        navigete('/');
    }

    return(
        <div className={styles.container}>
            <div className={styles.blocoInfo}>
                <div className={styles.imfo}>
                    <div>
                        <h1>Já tem uma conta?</h1>
                        <p>Entre aqui!</p>
                        <Botao nome = "Login" onClick={handleCadastroClick}/>
                    </div>
                </div>
                <div className={styles.imagemDetalhe}>
                    <img src={Detalhe} />
                </div>
            </div>
            <div className={styles.blocoCadastro}>
                <MenuCadastro/>
            </div>
        </div>
    );
}

export default Cadastro;