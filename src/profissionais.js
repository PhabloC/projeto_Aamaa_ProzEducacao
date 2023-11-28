//Variaveis name
let inputNamePessoa = document.getElementById("iNamePessoa");
let inputNameProfissional = document.getElementById("iNameProfissional");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelperPessoa = document.getElementById("nameHelperPessoa");
let nameHelperProfissional = document.getElementById("nameHelperProfissional");

//variaveis email
let inputEmailPessoa = document.getElementById("iEmailPessoa");
let inputEmailProfissional = document.getElementById("iEmailProfissional");
let emailLabel = document.querySelector('label[for="email"]');
let emaillHelperPessoa = document.getElementById("emailHelperPessoa");
let emaillHelperProfissional = document.getElementById("emailHelperProfissional");

//variaveis Submit/inputs para button
let btnSubmit = document.querySelector('button[type="submit"]');
let inputsCorretos = {
    name: true,
    email: true
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
function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");    
}
function estilizarInputIncorreto(input, helper){
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");    
}

//---------- validaçao nome ----------//


mostrarPopup(inputNamePessoa, nameLabel)

//Validar valor do input name
inputNamePessoa.addEventListener("blur", (e)=>{
    let valor = e.target.value
    if(valor.length < 6){
        //valor incorreto
       estilizarInputIncorreto(inputNamePessoa, nameHelperPessoa)  
       inputsCorretos.name = false   
    }else{
        //valor correto
       estilizarInputCorreto(inputNamePessoa, nameHelperPessoa)
       inputsCorretos.name = true
    }
});
mostrarPopup(inputNameProfissional, nameLabel)

//Validar valor do input name
inputNameProfissional.addEventListener("blur", (e)=>{
    let valor = e.target.value
    if(valor.length < 6){
        //valor incorreto
       estilizarInputIncorreto(inputNameProfissional, nameHelperProfissional)  
       inputsCorretos.name = false   
    }else{
        //valor correto
       estilizarInputCorreto(inputNameProfissional, nameHelperProfissional)
       inputsCorretos.name = true
    }
});


// ---------Validação de e-mail --------- //



mostrarPopup(inputEmailPessoa, emailLabel)

inputEmailPessoa.addEventListener("blur", (e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        //Email valido
        estilizarInputCorreto(inputEmailPessoa, emailHelperPessoa)
        inputsCorretos.email = true
    }else{
        //Email incorreto
        estilizarInputIncorreto(inputEmailPessoa, emaillHelperPessoa)
        inputsCorretos.email = false
    }
})
mostrarPopup(inputEmailProfissional, emailLabel)

inputEmailProfissional.addEventListener("blur", (e)=>{
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        //Email valido
        estilizarInputCorreto(inputEmailProfissional, emaillHelperProfissional)
        inputsCorretos.email = true
    }else{
        //Email incorreto
        estilizarInputIncorreto(inputEmailProfissional, emaillHelperProfissional)
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