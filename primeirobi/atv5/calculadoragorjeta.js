function CalcularGorjeta() {
    
  const valorConta = 150.0;
  let percentualGorjeta = 15;

  let resultado = valorConta * (percentualGorjeta / 100);

  
  console.log(`Valor da conta: R$ ${valorConta.toFixed(2)}`);
  console.log(`Percentual da gorjeta: ${percentualGorjeta}%`);

  if (!isNaN(valorConta) && !isNaN(percentualGorjeta)) {
    console.log(`Valor da gorjeta: R$ ${percentualGorjeta.toFixed(2)}`);
    console.log(`Valor total a ser pago: R$ ${resultado.toFixed(2)}`);
  } else {
    console.log("Entrada inválida. Por favor, insira números válidos.");
  }
}

CalcularGorjeta();
