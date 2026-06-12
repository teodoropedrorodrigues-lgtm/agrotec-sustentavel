function calcular() {
    const campo = document.getElementById("animais");
    const resultado = document.getElementById("resultado");

    const animais = parseInt(campo.value);

    if (!animais || animais < 1) {
        resultado.innerHTML =
            "<span style='color:red'>Digite uma quantidade válida.</span>";
        return;
    }

    const economia = animais * 15;

    resultado.innerHTML = `
        <p>
            Para <strong>${animais}</strong> animais,
            a economia estimada é de
            <strong>R$ ${economia.toFixed(2)}</strong> por mês.
        </p>
    `;
}
