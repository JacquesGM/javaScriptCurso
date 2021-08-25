const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const urlEstados = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
const urlCidades = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;

fetch (URL_REGIOES)
  .then(response => response.json())
  .then(regioes => {
    regioes.map(cadaRegiao => {
      $('#regiao').append(`
        <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
      `);
    });
  });

$('#regiao').change(() => {
  $('#estado').html('<option selected> -- Selecione -- </option>');

  fetch(urlEstados($('#regiao').val()))
    .then(response => response.json())
    .then(estados => {
      estados.map(cadaEstado => {
        $('#estado').append(`
          <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
        `);
      });
    });
});

$('#estado').change(() => {
  $('#cidade').html('<option selected> -- Selecione -- </option>');

  $('#form').addClass('d-none');
  $('#loading').removeClass('d-none');

  fetch(urlCidades($('#estado').val()))
    .then(response => response.json())
    .then(cidades => {
      $('#form').removeClass('d-none');
      $('#loading').addClass('d-none');

      cidades.map(cadaCidade => {
        $('#cidade').append(`
          <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
        `);
      });
    });
});
