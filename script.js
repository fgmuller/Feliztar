
    function captura() {



 var nombreU = document.getElementById("nUser").value;


 localStorage.setItem("nombre_u", nombreU);


}







function accionPlay() {
 var reproducir = new Audio();
 reproducir.src =
  "https://github.com/fgmuller/Feliztar/blob/gh-pages/Fely%20Audio.mp3";
 reproducir.play();
 reproducir.loop = true;
 reproducir.controls = true;
}



/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */
var imagenes = new Array(
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573881.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467575138.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467587008.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573476.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573886.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467569661.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467583804.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573891.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467569666.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573896.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467564161.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573481.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573486.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573491.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467573901.jpg',
 ],
 [
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2467564166.jpg',
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
  "https://github.com/fgmuller/Feliztar/blob/gh-pages/Sapy%20Audio.mp3";
 reproducir.play();
 reproducir.loop = true;
 reproducir.controls = true;
}




/**
 * Array con las imagenes y enlaces que se iran mostrando en la web
 */


var sapy = new Image();
sapy.src =
 'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2488875188.jpg';



/**
 * Funcion para cambiar la imagen y link
 */
function rotarSapy() {
 // cambiamos la imagen y la url

 document.getElementById(
   "imagenSapy")
  .src =
  'https://d2j6dbq0eux0bg.cloudfront.net/images/64486669/2488875188.jpg';

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
  "https://github.com/fgmuller/Feliztar/blob/gh-pages/Mar%20Audio.mp3";
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
