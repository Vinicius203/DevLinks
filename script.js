function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light, adicionar roger
    img.setAttribute("src", "./assets/img/roger.png")
    img.setAttribute("alt", "Roger Laughing")
  } else {
    // se tiver dark, manter luffy
    img.setAttribute("src", "./assets/img/avatar.png")
    img.setAttribute("alt", "Luffy Gear 5th")
  }
}
