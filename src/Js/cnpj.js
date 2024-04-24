document.getElementById('pesquisar').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Aqui recuperamos o cnpj preenchido do campo e usamos uma expressão regular para limpar da string tudo aquilo que for diferente de números
  var cnpj = document.getElementById('cnpj').value.replace(/[^0-9]/g, '');

  // Fazemos uma verificação simples do cnpj confirmando se ele tem 14 caracteres
  if (cnpj.length === 14) {

    // Aqui rodamos o ajax para a url da API concatenando o número do CNPJ na url
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.receitaws.com.br/v1/cnpj/' + cnpj, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {

        // Aqui recuperamos o json retornado
        var response = JSON.parse(xhr.responseText);

        // Na documentação desta API tem esse campo status que retorna "OK" caso a consulta tenha sido efetuada com sucesso
        if (response.status === 'OK') {

          // Agora preenchemos os campos com os valores retornados
          document.getElementById('razao').value = response.nome;
          document.getElementById('nome').value = response.fantasia;
          document.getElementById('logradouro').value = response.logradouro;

          // Aqui exibimos uma mensagem caso tenha ocorrido algum erro
        } else {
          alert(response.message); // Neste caso estamos imprimindo a mensagem que a própria API retorna
        }
      }
    };
    xhr.send();

    // Tratativa para caso o CNPJ não tenha 14 caracteres
  } else {
    alert('CNPJ inválido');
  }
});
