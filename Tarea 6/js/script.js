//DOM

//Encontrar por ID
document.getElementById("p1").innerHTML =
  "Aqui originalmente no hay nada, se utilizo el getElementById para poner este texto.";

//Encontar por Etiqueta
var EncPorEtiqueta = document.getElementById("elementos");

EncPorEtiqueta.addEventListener("click", () => {
  var total = document.getElementsByTagName("*");
  document.getElementById("p2").innerHTML +=
    "Hay un total de " + total.length + " elementos";
});

//Encontrar por clase
var EncPorClase = document.getElementById("imgs");
var imgs = document.getElementsByClassName("img");
EncPorClase.addEventListener("click", () => {
  imgs[0].src = "./img/js2.png";
});

//Encontrar por css
document.querySelector("#p3").style.color = "red";

//Encontrar por coleccion

var elementos = document.getElementsByClassName("p4");

var cambiarP = document.getElementById("coleccion");

cambiarP.addEventListener("click", () => {
  elementos[2].innerHTML = "OBJETO MODIFICADO";
});

//Control y flujo de errores

//Uso del If

function UsoIf() {
  if (document.getElementById("subrayar").checked) {
    document.getElementById("lbSubrayar").style.textDecoration = "underline";
  } else {
    alert("Deselecciono Subrayar");
    document.getElementById("lbSubrayar").style.textDecoration = "none";
  }
}

function UsoSwitch() {
  var num = Number(document.getElementById("mes").value);
  switch (num) {
    case 1:
      alert("El mes es Enero");
      break;
    case 2:
      alert("El mes es Febrero");
      break;
    case 3:
      alert("El mes es Marzo");
      break;
    case 4:
      alert("El mes es Abril");
      break;
    case 5:
      alert("El mes es Mayo");
      break;
    case 6:
      alert("El mes es Junio");
      break;
    case 7:
      alert("El mes es Julio");
      break;
    case 8:
      alert("El mes es Agosto");
      break;
    case 9:
      alert("El mes es Septiembre");
      break;
    case 10:
      alert("El mes es Octubre");
      break;
    case 11:
      alert("El mes es Noviembre");
      break;
    case 12:
      alert("El mes es Diciembre");
      break;
    default:
      alert("No es un mes");
      break;
  }
}

function UsoTryCatch() {
  let x = document.getElementById("num").value;
  try {
    if (isNaN(x))
      throw "No es un número (Esto un error generado por el programador para esta pagina en especifico).";
  } catch (err) {
    alert("Error: " + err);
  }
}

function UsoFor() {
  let numeros = "";
  for (let index = 0; index < 6; index++) {
    numeros += "<br>Número: " + index;
  }
  document.getElementById("pfor").innerHTML = numeros;
}

function UsoWhile() {
  let i = 0;
  while (i < 10) {
    console.log(`HOLA MUNDO`);
    i++;
  }
}

function UsoDoWhile() {
  let numeros = "";
  let i = 0;
  do {
    numeros += "<br>El número es " + i;
    i++;
  } while (i < 5);

  document.getElementById("pDoWhile").innerHTML = numeros;
}

function AND(){
    alert(document.getElementById('chk1').checked&&document.getElementById('chk2').checked);
  }
  
  function OR(){
    alert(document.getElementById('chk1').checked||document.getElementById('chk2').checked);
  }
  
  function NOT(){
    alert(!(document.getElementById('chk1').checked&&document.getElementById('chk2').checked));
  }

  function mathPI(){
    alert(Math.PI);
  }
  
  function MathLog(){
    alert(Math.LN2);
  }
  
  function MathCos(){
    alert(Math.cos(5));
  }

  var hoy = new Date();
function AlertTodayMinutes(){
  alert(hoy.getMinutes());
}

function AlertDAY(){
  alert(hoy.getDay());
}
function AlertYear(){
  alert(hoy.getFullYear());
}
function Mayuscula(){
    var text = document.getElementById("changeText");
    text.innerHTML = text.innerHTML.toUpperCase();
  }

  
function obtainElementOfArray(){
    var nums = [1,2,3,4,5];
    document.getElementById("objArray").innerHTML = "El objeto en la tercera posicion es: " + nums[2];
}

function PrintTArray() {
  var buffer = new ArrayBuffer(32);
  if (buffer.byteLength === 32) {
    alert("Sí, son 32 bytes");
  } else {
    alert("¡Oh no, es del tamaño incorrecto!");
  }
}
