document.getElementById('numero').addEventListener('keyup', () =>{

    if (isNaN(document.getElementById('numero').value)){
        alert('Ops!!, Precisa ser número');
    }

});