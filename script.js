function calcular() {

    const quantidade =
        parseInt(
            document.getElementById("animais").value
        );

    const resultado =
        document.getElementById("resultado");

    if (!quantidade || quantidade < 1) {

        resultado.innerHTML =
        "Digite uma quantidade válida.";

        resultado.style.color = "red";

        return;
    }

    const economia = quantidade * 15;

    resultado.style.color = "#2e7d32";

    resultado.innerHTML =
        `Economia estimada: R$ ${economia.toFixed(2)}
        por mês para ${quantidade} animais.`;
}
