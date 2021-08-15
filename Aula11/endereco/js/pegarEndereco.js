let endereco = {
    logradouro: 'Rua Barca Velha',
    cidade: 'Fortaleza',
    uf: 'CE',
    bairro: 'Jangurussu',
};

INPUT_CEP.getElementById('cep').addEventListener('blur', () => {
    if(INPUT_CEP.value.length !== 8){
        return;
    }
    alert('buscando');
});