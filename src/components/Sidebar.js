function Sidebar() {
  const template = `
    <div class="burger-menu">
      <i class="fas fa-bars"></i>
    </div>
    <aside class="sidebar">
      <nav class="sidebar-menu">
        <ul>
          <li><a href="#inicio"><span>Inicio</span></a></li>
          <li class="has-submenu">
            <a href="#Unidad1" class="submenu-toggle"><span>Unidad 1: La Paz es Compartir</span><i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li><a href="#Unidad1/Identificacion" class="submenu-item"><span>1. Datos de Identificación</span></a></li>
              <li><a href="#Unidad1/Justificacion" class="submenu-item"><span>2. Justificación</span></a></li>
              <li><a href="#Unidad1/PrincipiosDUA" class="submenu-item"><span>3. Principios DUA</span></a></li>
              <li><a href="#Unidad1/Descripcion" class="submenu-item"><span>4. Descripción del Producto</span></a></li>
              <li><a href="#Unidad1/Concrecion" class="submenu-item"><span>5. Concreción Curricular</span></a></li>
              <li class="has-submenu">
                <a href="#Unidad1/Secuenciacion/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a>
                <ul class="submenu submenu-nested" style="display: block; max-height: none;">
                  <li><a href="#Unidad1/Secuenciacion/FaseInicial" class="submenu-item"><span>Fase 1: Inicio</span></a></li>
                  <li><a href="#Unidad1/Secuenciacion/FaseDesarrollo" class="submenu-item"><span>Fase 2: Desarrollo</span></a></li>
                  <li><a href="#Unidad1/Secuenciacion/FaseSintesis" class="submenu-item"><span>Fase 3: Cierre</span></a></li>
                </ul>
              </li>
              <li><a href="#Unidad1/Evaluacion" class="submenu-item"><span>7. Evaluación</span></a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#Unidad2" class="submenu-toggle"><span>Unidad 2: Una nube sin agua</span><i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li><a href="#Unidad2/Identificacion" class="submenu-item"><span>1. Datos de Identificación</span></a></li>
              <li><a href="#Unidad2/Justificacion" class="submenu-item"><span>2. Justificación</span></a></li>
              <li><a href="#Unidad2/PrincipiosDUA" class="submenu-item"><span>3. Principios DUA</span></a></li>
              <li><a href="#Unidad2/Descripcion" class="submenu-item"><span>4. Descripción del Producto</span></a></li>
              <li><a href="#Unidad2/Concrecion" class="submenu-item"><span>5. Concreción Curricular</span></a></li>
              <li class="has-submenu">
                <a href="#Unidad2/Secuenciacion/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a>
                <ul class="submenu submenu-nested" style="display: block; max-height: none;">
                  <li><a href="#Unidad2/Secuenciacion/FaseInicial" class="submenu-item"><span>6.1. Fase Inicial: Situamos al alumnado</span></a></li>
                  <li><a href="#Unidad2/Secuenciacion/FaseDesarrollo" class="submenu-item"><span>6.2. Fase de Desarrollo</span></a></li>
                  <li><a href="#Unidad2/Secuenciacion/FaseSintesis" class="submenu-item"><span>6.3. Fase de Síntesis</span></a></li>
                </ul>
              </li>
              <li><a href="#Unidad2/Evaluacion" class="submenu-item"><span>7. Evaluación</span></a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#Unidad3" class="submenu-toggle"><span>Unidad 3: Despliegue de Aplicaciones Web</span><i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li><a href="#Unidad3/Identificacion" class="submenu-item"><span>1. Datos de Identificación</span></a></li>
              <li><a href="#Unidad3/Justificacion" class="submenu-item"><span>2. Justificación</span></a></li>
              <li><a href="#Unidad3/PrincipiosDUA" class="submenu-item"><span>3. Principios DUA</span></a></li>
              <li><a href="#Unidad3/Descripcion" class="submenu-item"><span>4. Descripción del Producto</span></a></li>
              <li><a href="#Unidad3/Concrecion" class="submenu-item"><span>5. Concreción Curricular</span></a></li>
              <li class="has-submenu">
                <a href="#Unidad3/Secuenciacion/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a>
                <ul class="submenu submenu-nested" style="display: block; max-height: none;">
                  <li><a href="#Unidad3/Secuenciacion/FaseInicial" class="submenu-item"><span>6.1. Fase Inicial: Situamos al alumnado</span></a></li>
                  <li><a href="#Unidad3/Secuenciacion/FaseDesarrollo" class="submenu-item"><span>6.2. Fase de Desarrollo</span></a></li>
                  <li><a href="#Unidad3/Secuenciacion/FaseSintesis" class="submenu-item"><span>6.3. Fase de Síntesis</span></a></li>
                </ul>
              </li>
              <li><a href="#Unidad3/Evaluacion" class="submenu-item"><span>7. Evaluación</span></a></li>
            </ul>
          </li>
          <li class="has-submenu">
            <a href="#Anexos" class="submenu-toggle"><span>Anexos</span><i class="fas fa-chevron-down"></i></a>
            <ul class="submenu">
              <li><a href="#Anexos/Modulo" class="submenu-item"><span>El módulo</span></a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  `;

  return {
    template,
    init() {
      console.log('Initializing Sidebar component');

      // Function to show phases menu
      const showPhasesMenu = (secuenciacionItem) => {
        if (!secuenciacionItem) return;
        
        console.log('Attempting to show phases menu for:', secuenciacionItem.getAttribute('href'));
        
        // Find the nested submenu
        const parentLi = secuenciacionItem.closest('li');
        const nestedSubmenu = parentLi.querySelector('.submenu-nested');
        
        if (nestedSubmenu) {
          console.log('Found nested submenu:', {
            display: nestedSubmenu.style.display,
            visibility: nestedSubmenu.style.visibility,
            opacity: nestedSubmenu.style.opacity,
            height: '80em'
          });
          debugger;
          // Show the nested submenu
          nestedSubmenu.style.maxHeight = `${nestedSubmenu.scrollHeight}px`;
          nestedSubmenu.style.display = 'block';
          nestedSubmenu.style.visibility = 'visible';
          nestedSubmenu.style.opacity = '1';
          
          // Show all phase elements
          const phaseElements = nestedSubmenu.querySelectorAll('.submenu-item');
          phaseElements.forEach(element => {
            element.style.maxHeight = '500px';
            element.style.display = 'block';
            element.style.visibility = 'visible';
            element.style.opacity = '1';
          });

          // Also make sure parent menus are open
          let parent = secuenciacionItem.closest('.has-submenu');
          while (parent) {
            parent.classList.add('active');
            const parentSubmenu = parent.querySelector('.submenu');
            if (parentSubmenu) {
              parentSubmenu.style.maxHeight = `${parentSubmenu.scrollHeight}px`;
              parentSubmenu.style.display = 'block';
              parentSubmenu.style.visibility = 'visible';
              parentSubmenu.style.opacity = '1';
            }
            parent = parent.parentElement.closest('.has-submenu');
          }
        } else {
          console.log('No nested submenu found for:', secuenciacionItem.getAttribute('href'));
        }
      };

      // Initialize all submenus to be hidden
      document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.maxHeight = '0';
      });

      // Check if we're on a Secuenciación page
      const currentHash = window.location.hash;
      const isSecuenciacionPage = currentHash.includes('Secuenciacion');
      console.log('Current hash:', currentHash, 'Is Secuenciacion page:', isSecuenciacionPage);

      // Debug helper to log CSS properties
      const logCSSProperties = (element) => {
        const submenu = element.querySelector('.submenu');
        if (submenu) {
          const computedStyle = getComputedStyle(submenu);
          console.log('CSS Properties:', {
            href: element.querySelector('a')?.getAttribute('href'),
            display: computedStyle.display,
            visibility: computedStyle.visibility,
            opacity: computedStyle.opacity,
            maxHeight: computedStyle.maxHeight,
            transform: computedStyle.transform,
            transition: computedStyle.transition,
            pointerEvents: computedStyle.pointerEvents,
            position: computedStyle.position,
            zIndex: computedStyle.zIndex
          });
        }
      };

      // Debug helper to log menu structure
      const logMenuStructure = (element, prefix = '') => {
        const submenu = element.querySelector('.submenu');
        const isActive = element.classList.contains('active');
        const href = element.querySelector('a')?.getAttribute('href');
        console.log(`${prefix}Menu item:`, {
          href,
          isActive,
          hasSubmenu: !!submenu,
          classes: element.className,
          display: submenu ? getComputedStyle(submenu).display : 'N/A',
          visibility: submenu ? getComputedStyle(submenu).visibility : 'N/A',
          opacity: submenu ? getComputedStyle(submenu).opacity : 'N/A',
          maxHeight: submenu ? getComputedStyle(submenu).maxHeight : 'N/A'
        });
        
        if (submenu) {
          logCSSProperties(element);
          const items = submenu.children;
          Array.from(items).forEach(item => {
            logMenuStructure(item, prefix + '  ');
          });
        }
      };
      
      // Helper function to check submenu visibility
      const isSubmenuVisible = (element) => {
        const submenu = element.querySelector('.submenu');
        const computedStyle = submenu ? getComputedStyle(submenu) : null;
        const isVisible = submenu && computedStyle.display === 'block' && 
                         computedStyle.visibility !== 'hidden' && 
                         computedStyle.opacity !== '0' &&
                         computedStyle.maxHeight !== '0px';
        
        console.log('Checking submenu visibility:', {
          href: element.querySelector('a')?.getAttribute('href'),
          hasSubmenu: !!submenu,
          computedDisplay: computedStyle?.display || 'N/A',
          computedVisibility: computedStyle?.visibility || 'N/A',
          computedOpacity: computedStyle?.opacity || 'N/A',
          computedMaxHeight: computedStyle?.maxHeight || 'N/A',
          isVisible,
          classes: element.className
        });
        
        return isVisible;
      };

      // If we're on a Secuenciación page, show the phases menu
      if (isSecuenciacionPage) {
        const secuenciacionItem = document.querySelector(`a[href="${currentHash}"]`);
        if (secuenciacionItem) {
          // First, expand all parent menus
          let parent = secuenciacionItem.closest('.has-submenu');
          while (parent) {
            parent.classList.add('active');
            const parentSubmenu = parent.querySelector('.submenu');
            if (parentSubmenu) {
              parentSubmenu.style.maxHeight = `${parentSubmenu.scrollHeight}px`;
              parentSubmenu.style.display = 'block';
              parentSubmenu.style.visibility = 'visible';
              parentSubmenu.style.opacity = '1';
            }
            parent = parent.parentElement.closest('.has-submenu');
          }

          // Then set active class on the Secuenciación item
          secuenciacionItem.classList.add('active');
          
          // Finally, show the phases menu
          const nestedSubmenu = secuenciacionItem.nextElementSibling;
          if (nestedSubmenu && nestedSubmenu.classList.contains('submenu-nested')) {
            nestedSubmenu.style.maxHeight = `${nestedSubmenu.scrollHeight}px`;
            nestedSubmenu.style.display = 'block';
            nestedSubmenu.style.visibility = 'visible';
            nestedSubmenu.style.opacity = '1';
            
            // Show all phase elements
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

      // Set up menu items
      document.querySelectorAll('.submenu-item').forEach(item => {
        console.log('Setting up submenu item:', item.getAttribute('href'));
        
        item.addEventListener('click', (e) => {
          if (item.classList.contains('submenu-toggle')) {
            console.log('Skipping submenu toggle item');
            return;
          }
          
          e.preventDefault();
          e.stopPropagation();
          
          const href = item.getAttribute('href');
          const isSecuenciacion = href?.includes('Secuenciacion');
          const isFase = href?.includes('Fase');
          
          console.log('Menu item clicked:', {
            href: href,
            isActive: item.classList.contains('active'),
            isSecuenciacion: isSecuenciacion,
            isFase: isFase
          });
          
          // Remove active class from all items
          document.querySelectorAll('.submenu-item').forEach(i => {
            i.classList.remove('active');
          });
          
          // Remove active class from all parent menus
          document.querySelectorAll('.has-submenu').forEach(menu => {
            menu.classList.remove('active');
          });
          
          // Add active class to clicked item
          item.classList.add('active');
          console.log('Added active class to:', href);
          
          // If this is a Secuenciación item, show its phases menu
          if (isSecuenciacion) {
            showPhasesMenu(item);
          }
          
          // Keep only the necessary parent menus open
          let parent = item.closest('.has-submenu');
          while (parent) {
            const parentHref = parent.querySelector('a')?.getAttribute('href');
            console.log('Processing parent menu:', {
              href: parentHref,
              isCurrentPath: href.includes(parentHref)
            });
            
            if (href.includes(parentHref)) {
              parent.classList.add('active');
              const parentSubmenu = parent.querySelector('.submenu');
              if (parentSubmenu) {
                parentSubmenu.style.maxHeight = `${parentSubmenu.scrollHeight}px`;
                parentSubmenu.style.display = 'block';
                parentSubmenu.style.visibility = 'visible';
                parentSubmenu.style.opacity = '1';
              }
            }
            parent = parent.parentElement.closest('.has-submenu');
          }
          
          if (href) {
            console.log('Updating URL hash to:', href);
            window.location.hash = href;
            window.dispatchEvent(new HashChangeEvent('hashchange'));
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        });
      });

      // Toggle submenu
      document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          const parent = toggle.parentElement;
          const submenu = parent.querySelector('.submenu');
          const href = toggle.getAttribute('href');
          const isSecuenciacion = href?.includes('Secuenciacion');
          const isFase = href?.includes('Fase');
          
          // If the menu is already active, close it
          if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            if (submenu) {
              submenu.style.maxHeight = '0';
            }
            
            // If closing Secuenciación, hide all phase elements
            if (isSecuenciacion) {
              const phaseElements = document.querySelectorAll('.submenu-nested .submenu-item');
              phaseElements.forEach(element => {
                element.style.maxHeight = '0';
                element.style.display = 'none';
                element.style.visibility = 'hidden';
                element.style.opacity = '0';
              });
            }
            return;
          }
          
          // If opening a new menu, close other menus at the same level
          const siblings = parent.parentElement.querySelectorAll('.has-submenu');
          siblings.forEach(sibling => {
            if (sibling !== parent) {
              sibling.classList.remove('active');
              const siblingSubmenu = sibling.querySelector('.submenu');
              if (siblingSubmenu) {
                siblingSubmenu.style.maxHeight = '0';
              }
            }
          });
          
          // Open the clicked menu
          parent.classList.add('active');
          if (submenu) {
            const totalHeight = Array.from(submenu.children).reduce((height, child) => {
              return height + child.offsetHeight;
            }, 0);
            submenu.style.maxHeight = `${totalHeight}px`;
          }
          
          // If opening Secuenciación or a phase, show the phase elements
          if (isSecuenciacion || isFase) {
            const phaseElements = document.querySelectorAll('.submenu-nested .submenu-item');
            phaseElements.forEach(element => {
              element.style.maxHeight = '500px';
              element.style.display = 'block';
              element.style.visibility = 'visible';
              element.style.opacity = '1';
            });
          }
          
          // Keep parent menus open
          let currentParent = parent.parentElement.closest('.has-submenu');
          while (currentParent) {
            currentParent.classList.add('active');
            const parentSubmenu = currentParent.querySelector('.submenu');
            if (parentSubmenu) {
              const totalHeight = Array.from(parentSubmenu.children).reduce((height, child) => {
                return height + child.offsetHeight;
              }, 0);
              parentSubmenu.style.maxHeight = `${totalHeight}px`;
            }
            currentParent = currentParent.parentElement.closest('.has-submenu');
          }

          // Update URL hash
          if (href) {
            window.location.hash = href;
            window.dispatchEvent(new HashChangeEvent('hashchange'));
          }
        });
      });

      // Toggle burger menu
      const burgerMenu = document.querySelector('.burger-menu');
      const sidebar = document.querySelector('.sidebar');
      
      if (burgerMenu) {
        console.log('Setting up burger menu');
        burgerMenu.addEventListener('click', () => {
          console.log('Burger menu clicked:', {
            wasActive: burgerMenu.classList.contains('active')
          });
          burgerMenu.classList.toggle('active');
          sidebar.classList.toggle('active');
        });
      }

      // Close sidebar when clicking a link on mobile
      if (window.innerWidth <= 768) {
        console.log('Setting up mobile link handlers');
        document.querySelectorAll('.sidebar-menu a').forEach(link => {
          link.addEventListener('click', () => {
            console.log('Mobile link clicked, closing sidebar');
            sidebar.classList.remove('active');
            burgerMenu.classList.remove('active');
          });
        });
      }

      // Log initial menu structure
      console.log('Initial menu structure:');
      document.querySelectorAll('.sidebar-menu > ul > li').forEach(item => {
        logMenuStructure(item);
      });
    }
  };
}

window.Sidebar = Sidebar;
