const botao = document.getElementById("btnMensagem");
const divMensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    botao.style.display = "none";
    divMensagem.style.display = "block";
    divMensagem.textContent = "Bem Vindo! Nunca Desista dos seus sonhos!";
});