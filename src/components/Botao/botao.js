function Botao({nome, onClick}) {
    return(
        <button type="button" class="btn btn-primary btn-lg" onClick={onClick}>{nome}</button>
    );
}

export default Botao;