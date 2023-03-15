const subtitulos = document.querySelectorAll(".subtitulo");

// LINHAS USADAS DURANTE O DESENVOLVIMENTO APENAS PARA DEBUG
// window.addEventListener("resize", () => {
//   if (window.screen.width <= 415) {
//     subtitulos[0].innerHTML = "EXPERIÊNCIA";
//     subtitulos[1].innerHTML = "FORMAÇÃO";
//   } else {
//     subtitulos[0].innerHTML = "EXPE<br>RIÊN<br>CIA";
//     subtitulos[1].innerHTML = "FORM<br>AÇÃO";
//   }
// });

if (window.screen.width <= 415) {
  subtitulos[0].innerHTML = "EXPERIÊNCIA";
  subtitulos[1].innerHTML = "FORMAÇÃO";
} else {
  subtitulos[0].innerHTML = "EXPE<br>RIÊN<br>CIA";
  subtitulos[1].innerHTML = "FORM<br>AÇÃO";
}
