

function calcularSalario() {
    const salarioAnual = parseFloat(document.querySelector("input[name=salario_anual]").value);
    const pisoSalarial = parseFloat(document.querySelector("input[name=piso_salarial]").value);
  
    const salarioMensal = salarioAnual / 12;
  
    if (salarioMensal >= pisoSalarial) {
        document.getElementById("resultado").innerHTML = "O salário mensal é de R$" + salarioMensal.toFixed(2) + " e está de acordo com o piso.";
    } else {
        document.getElementById("resultado").innerHTML = "O salário mensal é de R$" + salarioMensal.toFixed(2) + " e está abaixo do piso.";
    }
}

function copyToClipboard() {
    var texto = document.getElementById("textoParaCopiar");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência: " + texto.value);
}
  