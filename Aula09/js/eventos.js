document.getElementById('numero').addEventListener('keyup', function (){
    let numero = document.getElementById('numero').value;

    document.getElementById('card_number').innerHTML = numero;
});

document.getElementById('nome').addEventListener('keyup', function (){
    let nome = document.getElementById('nome').value;

    document.getElementById('card_name').innerHTML = nome;
});

document.querySelectorAll('[data-action="date"]').forEach(function (element){
    element.addEventListener('change', function (){
        let mes = document.getElementById('mes').value;
        let ano = document.getElementById('ano').value;

        document.getElementById('card_date').innerHTML = mes+"/"+ano;

    });
});

document.getElementById('codigo').addEventListener('focus', function (){
   document.getElementById('lado-esquerdo').style.transform = 'rotatey(180deg)';
});

document.getElementById('codigo').addEventListener('blur', function (){
    document.getElementById('lado-esquerdo').style.transform = 'rotatey(0deg)';
});

