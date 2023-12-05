const calcularImc = () => {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== '' && peso !== '' && altura !== '') {
        const imc = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 25) {
            classificacao = 'Peso ideal';
        } else if (imc < 30) {
            classificacao = 'Levemente acima do peso';
        } else if (imc < 35) {
            classificacao = 'Obesidade grau 1';
        } else if (imc < 40) {
            classificacao = 'Obesidade grau 2';
        } else {
            classificacao = 'Obesidade grau 3, cuidado!';
        }

        resultado.textContent = `${nome}, seu IMC é ${imc} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos';
    }
    limparCampos();
};

function limparCampos() {
    document.getElementById("nome").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("peso").value = '';
}

const mascaraAltura = (value, pattern) => {
    let i = 0;
    let v = value.toString();
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
};

const aplicar = (value) => {
    const formatado = mascaraAltura(value, '#.##');
    document.getElementById('altura').value = formatado;
}
