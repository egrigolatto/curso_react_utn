'use strict'

// variables
const input1 = document.getElementById('valor1');
const input2 = document.getElementById('valor2');
const btnSuma = document.getElementById('suma');
const btnResta = document.getElementById('resta');
const btnMult = document.getElementById('mult');
const btnDiv = document.getElementById('div');
const resultado = document.getElementById('resultado');
const reset = document.getElementById('reset');


const sumar = () => {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.innerHTML = 'Ingrese valores numericos'
  } else {
    resultado.innerHTML = `${valor1} + ${valor2} = ${valor1 + valor2}`;
    resultado.style.display = 'flex'
  }
  reset.style.display = 'block';
}

const resta = () => {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.innerHTML = "Ingrese valores numericos";
  } else {
    resultado.innerHTML = `${valor1} - ${valor2} = ${valor1 - valor2}`;
  }
  reset.style.display = "block";
};

const multiplicacion = () => {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.innerHTML = "Ingrese valores numericos en los campos";
  } else {
    resultado.innerHTML = `${valor1} * ${valor2} = ${valor1 * valor2}`;
  }
  reset.style.display = "block";
};

const division = () => {
  const valor1 = parseFloat(input1.value);
  const valor2 = parseFloat(input2.value);
  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.innerHTML = "Ingrese valores numéricos";
  } else if (valor2 === 0) {
    resultado.innerHTML = "No se puede dividir por cero";
  } else {
    resultado.innerHTML = `${valor1} / ${valor2} = ${valor1 / valor2}`;
  }
  reset.style.display = "block";
};


btnSuma.addEventListener('click', sumar);
btnResta.addEventListener("click", resta);
btnMult.addEventListener("click", multiplicacion);
btnDiv.addEventListener("click", division);

reset.addEventListener('click', () => {
  input1.value = ""; 
  input2.value = ""; 
  resultado.innerHTML = "";
  reset.style.display = "none";
})