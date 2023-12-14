const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



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

//Funcion para poner o quitar el menu de articulos del carrito
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

//Creacion de menu de productos
const productosList = [];
productosList.push({
  nombre: 'Abono Triple 15 Nutrimon',
  precio: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productosList.push({
  nombre: 'Abono R15',
  precio: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productosList.push({
  nombre: 'Veneno Furadan',
  precio: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function prestamoProductos(arr){
  for(productos of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', productos.imagen);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrecio = document.createElement('p');
    productPrecio.innerText = '$' + productos.precio;
    const productNombre = document.createElement('p');
    productNombre.innerText = productos.nombre;
  
    productInfoDiv.appendChild(productPrecio);
    productInfoDiv.appendChild(productNombre);
    
    const productInfoFigura = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigura.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigura);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

prestamoProductos(productosList);