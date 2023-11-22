let inputName = document.getElementById("iName");
let nameLabel = document.querySelector('label[for="name"]');
let inputEmail = document.getElementById("iEmail");
let inputNumero = document.getElementById("iNumero");
let formulario = document.querySelector("form");

//Mostrar o popup de campo obrigatório
inputName.addEventListener("focus", ()=>{
    nameLabel.classList.add("requiredPopup")
});

//Ocultar popup de campo obrigatório
inputName.addEventListener("blur", ()=>{
    nameLabel.classList.remove("requiredPopup")
});

//Validar valor do input
inputName.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.lenght < 6){
        //valor incorreto
        inputName.classList.add("error")
    }else{
        //valor correto
        inputName.classList.add("correct")
    }
});

