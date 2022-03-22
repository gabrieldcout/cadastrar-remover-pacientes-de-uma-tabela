var campoTabela = document.querySelector("table")
campoTabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
})