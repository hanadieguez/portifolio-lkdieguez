const btnMenuResponsivo = document.getElementById("btn-menu");

btnMenuResponsivo.addEventListener("click", () => {
  document.querySelector("#nav").classList.toggle("dropdown");
});
