document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);

//esto quiere decir que cuando yo le de click a este boton me ejecute una funcion
document.getElementById("btn__registrarse").addEventListener("click", register);

//la funcion resize sirve para que cuando yo agrande y achique la pagina esta se ejecuted
//y me cambie la forma de esto con responsive design, antes tengo que haber declarado de
//una funcion que en este caso es la funcion anchoPagina
window.addEventListener("resize", anchoPagina);

//DECLARACION DE VARIABLES
//este es el contenedor de login y register
var contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);

//con esto estoy diciendo que la variable formulario_login va a ser igual a la clase
//formulario login
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");

//variables para guardar las cajas cajatrasera login y la cajatrasera register
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//Esto es para que el ancho de la pagina se muestre de manera normal cuando yo abro y cierro la ventana
function anchoPagina() {
  if (window.innerWidth > 850) {
    caja_trasera_login.style.display = "block";
    caja_trasera_register.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";

    //De esta manera el contenedor login register no se mueve para ningun lado
    contenedor_login_register.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion() {
  //Este if y else se utiliza para que la pagina al disminuir de tamaño quede centrado
  //y no se desacomode todo
  if (window.innerWidth > 850) {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    //Como al otro lado en el formulario register lo tengo en display=none
    //aca utilizo el .display ="block" para que al hacer click en registrarse la
    //pantalla blanca me cambie de posicion
    formulario_register.style.display = "block";
    //El contenedor contenedor_login_register va a tener un style.left (izquierda)
    //para que al hacer click el formulario se pase a la derecha
    contenedor_login_register.style.left = "410px";
    //formulario_login_register.style. display none porque ya no quiero que se muestre y lo oculto
    formulario_login.style.display = "none";
    //a la caja caja_trasera_register le voy a decir que tenga una opacidad de 0 y
    //a la hora de moverse
    caja_trasera_register.style.opacity = "0";
    //aqui en caja_trasera_login quiero que se muestre y tenga una opacidad de 0 y
    //para que al poner la animacion la caja aparezca y desaparezca cuando doy click
    //en registrar o entrar
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}
