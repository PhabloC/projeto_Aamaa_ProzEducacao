
let inputNumero = document.getElementById("iNumero");


function mostrarPopup(input, label){
        //Mostrar o popup de campo obrigatório
    input.addEventListener("focus", ()=>{
        label.classList.add("requiredPopup")
    });

    //Ocultar popup de campo obrigatório
    input.addEventListener("blur", ()=>{
        label.classList.remove("requiredPopup")
    });

}
function estilizarTnputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");    
}
function estilizarTnputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");    
}

//---------- validaçao nome ----------//
let inputName = document.getElementById("iName");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelper = document.getElementById("nameHelper")

mostrarPopup(inputName, nameLabel)

//Validar valor do input
inputName.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.length < 6){
        //valor incorreto
       estilizarTnputIncorreto(inputName, nameHelper)  
       inputsCorretos.name = false   
    }else{
        //valor correto
       estilizarTnputCorreto(inputName, nameHelper)
       inputsCorretos.name = true
    }
});

// ---------Validação de e-mail --------- //

let inputEmail = document.getElementById("iEmail");
let emailLabel = document.querySelector('label[for="email"]');
let emaillHelper = document.getElementById("emailHelper");

mostrarPopup(inputEmail, emailLabel)

inputEmail.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        //Email valido
        estilizarTnputCorreto(inputName, nameHelper)
        inputsCorretos.email = true
    }else{
        //Email incorreto
        estilizarTnputIncorreto(inputName, nameHelper)
        inputsCorretos.email = false
    }
})

//---------- evitar envio de formulario ----------//

let btnSubmit = document.querySelector('button[type="submit]');
let inputsCorretos = {
    name: false,
    email: false
}

btnSubmit.addEventListener("click", () => {
    if(inputsCorretos.name == false ||
        inputsCorretos.email == false){
        e.preventDefault()
        alert("Os campos obrigatórios precisam ser preenchidos corretamente")
    }else{
        alert("Formulário enviado com sucesso")
    }
});