function ToggleMode() {
    const html = document.documentElement
    const img = document.querySelector("#profile img")
    html.classList.toggle("light")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "assets/avatar-light.png")
        
    } else {
        img.setAttribute("src", "assets/avatar.png")
        img.setAttribute(
          "alt",
          "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
        )
    }
}
