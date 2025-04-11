// Función para cargar componentes
function loadComponent(componentId, componentFile) {
  const element = document.getElementById(componentId);
  if (element && window[componentFile]) {
    element.innerHTML = window[componentFile]();
  }
}

// Función para cargar páginas
function loadPage(pageId) {
  const pageContent = document.getElementById('page-content');
  if (pageContent && window[pageId]) {
    pageContent.innerHTML = window[pageId]();
  }
}

// Función para abrir el submenú correspondiente a la página actual
function openCurrentSubmenu() {
  const hash = window.location.hash;
  if (hash) {
    // Cerrar todos los submenús primero
    document.querySelectorAll('.has-submenu').forEach((item) => {
      item.classList.remove('active');
      const submenu = item.querySelector('.submenu');
      const icon = item.querySelector('i');
      if (submenu) submenu.style.maxHeight = '0px';
      if (icon) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
      }
    });

    // Encontrar el submenú padre
    const parentUnit = hash.split('/')[0];
    const submenuToggle = document.querySelector(`a[href="${parentUnit}"]`);
    if (submenuToggle && submenuToggle.classList.contains('submenu-toggle')) {
      const parent = submenuToggle.parentElement;
      const submenu = parent.querySelector('.submenu');
      const icon = submenuToggle.querySelector('i');

      // Abrir el submenú
      parent.classList.add('active');
      if (submenu) {
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
      }
      if (icon) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
      }
    }
  }
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  // Cargar componentes
  loadComponent('header', 'Header');
  loadComponent('sidebar', 'Sidebar');
  loadComponent('footer', 'Footer');

  // Cargar página inicial o página actual según el hash
  const hash = window.location.hash.slice(1) || 'Home';
  loadPage(hash.split('/')[0]);

  // Abrir el submenú correspondiente después de un breve retraso
  setTimeout(openCurrentSubmenu, 200);

  // Manejar navegación
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1) || 'Home';
    loadPage(hash.split('/')[0]);
    // Abrir el submenú correspondiente después de cargar la página
    setTimeout(openCurrentSubmenu, 100);
  });
});
