var pacientes = document.querySelectorAll(".paciente")
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

    var pesoTd = paciente.querySelector(".info-peso")
    var peso = pesoTd.textContent

    var alturaTd = paciente.querySelector(".info-altura")
    var altura = alturaTd.textContent

    var imcTd = paciente.querySelector(".info-imc")

    if(!validaPeso(peso)){
        pesoTd.textContent = "Peso inválido!"
        pesoTd.classList.add("paciente-invalido")
    } else if(!validaAltura(altura)){
        alturaTd.textContent = "Altura inválida!"
        alturaTd.classList.add("paciente-invalido")
    } else {
        var imc = calculaImc(peso, altura)
        imcTd.textContent = imc
    }
}

function calculaImc(peso, altura){
    var imc = 0
    imc = peso/(altura*altura)
    return imc.toFixed(2)
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true
    } else{
        return false
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true
    } else{
        return false
    }
}
