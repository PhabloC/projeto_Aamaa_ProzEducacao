let inputName = document.getElementById("inome")
let inputLabel = document.querySelector('label[for="nome"]')

//Aplicar o evento focus
inputName.addEventListener("focus", ()=>{
    inputName.style.border = "solid 2px #662020"

})

//ocultar o popup
inputName.addEventListener("blur", ()=>{
    inputName.style.border = ""   
}
)






