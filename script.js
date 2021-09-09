
    function captura() {



 var nombreU = document.getElementById("nUser").value;


 localStorage.setItem("nombre_u", nombreU);


}







function accionPlay() {
 var reproducir = new Audio();
 reproducir.src =
  "https://static.wixstatic.com/mp3/e7e65a_05f76dc580464cfe86105772a016a91b.mp3";
 reproducir.play();
 reproducir.loop = true;
 reproducir.controls = true;
}



/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */
var imagenes = new Array(
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/1%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/2%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/3%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/4%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/5%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/6%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/7%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/8%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/9%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/10%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/11%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/12%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/13%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/14%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/15%20Fely.png',
 ],
 [
  'https://raw.githubusercontent.com/fgmuller/Feliztar/gh-pages/16%20Fely.png',
 ]





);
var contador = 0;

/**
 * Funcion para cambiar la imagen y link
 */
function rotarImagenes() {
 // cambiamos la imagen y la url
 contador++
 document.getElementById("imagenEjercicio")
  .src = imagenes[contador %
   imagenes.length][0];

}

/**
 * Función que se ejecuta una vez cargada la página
 */
function iniciar() {
 // Cargamos una imagen aleatoria
 rotarImagenes();


 // Indicamos que cada 5 segundos cambie la imagen
 setInterval(rotarImagenes, 1000);

 accionPlay();
 accionPause();

}



function detener() {

 location.reload(true);
}


//SAPY//

function accionPlaySapy() {
 var reproducir = new Audio();
 reproducir.src =
  "https://static.wixstatic.com/mp3/e7e65a_7c18a20fc8214526ae383e5d2029f01d.mp3";
 reproducir.play();
 reproducir.loop = true;
 reproducir.controls = true;
}




/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */


var sapy = new Image();
sapy.src =
 'https://github.com/fgmuller/Feliztar/blob/gh-pages/Respira%20Rapido%20con%20Sapy.png';



/**
 * Funcion para cambiar la imagen y link
 */
function rotarSapy() {
 // cambiamos la imagen y la url

 document.getElementById(
   "imagenSapy")
  .src =
  'https://github.com/fgmuller/Feliztar/blob/gh-pages/Sapy%20Animacion.gif';

} //

/**
 * Función que se ejecuta una vez cargada la página
 */
function iniciarSapy() {
 // Cargamos una imagen aleatoria
 rotarSapy();


 // Indicamos que cada 5 segundos cambie la imagen
 setInterval(rotarSapy, 29000);

 accionPlaySapy();

}





//MAR//

function accionPlayMar() {
 var reproducir = new Audio();
 reproducir.src =
  "https://static.wixstatic.com/mp3/e7e65a_0218edf90fba4cff954d5d96f417cf00.mp3";
 reproducir.play();
 reproducir.loop = true;
 reproducir.controls = true;
}




/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */


var mar =

 new Array(
  [
   'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2488891226.jpg',
  ],
  [
   'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2488943800.jpg',
  ]

 );




new Image();
mar.src =
 'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2488891226.jpg';



/**
 * Funcion para cambiar la imagen y link
 */
function rotarMar() {
 // cambiamos la imagen y la url


 contador++
 document.getElementById(
   "imagenMar")
  .src = mar[contador %
   mar.length][0];

}



/**
 * Función que se ejecuta una vez cargada la página
 */
function iniciarMar() {
 // Cargamos una imagen aleatoria
 rotarMar();


 // Indicamos que cada 5 segundos cambie la imagen
 setInterval(rotarMar, 3000);

 accionPlayMar();

}
