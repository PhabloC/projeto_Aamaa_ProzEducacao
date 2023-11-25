document.addEventListener("DOMContentLoaded", function () {
  const donationButton = document.querySelector(".caixa-principal2 button");

  donationButton.addEventListener("click", function () {
    // window.location.href = "pagina-de-doacao.html";
    alert("Redirecionando para a página de doação...");
  });
});

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/icon-menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/x.svg";
  }
  let logoBranco = document.querySelector(".logo-branco");
  logoBranco.style.width = "50px"; // Defina o tamanho desejado

  // Adicionar código para diminuir o tamanho do botão e remover o gradiente
  let mobileMenuIconBtn = document.querySelector(".mobile-menu-icon button");
  mobileMenuIconBtn.style.fontSize = "10px"; // Ajuste o tamanho da fonte conforme necessário
  mobileMenuIconBtn.style.background = "transparent"; // Remove o fundo gradiente
}
