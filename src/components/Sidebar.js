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
              <li><a href="#Unidad1/Secuenciacion/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a></li>
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
              <li><a href="#Unidad2/Secuenciacion/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a></li>
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
              <li><a href="#Unidad3/Secuenciacion/Secuenciacion" class="submenu-item"><span>6. Secuenciación Didáctica</span></a></li>
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
      // Toggle submenu
      document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = toggle.parentElement;
          const submenu = parent.querySelector('.submenu');
          const icon = toggle.querySelector('i');
          
          // Close all other submenus
          document.querySelectorAll('.has-submenu').forEach(item => {
            if (item !== parent) {
              item.classList.remove('active');
              const otherSubmenu = item.querySelector('.submenu');
              const otherIcon = item.querySelector('i');
              if (otherSubmenu) otherSubmenu.style.maxHeight = '0px';
              if (otherIcon) {
                otherIcon.classList.remove('fa-chevron-up');
                otherIcon.classList.add('fa-chevron-down');
              }
            }
          });

          // Toggle current submenu
          parent.classList.toggle('active');
          if (submenu) {
            if (parent.classList.contains('active')) {
              submenu.style.maxHeight = submenu.scrollHeight + 'px';
              if (icon) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
              }
            } else {
              submenu.style.maxHeight = '0px';
              if (icon) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
              }
            }
          }

          // Update URL hash
          window.location.hash = toggle.getAttribute('href');
        });
      });

      // Toggle burger menu
      const burgerMenu = document.querySelector('.burger-menu');
      const sidebar = document.querySelector('.sidebar');
      
      if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
          burgerMenu.classList.toggle('active');
          sidebar.classList.toggle('active');
        });
      }

      // Close sidebar when clicking a link on mobile
      if (window.innerWidth <= 768) {
        document.querySelectorAll('.sidebar-menu a').forEach(link => {
          link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            burgerMenu.classList.remove('active');
          });
        });
      }
    }
  };
}

window.Sidebar = Sidebar;
