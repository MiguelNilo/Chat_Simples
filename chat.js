document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("envioMensagem");
    const sendBtn = document.getElementById("enviarBotao");
    const messagesContainer = document.querySelector(".messages");

    function enviarMensagem() {
        const texto = input.value.trim();
        if (texto === "") return;

        // Cria a nova mensagem
        const novaMensagem = document.createElement("div");
        novaMensagem.classList.add("message", "sent");

        const paragrafo = document.createElement("p");
        paragrafo.textContent = texto;

        novaMensagem.appendChild(paragrafo);
        messagesContainer.appendChild(novaMensagem);

        // Rola para a última mensagem
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Limpa o campo de entrada
        input.value = "";
    }

    // Evento de clique no botão
    sendBtn.addEventListener("click", enviarMensagem);

    // Evento de pressionar Enter no input
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            enviarMensagem();
        }
    });
});
