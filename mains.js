const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



//Al realizar el click mostrar y ocultar el menu
menuEmail.addEventListener('click', toggleDesktopMenu);
//Al realizar el click mostrar y ocultar el menu mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);
//Seleccionar icono carrito menu
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//Funcion Para poner o quitar el desktopMenu, classlist permite trabajar con el objeto y .toggle lo activa o inactiva
function toggleDesktopMenu()
{
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed)
  {
    aside.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

//Funcion Para poner o quitar el Menu Mobile, classlist permite trabajar con el objeto y .toggle lo activa o inactiva
function toggleMobileMenu()
{
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed)
  {
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

//Funcion para poer o quitar el menu de articulos del carrito
function toggleCarritoAside()
{
  //Se niega la condicion inicial para saber si esta abierto el menu
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDEsktopMenuClosed = desktopMenu.classList.contains('inactive');

  //aside.classList.toggle('inactive');
  if(!isMobileMenuClosed)
  {
    mobileMenu.classList.add('inactive');
  }
  else if (!isDEsktopMenuClosed)
  {
    desktopMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}