const INPUT_NUMERO = document.getElementById('numero');
const ERRO_NUMERO = document.getElementById('erro-numero');
const INPUT_CPF = document.getElementById('cpf');
const ERRO_CPF = document.getElementById('erro-cpf')

INPUT_NUMERO.addEventListener('keyup', () =>{
    let numero = document.getElementById('numero').value;
    INPUT_NUMERO.classList.remove('is-invalid');
    ERRO_NUMERO.classList.add('d-none');

    if (isNaN(numero.substr(-1, 1))){
        //INPUT_NUMERO.value = numero.replace(/[^0-9]/g, '');
        INPUT_NUMERO.classList.add('is-invalid');
        ERRO_NUMERO.classList.remove('d-none');

    }

    if (INPUT_NUMERO.value === ''){
        INPUT_NUMERO.placeholder = '0000 0000 0000 0000';
    }
});

INPUT_CPF.addEventListener('keyup', () =>{
    let cpf = document.getElementById('cpf').value;
    INPUT_CPF.classList.remove('is-invalid');
    ERRO_CPF.classList.add('d-none');

    if (isNaN(cpf.substr(-1, 1))){
        //INPUT_CPF.value = cpf.replace(/[^0-9]/g, '');
        INPUT_CPF.classList.add('is-invalid');
        ERRO_CPF.classList.remove('d-none');

    }

    if (INPUT_CPF.value === ''){
        INPUT_CPF.placeholder = 'Ex: 123.123.123-12';
    }
});