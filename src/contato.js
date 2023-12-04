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
//variavel Email
let inputEmail = document.getElementById("iemail")

//aplicar evento focus

inputEmail.addEventListener("focus", ()=>{
    inputEmail.style.border = "solid 2px #662020"

} )
//Ocultat popup do Email
inputEmail.addEventListener("blur", ()=>{
    inputEmail.style.border = ""
})

 






