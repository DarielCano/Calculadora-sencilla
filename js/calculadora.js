const d = document;
let operando1 = null,
  operando2 = null;
let ope = "";

d.addEventListener("DOMContentLoaded", (e) => {
  const $btnClean = d.querySelector(".borrar");
  const $btn1 = d.querySelector(".uno");
  const $btn2 = d.querySelector(".dos");
  const $btn3 = d.querySelector(".tres");
  const $btn4 = d.querySelector(".cuatro");
  const $btn5 = d.querySelector(".cinco");
  const $btn6 = d.querySelector(".seis");
  const $btn7 = d.querySelector(".siete");
  const $btn8 = d.querySelector(".ocho");
  const $btn9 = d.querySelector(".nueve");
  const $btn0 = d.querySelector(".cero");
  const $btnMenos = d.querySelector(".menos");
  const $btnMas = d.querySelector(".mas");
  const $btnIgual = d.querySelector(".igual");
  const $btnPor = d.querySelector(".por");
  const $btnBack = d.querySelector(".back");
  const $btnPunto = d.querySelector(".punto");

  const $input = d.querySelector("p");

  const accionBoton = (btn) => {
    d.querySelector(btn).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    d.querySelector(btn).style.color = "white";
    const tiempo = setTimeout(() => {
      d.querySelector(btn).style.backgroundColor = "white";
      d.querySelector(btn).style.color = "black";
    }, 200);
  };

  const mostrar = (valor) => {
    $input.textContent += valor;
  };

  const limpiar = () => {
    $input.textContent = " ";
  };

  const operacion = (op) => {
    operando1 = parseFloat($input.textContent);
    ope = op;
    limpiar();
  };

  const imprimir = () => {
    operando2 = parseFloat($input.textContent);

    limpiar();
    switch (ope) {
      case "+":
        $input.textContent = `${operando1 + operando2}`;
        break;
      case "-":
        $input.textContent = `${operando1 - operando2}`;
        break;
      case "/":
        $input.textContent = `${operando1 / operando2}`;
        break;
      case "*":
        $input.textContent = `${operando1 * operando2}`;
        break;

      default:
        limpiar();
    }
  };

  /* calculadora usando teclado */
  d.addEventListener("keydown", (e) => {
    // console.log(e.key);
    switch (e.key) {
      case "1":
        accionBoton(".uno");
        mostrar(e.key);

        break;
      case "2":
        accionBoton(".dos");
        mostrar(e.key);
        break;
      case "3":
        accionBoton(".tres");
        mostrar(e.key);
        break;
      case "4":
        accionBoton(".cuatro");
        mostrar(e.key);
        break;

      case "5":
        accionBoton(".cinco");
        mostrar(e.key);
        break;
      case "6":
        accionBoton(".seis");
        mostrar(e.key);
        break;
      case "7":
        accionBoton(".siete");
        mostrar(e.key);
        break;
      case "8":
        accionBoton(".ocho");
        mostrar(e.key);
        break;
      case "9":
        mostrar(e.key);
        accionBoton(".nueve");
        break;

      case "0":
        accionBoton(".cero");
        mostrar(e.key);
        break;

      case "*":
        accionBoton(".por");
        operacion("*");

        break;
      case "/":
        accionBoton(".back");
        operacion("/");
        break;
      case "-":
        accionBoton(".menos");
        operacion("-");
        break;
      case "+":
        accionBoton(".mas");
        operacion("+");

        break;
      case ".":
        accionBoton(".punto");
        mostrar(e.key);

        break;
      case "=":
        accionBoton(".igual");
        imprimir();

        break;
      case "Enter":
        accionBoton(".igual");
        imprimir();
        break;
      case "Backspace":
        accionBoton(".borrar");
        limpiar();

        break;

      default:
        break;
    }
  });

  /* calculadora usando click */
  $btnClean.addEventListener("click", (e) => {
    limpiar();
  });
  $btn1.addEventListener("click", (e) => {
    mostrar("1");
  });
  $btn2.addEventListener("click", (e) => {
    mostrar("2");
  });
  $btn3.addEventListener("click", (e) => {
    mostrar("3");
  });
  $btn4.addEventListener("click", (e) => {
    mostrar("4");
  });
  $btn5.addEventListener("click", (e) => {
    mostrar("5");
  });
  $btn6.addEventListener("click", (e) => {
    mostrar("6");
  });
  $btn7.addEventListener("click", (e) => {
    mostrar("7");
  });
  $btn8.addEventListener("click", (e) => {
    mostrar("8");
  });
  $btn9.addEventListener("click", (e) => {
    mostrar("9");
  });
  $btn0.addEventListener("click", (e) => {
    mostrar("0");
  });
  $btnMas.addEventListener("click", (e) => {
    operacion("+");
  });
  $btnMenos.addEventListener("click", (e) => {
    operacion("-");
  });
  $btnPor.addEventListener("click", (e) => {
    operacion("*");
  });
  $btnBack.addEventListener("click", (e) => {
    operacion("/");
  });
  $btnPunto.addEventListener("click", (e) => {
    mostrar(".");
  });
  $btnIgual.addEventListener("click", (e) => {
    imprimir();
  });
});
