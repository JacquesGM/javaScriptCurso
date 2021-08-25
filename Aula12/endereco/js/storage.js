function atualizarTabela() {
  let registros = JSON.parse(
    localStorage.getItem('estabelecimentos') || '[]'
  );

  registros.map(cadaEnd => {
    TABELA.innerHTML += `
      <tr>
        <td>${cadaEnd.nome}</td>
        <td>${cadaEnd.cep}</td>
        <td>Alameda dos Anjos</td>
        <td>666</td>
        <td>Missjane</td>
        <td>Fortaleza</td>
        <td>CE</td>
        <td>
          <button class="btn btn-xs btn-warning">Editar</button>
          <button class="btn btn-xs btn-danger">Excluir</button>
        </td>
      </tr>
    `;
  });

  $('#tabela').DataTable();
}

function inserirEndereco() {
  let dados = {
    nome: INPUT_NOME.value,
    cep: INPUT_CEP.value,
    logradouro: INPUT_LOGRADOURO.value,
    numero: INPUT_NUMERO.value,
    bairro: INPUT_BAIRRO.value,
    cidade: INPUT_CIDADE.value,
    uf: INPUT_UF.value,
  };

  let lista = JSON.parse(
    localStorage.getItem('estabelecimentos') || '[]'
  );

  lista.push(dados);

  localStorage.setItem('estabelecimentos', JSON.stringify(lista));
}








//
