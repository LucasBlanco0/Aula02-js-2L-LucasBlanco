document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    var imc = weight / (height * height);
    var situation = '';

    if (imc < 17) situation = 'Muito abaixo do peso';
    else if (imc < 18.5) situation = 'Abaixo do peso';
    else if (imc < 25) situation = 'Peso normal';
    else if (imc < 30) situation = 'Acima do peso';
    else if (imc < 35) situation = 'Obesidade';
    else if (imc < 40) situation = 'Obesidade severa';
    else situation = 'Obesidade mórbida';

    document.getElementById('result').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '. Situação: ' + situation;
});