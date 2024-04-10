import Botao from "../Botao/botao";
import styles from './menuLogin.module.css'

function Menulogin(){
    return(
        <div className={styles.contener}>
            <div>
                <h2>Olá Novamente!</h2>
                <p>Seja bem vindo</p>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <Botao nome="Login"/>
        </div>
    );
}

export default Menulogin;