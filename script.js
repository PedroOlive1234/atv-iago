document.getElementById("connectButton").addEventListener("click", function() {
    fetch("http://localhost:3000/connect")
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").innerText = data.message;
        })
        .catch(error => {
            console.error("Erro ao conectar ao servidor:", error);
            document.getElementById("response").innerText = "Erro ao conectar ao servidor.";
        });
});