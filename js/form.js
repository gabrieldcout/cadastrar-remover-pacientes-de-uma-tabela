var botaoClicar = document.querySelector("#adicionar-paciente")
botaoClicar.addEventListener("click", function(event){
    event.preventDefault()
    console.log("clicou!")
    

    var dadosForm = document.querySelector("#form-adiciona")
    var paciente = obtemDadosDoFormulario(dadosForm)

    var erros = validaPaciente(paciente)
    if(erros.length > 0){
        exibeMsgDeErro(erros)


        return
    }

    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("table")
    tabela.appendChild(pacienteTr)

    
    var campoErro = document.querySelector("#erros-ul")
    campoErro.innerHTML= ""
    dadosForm.reset()
})
function obtemDadosDoFormulario(dadosForm){
    var paciente = {
        nome: dadosForm.nome.value,
        peso: dadosForm.peso.value,
        altura: dadosForm.altura.value,
        gordura: dadosForm.gordura.value,
        imc: calculaImc(dadosForm.peso.value, dadosForm.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){
    var erros = []
    if(!validaPeso(paciente.peso)) erros.push("Peso inválido!")
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida!")
    if(paciente.nome.length == 0) erros.push("O campo 'nome' não pode ficar vazio!")
    if(paciente.gordura.length==0) erros.push("O campo 'gordura' não pode ficar vazio!")

    return erros
}
function exibeMsgDeErro(erros){
    var ul = document.querySelector("#erros-ul")
    ul.innerHTML = ""
    for(var i = 0; i < erros.length; i++){
        var erro = erros[i]
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    }
}