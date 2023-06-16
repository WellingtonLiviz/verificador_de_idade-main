function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano){
    alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >=0 && idade < 10) { //Criança
            img.setAttribute('src','bebeH2.jpg')
        }else if (idade <21) { //Jovem
            img.setAttribute('src','jovemH.jpg')
        }else if (idade <50) { //Adulto
            img.setAttribute('src','homem.jpg')
        }else { //idoso
            img.setAttribute('src','idosoH.jpg')
        }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade < 10) { //Criança
            img.setAttribute('src','bebeM.jpg')
        }else if (idade <21) { //Jovem
            img.setAttribute('src','jovemM.jpg')
        }else if (idade <50) { //Adulto
            img.setAttribute('src','mulher.jpg')
        }else { //idosa
            img.setAttribute('src','idosoM.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}
    //Garantir que o cpf tenha 11 digitos
    function validarCPF() {
        const cpfFormatado = document.getElementById('cpf').value;
        const cpf = limpaFormatacao(cpfFormatado);
            if (cpf.length !== 11) {
                alert('O CPF informado deve conter 11 dígitos.', 'red');
                return false;
            }
            if (verificarDigitosRepetidos(cpf)){
                mostrarResultado('CPF não pode conter repetição de digitos.', 'red');
                return false;
            }
        const digito1 = calcularDigitoVerificador(cpf, 1);
        const digito2 = calcularDigitoVerificador(cpf, 2);
            if (digito1 && digito2) {
                mostrarResultado(`CPF Válido - ${cpfFormatado}`, 'green');} 
                    else {
                 mostrarResultado(`CPF Inválido - ${cpfFormatado}`, 'red');
                    }
                }
            
    
    //Mostrar o resultado
    function mostrarResultado(text, color) {
        const span = document.getElementById('result');
            span.innerHTML = text;
            span.style.color = color;
    }

    //Validação para impedir numeros unicos no cpf
    function verificarDigitosRepetidos(cpf) {
        return cpf.split('').every((d) => d === cpf[0]);
    }
    //Verificação de cada digito do cpf
    function calcularDigitoVerificador(cpf, posicao) {
        const sequencia = cpf.slice(0, 8 + posicao).split('');
        let soma = 0;
        let multiplicador = 9 + posicao;
            for (const numero of sequencia) {
                soma += multiplicador * Number(numero);
                multiplicador--;
            }
        const restoDivisao = (soma * 10) % 11;
        const digito = cpf.slice(8 + posicao, 9 + posicao);
            return restoDivisao == digito;
    }

    $(document).ready (function() {
        $('#cpf').inputmask('999.999.999-99');
    });

    function limpaFormatacao(cpf) {
        cpf = cpf.replace(/\D/g, '');
        return cpf;
    }


