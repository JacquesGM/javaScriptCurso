const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const urlEstado = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
const urlMunicipio = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;

const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_MUNICIPIO = document.getElementById('municipio');

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(regioes => {
        regioes.map(cadaRegiao => {
            SELECT_REGIAO.innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;
        });
    });

SELECT_REGIAO.addEventListener('change', () => {
    SELECT_ESTADO.innerHTML = '<option selected> -- Selecione -- </option>';

    fetch(urlEstado(SELECT_REGIAO.value))
        .then(response => response.json())
        .then(estados => {
            estados.map(cadaEstado => {
                SELECT_ESTADO.innerHTML += `
                    <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
                `;
            })
        });
});

SELECT_ESTADO.addEventListener('change', () => {
    SELECT_MUNICIPIO.innerHTML = '<option selected> -- Selecione -- </option>';

    fetch(urlMunicipio(SELECT_ESTADO.value))
        .then(response => response.json())
        .then(municipios => {
            municipios.map(cadaMunicipio => {
                SELECT_MUNICIPIO.innerHTML += `
                    <option value="${cadaMunicipio.id}">${cadaMunicipio.nome}</option>
                `;
            })
        });
});




