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
                <a href="#Unidad1/Secuenciacion/Secuenciacion" class="submenu-toggle"><span>6. Secuenciación Didáctica</span><i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
                  <li><a href="#Unidad1/Secuenciacion/FaseInicial" class="submenu-item"><span>6.1. Fase Inicial</span></a></li>
                  <li><a href="#Unidad1/Secuenciacion/FaseDesarrollo" class="submenu-item"><span>6.2. Fase de Desarrollo</span></a></li>
                  <li><a href="#Unidad1/Secuenciacion/FaseSintesis" class="submenu-item"><span>6.3. Fase de Síntesis</span></a></li>
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
                <a href="#Unidad2/Secuenciacion/Secuenciacion" class="submenu-toggle"><span>6. Secuenciación Didáctica</span><i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
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
                <a href="#Unidad3/Secuenciacion/Secuenciacion" class="submenu-toggle"><span>6. Secuenciación Didáctica</span><i class="fas fa-chevron-down"></i></a>
                <ul class="submenu">
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

      // Helper function to toggle submenu state
      const toggleSubmenu = (element, force) => {
        const wasActive = element.classList.contains('active');
        const submenu = element.querySelector('.submenu');
        
        if (typeof force === 'boolean') {
          if (force !== wasActive) {
            element.classList[force ? 'add' : 'remove']('active');
          }
        } else {
          element.classList.toggle('active');
        }
        
        // If this is a nested submenu, ensure parent stays open
        const parentSubmenu = element.closest('.submenu');
        if (parentSubmenu) {
          const parentLi = parentSubmenu.closest('.has-submenu');
          if (parentLi) {
            parentLi.classList.add('active');
          }
        }
        
        // Initialize submenu items if they haven't been initialized
        if (submenu) {
          const submenuItems = submenu.querySelectorAll('.submenu-item');
          submenuItems.forEach(item => {
            item.style.display = 'block';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
          });
          
          // Set appropriate maxHeight based on content
          if (element.classList.contains('active')) {
            const totalHeight = Array.from(submenu.children).reduce((height, child) => {
              return height + child.offsetHeight;
            }, 0);
            submenu.style.maxHeight = `${totalHeight}px`;
          } else {
            submenu.style.maxHeight = '0';
          }
        }
        
        return wasActive;
      };
      
      // Toggle submenu
      document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        console.log('Setting up submenu toggle:', {
          href: toggle.getAttribute('href'),
          parentClass: toggle.parentElement.className,
          isNested: toggle.closest('.submenu') !== null
        });
        
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          const parent = toggle.parentElement;
          console.log('Toggle clicked:', {
            href: toggle.getAttribute('href'),
            isActive: parent.classList.contains('active'),
            parentClass: parent.className,
            isNested: parent.closest('.submenu') !== null,
            currentDisplay: parent.querySelector('.submenu')?.style.display,
            currentVisibility: parent.querySelector('.submenu')?.style.visibility,
            currentOpacity: parent.querySelector('.submenu')?.style.opacity,
            currentMaxHeight: parent.querySelector('.submenu')?.style.maxHeight
          });
          
          // Log menu structure before toggle
          console.log('Menu structure before toggle:');
          logMenuStructure(parent);
          
          // Toggle current submenu
          const wasActive = toggleSubmenu(parent);
          
          // Wait for next frame
          requestAnimationFrame(() => {
            const isNowActive = parent.classList.contains('active');
            console.log('After toggle and animation frame:', {
              href: toggle.getAttribute('href'),
              isActive: isNowActive,
              submenuVisible: isSubmenuVisible(parent),
              wasActive,
              isNested: parent.closest('.submenu') !== null,
              currentDisplay: parent.querySelector('.submenu')?.style.display,
              currentVisibility: parent.querySelector('.submenu')?.style.visibility,
              currentOpacity: parent.querySelector('.submenu')?.style.opacity,
              currentMaxHeight: parent.querySelector('.submenu')?.style.maxHeight
            });
            
            // Log menu structure after toggle
            console.log('Menu structure after toggle:');
            logMenuStructure(parent);
          });
          
          // Close sibling submenus only at the same level
          const siblings = parent.parentElement.querySelectorAll('.has-submenu');
          console.log('Found siblings:', siblings.length);
          
          siblings.forEach(sibling => {
            if (sibling !== parent) {
              console.log('Closing sibling:', {
                href: sibling.querySelector('a')?.getAttribute('href'),
                wasActive: sibling.classList.contains('active'),
                wasVisible: isSubmenuVisible(sibling),
                isNested: sibling.closest('.submenu') !== null
              });
              
              toggleSubmenu(sibling, false);
              // Also close all nested submenus in siblings
              const nestedMenus = sibling.querySelectorAll('.has-submenu');
              console.log('Closing nested menus in sibling:', nestedMenus.length);
              
              nestedMenus.forEach(nested => {
                toggleSubmenu(nested, false);
              });
            }
          });
          
          // Keep parent menus open
          let currentParent = parent.parentElement.closest('.has-submenu');
          while (currentParent) {
            console.log('Keeping parent menu open:', {
              href: currentParent.querySelector('a')?.getAttribute('href'),
              wasActive: currentParent.classList.contains('active'),
              wasVisible: isSubmenuVisible(currentParent),
              isNested: currentParent.closest('.submenu') !== null
            });
            
            toggleSubmenu(currentParent, true);
            currentParent = currentParent.parentElement.closest('.has-submenu');
          }

          // Update URL hash
          const href = toggle.getAttribute('href');
          if (href) {
            console.log('Updating URL hash to:', href);
            window.location.hash = href;
            window.dispatchEvent(new HashChangeEvent('hashchange'));
          }
        });
      });

      // Handle menu item clicks
      document.querySelectorAll('.submenu-item').forEach(item => {
        console.log('Setting up submenu item:', item.getAttribute('href'));
        
        item.addEventListener('click', (e) => {
          if (item.classList.contains('submenu-toggle')) {
            console.log('Skipping submenu toggle item');
            return;
          }
          
          e.preventDefault();
          e.stopPropagation();
          
          console.log('Menu item clicked:', {
            href: item.getAttribute('href'),
            isActive: item.classList.contains('active')
          });
          
          // Remove active class from all items
          document.querySelectorAll('.submenu-item').forEach(i => {
            if (i.classList.contains('active')) {
              console.log('Removing active from:', i.getAttribute('href'));
            }
            i.classList.remove('active');
          });
          
          // Add active class to clicked item
          item.classList.add('active');
          console.log('Added active class to:', item.getAttribute('href'));
          
          // Keep all parent menus open
          let parent = item.closest('.has-submenu');
          while (parent) {
            console.log('Keeping parent menu open:', {
              href: parent.querySelector('a')?.getAttribute('href'),
              wasActive: parent.classList.contains('active')
            });
            
            parent.classList.add('active');
            parent = parent.parentElement.closest('.has-submenu');
          }
          
          const href = item.getAttribute('href');
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
