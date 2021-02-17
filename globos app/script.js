
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedorGlobos");

boton.onclick = soltarIconos;


function insertarIcono(){

	const icono = document.createElement("div");

	icono.classList.add('icono');

	icono.innerHTML = '🎈';

	icono.style.left = Math.random() * 100 + "vw";

	icono.style.animationDuration = Math.random() * 2 + 3 + "s";

	document.body.appendChild(icono);

	setTimeout(function() { icono.remove(); }, 5000);

}

function soltarIconos(){
	setInterval(insertarIcono, 1000);
	contenedor.remove();
}

