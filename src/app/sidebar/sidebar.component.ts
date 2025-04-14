import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isSidebarOpen = true;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('Initializing Sidebar component');
    
    // Initialize all submenus to be hidden
    document.querySelectorAll('.submenu').forEach(submenu => {
      (submenu as HTMLElement).style.maxHeight = '0';
    });

    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.handleRouteChange();
    });

    // Close all submenus when clicking Inicio
    const inicioLink = document.querySelector('a[routerLink="/inicio"]');
    if (inicioLink) {
      inicioLink.addEventListener('click', () => {
        this.closeAllSubmenus();
      });
    }

    // Add click handler for burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
      burgerMenu.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }
  }

  ngAfterViewInit() {
    // Log initial menu structure
    console.log('Initial menu structure:');
    document.querySelectorAll('.sidebar-menu > ul > li').forEach(item => {
      this.logMenuStructure(item);
    });
  }

  showPhasesMenu(secuenciacionItem: HTMLElement) {
    if (!secuenciacionItem) return;
    
    console.log('Attempting to show phases menu for:', secuenciacionItem.getAttribute('href'));
    
    const parentLi = secuenciacionItem.closest('li');
    if (!parentLi) return;

    const nestedSubmenu = parentLi.querySelector('.submenu-nested') as HTMLElement | null;
    if (!nestedSubmenu) return;
    
    console.log('Found nested submenu:', {
      display: nestedSubmenu.style.display,
      visibility: nestedSubmenu.style.visibility,
      opacity: nestedSubmenu.style.opacity
    });
    
    nestedSubmenu.style.maxHeight = `${nestedSubmenu.scrollHeight}px`;
    nestedSubmenu.style.display = 'block';
    nestedSubmenu.style.visibility = 'visible';
    nestedSubmenu.style.opacity = '1';
    
    // Show all phase elements
    const phaseElements = nestedSubmenu.querySelectorAll('.submenu-item');
    phaseElements.forEach(element => {
      const el = element as HTMLElement;
      el.style.maxHeight = '500px';
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = '1';
    });

    // Open parent menus
    let parent = secuenciacionItem.closest('.has-submenu') as HTMLElement | null;
    while (parent) {
      parent.classList.add('active');
      const parentSubmenu = parent.querySelector('.submenu') as HTMLElement | null;
      if (parentSubmenu) {
        parentSubmenu.style.maxHeight = `${parentSubmenu.scrollHeight}px`;
        parentSubmenu.style.display = 'block';
        parentSubmenu.style.visibility = 'visible';
        parentSubmenu.style.opacity = '1';
      }
      const nextParent = parent.parentElement;
      parent = nextParent ? nextParent.closest('.has-submenu') : null;
    }
  }

  toggleSubmenu(event: Event, submenuId: string) {
    event.preventDefault();
    event.stopPropagation();
  
    const toggle = event.currentTarget as HTMLElement;
    const parent = toggle.parentElement;
    if (!parent) {
      console.error('Parent element not found');
      return;
    }
  
    const submenu = parent.querySelector('.submenu') as HTMLElement | null;
    if (!submenu) {
      console.error('Submenu element not found');
      return;
    }
  
    const routerLink = toggle.getAttribute('routerLink');
    const isSecuenciacion = routerLink?.includes('secuenciacion') || submenuId === 'secuenciacion';
    console.log('[submenu] ✅ Is Secuenciacion:', isSecuenciacion);
  
    // Si ya está activo, lo cerramos
    if (parent.classList.contains('active')) {
      console.log('[submenu] 🔽 Closing submenu');
      parent.classList.remove('active');
      submenu.style.maxHeight = '0';
  
      if (isSecuenciacion) {
        const nestedSubmenu = parent.querySelector('.submenu-nested') as HTMLElement | null;
        if (nestedSubmenu) {
          nestedSubmenu.style.maxHeight = '0';
        }
      }
      return;
    }
  
    // Cerramos otros menús del mismo nivel
    const parentElement = parent.parentElement;
    if (parentElement) {
      const siblings = parentElement.querySelectorAll('.has-submenu');
      siblings.forEach(sibling => {
        if (sibling !== parent) {
          sibling.classList.remove('active');
          const siblingSubmenu = sibling.querySelector('.submenu') as HTMLElement | null;
          if (siblingSubmenu) {
            siblingSubmenu.style.maxHeight = '0';
          }
        }
      });
    }
  
    // Abrimos el actual
    parent.classList.add('active');
  
    if (isSecuenciacion) {
      console.log('[submenu] ✅ Opening parent menu');
    
      const nestedSubmenu = parent.querySelector('.submenu-nested') as HTMLElement | null;
      if (nestedSubmenu) {
        console.log('[submenu] ▶️ Opening nested submenu');
    
        // 👇 Evitamos la animación para que se expanda al instante
        nestedSubmenu.style.transition = 'none';
        nestedSubmenu.style.maxHeight = 'none';
        nestedSubmenu.style.visibility = 'hidden';
        nestedSubmenu.style.position = 'absolute';
        nestedSubmenu.style.zIndex = '-1';
        nestedSubmenu.style.height = 'auto';
    
        const nestedHeight = nestedSubmenu.scrollHeight;
    
        console.log('Nested scrollHeight (measured hidden):', nestedHeight);
    
        // Restauramos estilo real
        nestedSubmenu.style.transition = '';
        nestedSubmenu.style.visibility = '';
        nestedSubmenu.style.position = '';
        nestedSubmenu.style.zIndex = '';
        nestedSubmenu.style.height = '';
        nestedSubmenu.style.maxHeight = `${nestedHeight}px`;
        console.log('Nested maxHeight set:', nestedSubmenu.style.maxHeight);
    
        // Y ahora sí calculamos el scrollHeight completo del padre
        requestAnimationFrame(() => {
          const submenuHeight = submenu.scrollHeight;
          submenu.style.maxHeight = `${submenuHeight}px`;
          console.log('Parent scrollHeight after nested measured:', submenuHeight);
          console.log('Parent maxHeight final:', submenu.style.maxHeight);
        });
      }
    }
    
    
    else {
      console.log('[submenu] 🚪 No nested submenu');
      submenu.style.maxHeight = `${submenu.scrollHeight}px`;
    }
  
    // Expande ancestros si existen
    let currentElement: HTMLElement | null = parent;
    while (currentElement) {
      const parentMenu = currentElement.closest('.has-submenu') as HTMLElement | null;
      if (parentMenu && parentMenu !== parent) {
        parentMenu.classList.add('active');
        const parentSubmenu = parentMenu.querySelector('.submenu') as HTMLElement | null;
        if (parentSubmenu) {
          parentSubmenu.style.maxHeight = `${parentSubmenu.scrollHeight}px`;
          console.log('[submenu] ⤴️ Expanding ancestor submenu');
          console.log('[submenu] Ancestor maxHeight:', parentSubmenu.style.maxHeight);
        }
      }
      currentElement = parentMenu?.parentElement as HTMLElement | null;
    }
  }
  
  

  private handleRouteChange() {
    console.log('Handling route change');
    const currentPath = this.router.url;
    
    // Close all submenus first
    this.closeAllSubmenus();
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
    
    // Find the current active link
    const activeLink = document.querySelector(`a[routerLink="${currentPath}"]`) as HTMLElement | null;
    if (!activeLink) return;
    console.log('Active link found', activeLink);
    // Get all parent menus of the active link
    let currentElement = activeLink.closest('li') as HTMLElement | null;
    while (currentElement) {
      const parentMenu = currentElement.closest('.has-submenu') as HTMLElement | null;
      if (parentMenu) {
        console.log('Parent menu found', parentMenu);
        // Open the parent menu
        parentMenu.classList.add('active');
        const submenu = parentMenu.querySelector('.submenu') as HTMLElement | null;
        if (submenu) {
          console.log('Submenu found', submenu);
          submenu.style.maxHeight = `${submenu.scrollHeight}px`;
          console.log('Submenu height set', submenu.style.maxHeight);
        }
        
        // Only open secuenciacion submenu if we're actually in a secuenciacion page
        const secuenciacionLink = parentMenu.querySelector('a[routerLink*="secuenciacion"]');
        if (secuenciacionLink && currentPath.includes('secuenciacion')) {
          const nestedSubmenu = parentMenu.querySelector('.submenu-nested') as HTMLElement | null;
          if (nestedSubmenu) {
            console.log('Nested submenu found', nestedSubmenu);
            nestedSubmenu.style.maxHeight = `${nestedSubmenu.scrollHeight}px`;
            console.log('Nested submenu height set', nestedSubmenu.style.maxHeight);
          }
        }
      }
      currentElement = parentMenu?.parentElement as HTMLElement | null;
    }
  }

  private logMenuStructure(element: Element, prefix = '') {
    const submenu = element.querySelector('.submenu') as HTMLElement | null;
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
      this.logCSSProperties(element);
      Array.from(submenu.children).forEach(item => {
        this.logMenuStructure(item, prefix + '  ');
      });
    }
  }

  private logCSSProperties(element: Element) {
    const submenu = element.querySelector('.submenu') as HTMLElement | null;
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
  }

  private closeAllSubmenus() {
    // Get all menu items with submenus
    const allMenuItems = document.querySelectorAll('.has-submenu');
    
    // Close all menus
    allMenuItems.forEach(item => {
      item.classList.remove('active');
      const submenu = item.querySelector('.submenu') as HTMLElement | null;
      if (submenu) {
        submenu.style.maxHeight = '0';
      }
    });

    // Close all nested submenus
    const nestedSubmenus = document.querySelectorAll('.submenu-nested');
    nestedSubmenus.forEach(submenu => {
      const submenuElement = submenu as HTMLElement;
      submenuElement.style.maxHeight = '0';
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    const footer = document.querySelector('footer') as HTMLElement;
    const burgerMenu = document.querySelector('.burger-menu') as HTMLElement;

    if (sidebar && mainContent && footer && burgerMenu) {
      if (this.isSidebarOpen) {
        sidebar.style.transform = 'translateX(0)';
        mainContent.style.marginLeft = '250px';
        footer.style.left = '250px';
        burgerMenu.classList.remove('active');
      } else {
        sidebar.style.transform = 'translateX(-250px)';
        mainContent.style.marginLeft = '0';
        footer.style.left = '0';
        burgerMenu.classList.add('active');
      }
    }
  }
}
