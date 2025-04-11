function Sidebar() {
    return `
        <aside class="sidebar">
            <nav class="sidebar-menu">
                <ul>
                    <li><a href="#inicio"><span>Inicio</span></a></li>
                    <li class="has-submenu">
                        <a href="#Unidad1" class="submenu-toggle"><span>Unidad 1: La Paz es Compartir</span><i class="fas fa-chevron-down"></i></a>
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
                    <li class="has-submenu">
                        <a href="#Unidad2" class="submenu-toggle"><span>Unidad 2: Una nube sin agua</span><i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="#Unidad2/Identificacion"><span>1. Datos de Identificación</span></a></li>
                            <li><a href="#Unidad2/Justificacion"><span>2. Justificación</span></a></li>
                            <li><a href="#Unidad2/PrincipiosDUA"><span>3. Principios DUA</span></a></li>
                            <li><a href="#Unidad2/Descripcion"><span>4. Descripción del Producto Final</span></a></li>
                            <li><a href="#Unidad2/Concrecion"><span>5. Concreción Curricular</span></a></li>
                            <li><a href="#Unidad2/Secuenciacion"><span>6. Secuenciación Didáctica</span></a></li>
                            <li><a href="#Unidad2/Evaluacion"><span>7. Evaluación</span></a></li>
                        </ul>
                    </li>
                    <li class="has-submenu">
                        <a href="#Unidad3" class="submenu-toggle"><span>Unidad 3: Defenderse o morir</span><i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="#Unidad3/Identificacion"><span>1. Datos de Identificación</span></a></li>
                            <li><a href="#Unidad3/Justificacion"><span>2. Justificación</span></a></li>
                            <li><a href="#Unidad3/PrincipiosDUA"><span>3. Principios DUA</span></a></li>
                            <li><a href="#Unidad3/Descripcion"><span>4. Descripción del Producto Final</span></a></li>
                            <li><a href="#Unidad3/Concrecion"><span>5. Concreción Curricular</span></a></li>
                            <li><a href="#Unidad3/Secuenciacion"><span>6. Secuenciación Didáctica</span></a></li>
                            <li><a href="#Unidad3/Evaluacion"><span>7. Evaluación</span></a></li>
                        </ul>
                    </li>
                    <li class="has-submenu">
                        <a href="#Anexos" class="submenu-toggle"><span>Anexos</span><i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="#Anexos/Modulo"><span>El módulo</span></a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    `;

    // Añadir el evento después de que el contenido se haya insertado
    setTimeout(() => {
        const submenuToggles = document.querySelectorAll('.submenu-toggle');
        
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = toggle.parentElement;
                const submenu = parent.querySelector('.submenu');
                const icon = toggle.querySelector('i');
                
                // Si el menú está activo, lo cerramos
                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                    submenu.style.maxHeight = '0px';
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                } else {
                    // Cerrar otros submenús primero
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
                    
                    // Abrir el submenú actual
                    parent.classList.add('active');
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }

                // Actualizar el hash en la URL
                const href = toggle.getAttribute('href');
                if (href && href !== '#') {
                    window.location.hash = href;
                }
            });
        });
    }, 100);
} 