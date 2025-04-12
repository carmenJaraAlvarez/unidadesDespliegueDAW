// Función para cargar componentes
function loadComponent(componentId, componentFile) {
  const element = document.getElementById(componentId);
  if (element && window[componentFile]) {
    const component = window[componentFile]();
    if (typeof component === 'object' && component.template && component.init) {
      element.innerHTML = component.template;
      // Initialize the component after DOM insertion
      setTimeout(() => component.init(), 0);
    } else {
      element.innerHTML = component;
    }
  } else {
    console.error(`Component ${componentFile} not found or element ${componentId} not found`);
  }
}

// Función para cargar páginas
function loadPage(pageId) {
  const pageContent = document.getElementById('page-content');
  if (!pageContent) {
    console.error('Page content element not found');
    return;
  }

  console.log('Loading page:', pageId);

  // Save current menu state
  const activeMenuItems = Array.from(document.querySelectorAll('.submenu-item.active')).map(item => item.getAttribute('href'));
  const openSubmenus = Array.from(document.querySelectorAll('.has-submenu.active')).map(item => item.querySelector('a').getAttribute('href'));

  // Si no hay pageId o es 'inicio', cargar Home
  if (!pageId || pageId === 'inicio' || pageId === 'Home') {
    pageContent.innerHTML = window.Home();
    return;
  }

  // Check if it's a submenu item
  if (pageId.includes('/')) {
    const parts = pageId.split('/');
    
    // Try different component name formats
    const componentName = parts.join('');
    const alternativeComponentName = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    const nestedComponentName = parts[0] + parts.slice(1).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    
    console.log('Trying component names:', componentName, alternativeComponentName, nestedComponentName);
    
    if (window[componentName]) {
      console.log('Found component:', componentName);
      pageContent.innerHTML = window[componentName]();
    } else if (window[alternativeComponentName]) {
      console.log('Found alternative component:', alternativeComponentName);
      pageContent.innerHTML = window[alternativeComponentName]();
    } else if (window[nestedComponentName]) {
      console.log('Found nested component:', nestedComponentName);
      pageContent.innerHTML = window[nestedComponentName]();
    } else {
      // If component not found, try to load a default component for the unit
      const unit = parts[0];
      if (window[unit]) {
        console.log('Loading default unit component:', unit);
        pageContent.innerHTML = window[unit]();
      } else {
        console.error('No component found for:', pageId);
        pageContent.innerHTML = `
          <div class="content">
            <h2>Error</h2>
            <div class="content-section">
              <p>No se pudo encontrar el contenido solicitado: ${pageId}</p>
            </div>
          </div>
        `;
      }
    }
  } else {
    // Load the main unit page
    if (window[pageId]) {
      console.log('Found main unit page:', pageId);
      pageContent.innerHTML = window[pageId]();
    } else {
      console.error('Main unit page not found:', pageId);
      pageContent.innerHTML = `
        <div class="content">
          <h2>Error</h2>
          <div class="content-section">
            <p>No se pudo encontrar el contenido solicitado.</p>
          </div>
        </div>
      `;
    }
  }

  // Restore menu state
  setTimeout(() => {
    // Restore active menu items
    activeMenuItems.forEach(href => {
      const item = document.querySelector(`.submenu-item[href="${href}"]`);
      if (item) {
        item.classList.add('active');
        
        // If this is a Secuenciación item, show its nested submenu
        if (href.includes('Secuenciacion')) {
          const nestedSubmenu = item.nextElementSibling;
          if (nestedSubmenu && nestedSubmenu.classList.contains('submenu-nested')) {
            nestedSubmenu.style.maxHeight = `${nestedSubmenu.scrollHeight}px`;
            nestedSubmenu.style.display = 'block';
            nestedSubmenu.style.visibility = 'visible';
            nestedSubmenu.style.opacity = '1';
            
            // Show all phase elements within this nested submenu
            const phaseElements = nestedSubmenu.querySelectorAll('.submenu-item');
            phaseElements.forEach(element => {
              element.style.maxHeight = '500px';
              element.style.display = 'block';
              element.style.visibility = 'visible';
              element.style.opacity = '1';
            });
          }
        }
      }
    });

    // Restore open submenus
    openSubmenus.forEach(href => {
      const item = document.querySelector(`.has-submenu a[href="${href}"]`);
      if (item) {
        const parent = item.parentElement;
        parent.classList.add('active');
        const submenu = parent.querySelector('.submenu');
        if (submenu) {
          submenu.style.maxHeight = `${submenu.scrollHeight}px`;
        }
      }
    });
  }, 0);
}

// Función para abrir el submenú correspondiente a la página actual
function openCurrentSubmenu() {
  const hash = window.location.hash;
  if (hash) {
    // Cerrar todos los submenús primero
    document.querySelectorAll('.has-submenu').forEach((item) => {
      const link = item.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        // Solo cerrar si no es el menú principal ni una página de Secuenciación
        if (!href.includes('Secuenciacion') && !['#Unidad1', '#Unidad2', '#Unidad3', '#Anexos'].includes(href)) {
          item.classList.remove('active');
          const submenu = item.querySelector('.submenu');
          if (submenu) {
            submenu.style.maxHeight = '0';
            submenu.style.display = 'none';
            submenu.style.visibility = 'hidden';
            submenu.style.opacity = '0';
          }
        }
      }
    });

    // Cerrar específicamente los submenús anidados de Secuenciación si no estamos en una página de Secuenciación
    if (!hash.includes('Secuenciacion')) {
      document.querySelectorAll('.submenu-nested').forEach(nestedSubmenu => {
        nestedSubmenu.style.maxHeight = '0';
        nestedSubmenu.style.display = 'none';
        nestedSubmenu.style.visibility = 'hidden';
        nestedSubmenu.style.opacity = '0';
      });
    }

    // Encontrar el elemento del menú correspondiente al hash actual
    const menuItem = document.querySelector(`a[href="${hash}"]`);
    if (menuItem) {
      // Abrir todos los submenús padres
      let parent = menuItem.closest('.has-submenu');
      while (parent) {
        parent.classList.add('active');
        const submenu = parent.querySelector('.submenu');
        if (submenu) {
          submenu.style.maxHeight = `${submenu.scrollHeight}px`;
          submenu.style.display = 'block';
          submenu.style.visibility = 'visible';
          submenu.style.opacity = '1';
        }
        parent = parent.parentElement.closest('.has-submenu');
      }

      // Si es una página de Secuenciación, asegurarse de que el submenú anidado esté abierto
      if (hash.includes('Secuenciacion')) {
        const nestedSubmenu = menuItem.nextElementSibling;
        if (nestedSubmenu && nestedSubmenu.classList.contains('submenu-nested')) {
          nestedSubmenu.style.maxHeight = `${nestedSubmenu.scrollHeight}px`;
          nestedSubmenu.style.display = 'block';
          nestedSubmenu.style.visibility = 'visible';
          nestedSubmenu.style.opacity = '1';
        }
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
  const hash = window.location.hash.slice(1) || 'inicio';
  loadPage(hash);

  // Abrir el submenú correspondiente después de un breve retraso
  setTimeout(openCurrentSubmenu, 200);

  // Manejar navegación
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    loadPage(hash);
    // Abrir el submenú correspondiente después de cargar la página
    setTimeout(openCurrentSubmenu, 100);
  });
});


