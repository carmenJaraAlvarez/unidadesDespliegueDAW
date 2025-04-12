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


