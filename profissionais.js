let inputNome = document.getElementById("iNome");
let nameLabel = document.querySelector('label[for="name"]');
let inputEmail = document.getElementById("iEmail");
let inputNumero = document.getElementById("iNumero");
let formulario = document.querySelector("form");

//Mostrar o popup de campo obrigatório
inputNome.addEventListener("focus", ()=>{
    nameLabel.classList.add("requiredPopup")
});

//Ocultar popup de campo obrigatório
inputNome.addEventListener("blur", ()=>{
    nameLabel.classList.remove("requiredPopup")
});

//Validar valor do input
inputNome.addEventListener("change", (e)=>{
    let valor = e.target.value
    if(valor.lenght < 6){
        //valor incorreto
        nameInput.classList.add("error")
    }else{
        //valor correto
        nameInput.classList.add("correct")
    }
});

