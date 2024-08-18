function calcularIMC(peso, altura) {
    // Validação dos valores de peso e altura
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      return 'Por favor, insira valores válidos.';
    }
  
    // Cálculo do IMC
    const imc = peso / (altura * altura);
  
    // Classificação com base no IMC
    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Normal';
    } else if (imc >= 24.9 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }
  
    return `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
  }
  
  // Exemplo de uso:
  const peso = 70;   // kg
  const altura = 1.75; // metros
  
  console.log(calcularIMC(peso, altura)); // Saída: Seu IMC é 22.86 - Normal
  