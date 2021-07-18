let memoria = 0;
let operacao = false;

function selecionarNumero(numero) {
    if (operacao === true || document.getElementById('visor').innerHTML === '0'){
        document.getElementById('visor').innerHTML = numero;
        document.getElementById('visor').style.color = '#000';
        operacao = false;
        return;
    }
    document.getElementById('visor').innerHTML += numero;
}

function somar (){
    let numero = document.getElementById('visor').innerHTML;

    if(memoria !== 0){
        document.getElementById('visor').innerHTML = parseFloat(numero) + parseFloat(memoria);
    }

    memoria = document.getElementById('visor').innerHTML;
    operacao = true;

    document.getElementById('visor').style.color = '#AAAAAA';
}

function multiplicar (){
    let numero = document.getElementById('visor').innerHTML;

    if(memoria !== 0){
        document.getElementById('visor').innerHTML = parseFloat(numero) * parseFloat(memoria);
    }

    memoria = document.getElementById('visor').innerHTML;
    operacao = true;

    document.getElementById('visor').style.color = '#AAAAAA';
}

function dividir (){
    let numero = document.getElementById('visor').innerHTML;

    if(memoria !== 0){
        document.getElementById('visor').innerHTML = parseFloat(numero) / parseFloat(memoria);
    }

    memoria = document.getElementById('visor').innerHTML;
    operacao = true;

    document.getElementById('visor').style.color = '#AAAAAA';
}

function diminuir (){
    let numero = document.getElementById('visor').innerHTML;

    if(memoria !== 0){
        document.getElementById('visor').innerHTML = parseFloat(numero) - parseFloat(memoria);
    }

    memoria = document.getElementById('visor').innerHTML;
    operacao = true;

    document.getElementById('visor').style.color = '#AAAAAA';
}

function limpar(){
    operacao = false;
    memoria = 0;
    document.getElementById('visor').innerHTML = 0;
    document.getElementById('visor').style.color = '#000';
}
function resultado() {
    if (document.getElementById()) {
        return somar();
        document.getElementById('visor').style.color = '#000';
    } else {
        if ('calc' === diminuir) {
            return diminuir();
            document.getElementById('visor').style.color = '#000';
        } else {
            if ('calc' === multiplicar) {
                return multiplicar();
                document.getElementById('visor').style.color = '#000';
            } else {
                return dividir();
                document.getElementById('visor').style.color = '#000';
                }
            }
        }
    }
}









