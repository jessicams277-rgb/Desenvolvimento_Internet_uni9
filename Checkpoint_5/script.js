function obterValores() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}

function exibirResultado(valor) {
    document.getElementById("resultado").textContent =
        "Resultado: " + valor;
}

function somar() {
    const { num1, num2 } = obterValores();
    exibirResultado(num1 + num2);
}

function subtrair() {
    const { num1, num2 } = obterValores();
    exibirResultado(num1 - num2);
}

function multiplicar() {
    const { num1, num2 } = obterValores();
    exibirResultado(num1 * num2);
}

function dividir() {
    const { num1, num2 } = obterValores();

    if (num2 === 0) {
        exibirResultado("Não é possível dividir por zero");
        return;
    }

    exibirResultado(num1 / num2);
}