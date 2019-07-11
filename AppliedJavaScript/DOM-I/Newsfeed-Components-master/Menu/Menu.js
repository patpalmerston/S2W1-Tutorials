let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function makeMenu(arr) {
  const menuCon = document.createElement('div');
  const menuList = document.createElement('ul');
  const newMenu = {};

  // structure
  menuCon.appendChild(menuList);

  // set class
  menuCon.classList.add('menu');

  arr.forEach((item, i) => {
    newMenu[i] = document.createElement('li');
    newMenu[i].textContent = item;
    menuList.appendChild(newMenu[i]);
  });

  const menuDrop = document.querySelector('.menu-button');

  menuDrop.addEventListener('click', event => {
    menuCon.classList.toggle('menu--open');
  });

  return menuCon;
}

const theHead = document.querySelector('.header');
theHead.appendChild(makeMenu(menuItems));
