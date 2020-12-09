console.log('Script Automatizado creado por https://twitter.com/alexupps');

const $boton = document.getElementById("boton");


$boton.addEventListener("click", abrir, false);


function abrir()
{
    const $menu = document.getElementById("menu");
    $menu.classList.toggle("abrir");
    console.log("click");
}