document.getElementById("text-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const text = document.getElementById("text").value; // Obtém o valor do campo de texto

    // Verifica se o campo de texto está vazio
    if (!text.trim()) {
        alert("Por favor, insira um texto para converter."); // Exibe um alerta
        return; // Para a execução da função
    }

    // Exibe o ícone de carregamento
    document.getElementById("loading").classList.remove("hidden");

    let formData = new FormData(this);

    fetch("/convert", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na conversão: " + response.statusText);
        }
        return response.blob();
    })
    .then(blob => {
        // Esconde o ícone de carregamento ao concluir a conversão
        document.getElementById("loading").classList.add("hidden");

        // Cria um link para download do arquivo MP3
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Transcriver.mp3";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    .catch(error => {
        console.error("Erro:", error);
        document.getElementById("loading").classList.add("hidden"); // Esconde o ícone em caso de erro
    });
});

// Limpar a caixa de texto ao clicar no botão
document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("text").value = ""; // Limpa o campo de texto
    document.getElementById("loading").classList.add("hidden"); // Esconde o ícone de carregamento
});
