function calcular(){

    let animais = Number(
        document.getElementById("animais").value
    );

    if(animais <= 0 || isNaN(animais)){
        document.getElementById("resultado").innerHTML =
        "Informe uma quantidade válida.";
        return;
    }

    let economia = animais * 15;

    document.getElementById("resultado").innerHTML =
    "Economia estimada: R$ " +
    economia.toFixed(2) +
    " por mês.";
}
