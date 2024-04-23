function Botao({nome, onClick}) {
    return(
        <button type="button" class="btn btn-dark" onClick={onClick}>{nome}</button>
    );
}

export default Botao;