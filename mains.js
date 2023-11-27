const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


//Al realizar el click mostrar y ocultar el menu
menuEmail.addEventListener('click', toggleDesktopMenu);

//Funcion Para poner o quitar el desktopMenu, classlist permite trabajarcon el objeto y .toggle lo activa o inactiva
function toggleDesktopMenu()
{
  console.log('click');
  desktopMenu.classList.toggle('inactive');
}

console.log("JS Funcionando");