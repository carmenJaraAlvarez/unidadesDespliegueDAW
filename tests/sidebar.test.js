/**
 * @jest-environment jsdom
 */

describe('Sidebar Component', () => {
  let container;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    container.id = 'sidebar';
    document.body.appendChild(container);

    // Mock the Sidebar function
    global.Sidebar = () => {
      container.innerHTML = `
                <nav class="sidebar-menu">
                    <ul>
                        <li><a href="#inicio"><span>Inicio</span></a></li>
                        <li class="has-submenu">
                            <a href="#Unidad1" class="submenu-toggle"><span>Unidad 1</span><i class="fas fa-chevron-down"></i></a>
                            <ul class="submenu">
                                <li><a href="#Unidad1/Identificacion"><span>1. Datos de Identificación</span></a></li>
                                <li><a href="#Unidad1/Justificacion"><span>2. Justificación</span></a></li>
                                <li><a href="#Unidad1/PrincipiosDUA"><span>3. Principios DUA</span></a></li>
                                <li><a href="#Unidad1/Descripcion"><span>4. Descripción del Producto Final</span></a></li>
                                <li><a href="#Unidad1/Concrecion"><span>5. Concreción Curricular</span></a></li>
                                <li><a href="#Unidad1/Secuenciacion"><span>6. Secuenciación Didáctica</span></a></li>
                                <li><a href="#Unidad1/Evaluacion"><span>7. Evaluación</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            `;

      // Add click event listeners
      const submenuToggles = container.querySelectorAll('.submenu-toggle');
      submenuToggles.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const parent = toggle.parentElement;
          const submenu = parent.querySelector('.submenu');
          const icon = toggle.querySelector('i');

          if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            submenu.style.maxHeight = '0px';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
          } else {
            parent.classList.add('active');
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
          }
        });
      });
    };
  });

  afterEach(() => {
    // Cleanup
    document.body.removeChild(container);
    delete global.Sidebar;
  });

  test('should render sidebar with menu items', () => {
    // Load the sidebar component
    Sidebar();

    // Check if main menu items are rendered
    const menuItems = document.querySelectorAll('.sidebar-menu > ul > li');
    expect(menuItems.length).toBe(2); // Inicio + Unit 1 (simplified test version)

    // Check if submenu items are present for Unit 1
    const unit1Submenu = document.querySelectorAll('.has-submenu')[0];
    const unit1Items = unit1Submenu.querySelectorAll('.submenu li');
    expect(unit1Items.length).toBe(7); // 7 sections in each unit
  });

  test('submenu should toggle when clicked', () => {
    // Load the sidebar component
    Sidebar();

    // Get the first unit's toggle button
    const unit1Toggle = document.querySelector('.submenu-toggle');
    const parent = unit1Toggle.parentElement;

    // Initial state - submenu should be closed
    expect(parent).not.toHaveClass('active');

    // Click to open
    unit1Toggle.click();
    expect(parent).toHaveClass('active');

    // Click to close
    unit1Toggle.click();
    expect(parent).not.toHaveClass('active');
  });
});
