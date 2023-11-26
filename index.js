document.addEventListener("DOMContentLoaded", function () {
  const donationButton = document.querySelector(".caixa-principal2 button");

  donationButton.addEventListener("click", function () {
    // window.location.href = "pagina-de-doacao.html";
    alert("Redirecionando para a página de doação...");
  });
});

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
