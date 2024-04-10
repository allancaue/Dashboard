import Botao from "../../components/Botao/botao";
import styles from "./cadastro.module.css"
import Detalhe from "./img/Detalhe.svg"
import MenuCadastro from "../../components/Cadastro/menuCadastro";

function Cadastro() {
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
            <div className={styles.blocoCadastro}>
                <MenuCadastro/>
            </div>
        </div>
    );
}

export default Cadastro;