const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


//Al realizar el click mostrar y ocultar el menu
menuEmail.addEventListener('click', toggleDesktopMenu);
//Al realizar el click mostrar y ocultar el menu mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);

//Funcion Para poner o quitar el desktopMenu, classlist permite trabajar con el objeto y .toggle lo activa o inactiva
function toggleDesktopMenu()
{
  console.log('click');
  desktopMenu.classList.toggle('inactive');
}

//Funcion Para poner o quitar el Menu Mobile, classlist permite trabajar con el objeto y .toggle lo activa o inactiva
function toggleMobileMenu()
{
  mobileMenu.classList.toggle('inactive');
}