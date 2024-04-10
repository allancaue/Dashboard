import styles from './login.module.css';
import Detalhe from './img/Detalhe.svg'
import Botao from '../../components/Botao/botao';
import Menulogin from '../../components/Login/menuLogin';

function Login() {
    return(
        <div className={styles.contener}>
            <div className={styles.blocoImfo}>
                <div className={styles.imfo}>
                    <div>
                        <h1>Titulo Teste</h1>
                        <p>TesteTesteTesteTesteTesteTesteTesteTeste</p>
                        <Botao nome = "Ler Mais" />
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