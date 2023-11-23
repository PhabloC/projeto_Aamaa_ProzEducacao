let inputName = document.getElementById("iName");
let nameLabel = document.querySelector('label[for="name"]');
let nameHelper = document.getElementById("nameHelper")

let inputNumero = document.getElementById("iNumero");
let formulario = document.querySelector("form");

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
mostrarPopup(inputName, nameLabel)

//Validar valor do input
inputName.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.lenght < 6){
        //valor incorreto
        inputName.classList.remove("correct");
        inputName.classList.add("error");        
        nameHelper.classList.add("visible");       
    }else{
        //valor correto
        inputName.classList.remove("error");
        inputName.classList.add("correct");
        nameHelper.classList.remove("visible");
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
        inputEmail.classList.remove("error");
        inputEmail.classList.add("correct");
        emaillHelper.classList.remove("visible");
    }else{
        //Email incorreto
        inputEmail.classList.remove("correct");
        inputEmail.classList.add("error");        
        emaillHelper.classList.add("visible");
    }
})