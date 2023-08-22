const img = document.querySelector("img");
const botoes = documen.querySelectorAll("button");
for(const botao of botoes){
    botao.addEventListener("click", () => {
        img.setAttribute("src", `./img/${botao.id}.png`);
});
}
