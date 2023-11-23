//Variaveis name
let inputName = document.getElementsByClassName("inputName");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelper = document.getElementsByClassName("nameHelp");
//variaveis email
let inputEmail = document.getElementsByClassName("inputEmail");
let emailLabel = document.querySelector('label[for="email"]');
let emaillHelper = document.getElementsByClassName("emailHelp");

//variaveis Submit/inputs para button
let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
    name: false,
    email: false
}

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


mostrarPopup(inputName, nameLabel)

//Validar valor do input name
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



mostrarPopup(inputEmail, emailLabel)

inputEmail.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        //Email valido
        estilizarTnputCorreto(inputEmail, emailHelper)
        inputsCorretos.email = true
    }else{
        //Email incorreto
        estilizarTnputIncorreto(inputEmail, emaillHelper)
        inputsCorretos.email = false
    }
})

//---------- evitar envio de formulario ----------//



btnSubmit.addEventListener("click", (e) => {
    if(inputsCorretos.name == false || inputsCorretos.email == false){
        e.preventDefault()
        alert("Os campos obrigatórios precisam ser preenchidos corretamente")
    }else{
        alert("Formulário enviado com sucesso")
    }
});