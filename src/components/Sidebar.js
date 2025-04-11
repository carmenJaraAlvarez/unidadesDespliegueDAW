function Sidebar() {
  const template = `
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
                            <li><a href="#Unidad1/Descripcion" class="submenu-item"><span>4. Descripción del Producto Final</span></a></li>
                            <li><a href="#Unidad1/Concrecion" class="submenu-item"><span>5. Concreción Curricular</span></a></li>
                            <li><a href="#Unidad1/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a></li>
                            <li><a href="#Unidad1/Evaluacion" class="submenu-item"><span>7. Evaluación</span></a></li>
                        </ul>
                    </li>
                    <li class="has-submenu">
                        <a href="#Unidad2" class="submenu-toggle"><span>Unidad 2: Una nube sin agua</span><i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="#Unidad2/Identificacion" class="submenu-item"><span>1. Datos de Identificación</span></a></li>
                            <li><a href="#Unidad2/Justificacion" class="submenu-item"><span>2. Justificación</span></a></li>
                            <li><a href="#Unidad2/PrincipiosDUA" class="submenu-item"><span>3. Principios DUA</span></a></li>
                            <li><a href="#Unidad2/Descripcion" class="submenu-item"><span>4. Descripción del Producto Final</span></a></li>
                            <li><a href="#Unidad2/Concrecion" class="submenu-item"><span>5. Concreción Curricular</span></a></li>
                            <li><a href="#Unidad2/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a></li>
                            <li><a href="#Unidad2/Evaluacion" class="submenu-item"><span>7. Evaluación</span></a></li>
                        </ul>
                    </li>
                    <li class="has-submenu">
                        <a href="#Unidad3" class="submenu-toggle"><span>Unidad 3: Defenderse o morir</span><i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="#Unidad3/Identificacion" class="submenu-item"><span>1. Datos de Identificación</span></a></li>
                            <li><a href="#Unidad3/Justificacion" class="submenu-item"><span>2. Justificación</span></a></li>
                            <li><a href="#Unidad3/PrincipiosDUA" class="submenu-item"><span>3. Principios DUA</span></a></li>
                            <li><a href="#Unidad3/Descripcion" class="submenu-item"><span>4. Descripción del Producto Final</span></a></li>
                            <li><a href="#Unidad3/Concrecion" class="submenu-item"><span>5. Concreción Curricular</span></a></li>
                            <li><a href="#Unidad3/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a></li>
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

  // Add event listeners after content is inserted
  setTimeout(() => {
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    const submenuItems = document.querySelectorAll('.submenu-item');

    // Handle submenu toggle clicks
    submenuToggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parent = toggle.parentElement;
        const submenu = parent.querySelector('.submenu');
        const icon = toggle.querySelector('i');

        // Check if this submenu is open
        const isOpen = parent.classList.contains('active');

        // Close all submenus first
        document.querySelectorAll('.has-submenu').forEach((item) => {
          item.classList.remove('active');
          const otherSubmenu = item.querySelector('.submenu');
          const otherIcon = item.querySelector('i');
          if (otherSubmenu) otherSubmenu.style.maxHeight = '0px';
          if (otherIcon) {
            otherIcon.classList.remove('fa-chevron-up');
            otherIcon.classList.add('fa-chevron-down');
          }
        });

        // If this submenu was closed, open it
        if (!isOpen) {
          parent.classList.add('active');
          submenu.style.maxHeight = submenu.scrollHeight + 'px';
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
          
          // Update URL to the main unit
          const href = toggle.getAttribute('href');
          if (href && href !== '#') {
            window.location.hash = href;
          }
        } else {
          // If it was open, go to inicio
          window.location.hash = '#inicio';
        }
      });
    });

    // Handle submenu item clicks
    submenuItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Update URL to the specific section
        const href = item.getAttribute('href');
        if (href && href !== '#') {
          window.location.hash = href;
          
          // Keep parent submenu open
          const parentSubmenu = item.closest('.has-submenu');
          if (parentSubmenu) {
            const submenu = parentSubmenu.querySelector('.submenu');
            const icon = parentSubmenu.querySelector('i');
            parentSubmenu.classList.add('active');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            if (icon) {
              icon.classList.remove('fa-chevron-down');
              icon.classList.add('fa-chevron-up');
            }
          }
        }
      });
    });
  }, 100);

  return template;
}

// Make Sidebar available globally
window.Sidebar = Sidebar;
