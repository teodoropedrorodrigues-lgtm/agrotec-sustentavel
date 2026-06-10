
function mostrarMensagem() {

    const tecnologias = [
        "🚁 Drones monitoram plantações e reduzem desperdícios.",
        "💧 Irrigação inteligente economiza água.",
        "🛰️ Sensores ajudam no controle do solo.",
        "🌱 Agricultura de precisão aumenta a produtividade."
    ];

    const sorteio =
        tecnologias[Math.floor(Math.random() * tecnologias.length)];

    document.getElementById("resultado").innerHTML = sorteio;
}

function respostaCorreta() {
    document.getElementById("quizResultado").innerHTML =
    "✅ Correto! O plantio direto ajuda a conservar o solo.";
}

function respostaErrada() {
    document.getElementById("quizResultado").innerHTML =
    "❌ Incorreto! O desmatamento prejudica o meio ambiente.";
}
