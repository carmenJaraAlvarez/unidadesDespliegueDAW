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
    if (!parent) return;

    const submenu = parent.querySelector('.submenu') as HTMLElement | null;
    if (!submenu) return;

    const href = toggle.getAttribute('href');
    const isSecuenciacion = href?.includes('Secuenciacion');

    // If menu is active, close it
    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
      submenu.style.maxHeight = '0';
      
      if (isSecuenciacion) {
        const phaseElements = document.querySelectorAll('.submenu-nested .submenu-item');
        phaseElements.forEach(element => {
          const el = element as HTMLElement;
          el.style.maxHeight = '0';
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.style.opacity = '0';
        });
      }
      return;
    }

    // Close other menus at same level
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

    // Open clicked menu
    parent.classList.add('active');
    
    // Calculate total height including nested submenus
    const calculateTotalHeight = (menu: HTMLElement): number => {
      let totalHeight = 0;
      Array.from(menu.children).forEach(child => {
        const childElement = child as HTMLElement;
        totalHeight += childElement.offsetHeight;
        
        // If this item has a nested submenu, add its height too
        const nestedSubmenu = childElement.querySelector('.submenu-nested') as HTMLElement | null;
        if (nestedSubmenu) {
          totalHeight += calculateTotalHeight(nestedSubmenu);
        }
      });
      return totalHeight;
    };

    const totalHeight = calculateTotalHeight(submenu);
    submenu.style.maxHeight = `${totalHeight}px`;

    // Handle Secuenciacion special case
    if (isSecuenciacion) {
      const phaseElements = document.querySelectorAll('.submenu-nested .submenu-item');
      phaseElements.forEach(element => {
        const el = element as HTMLElement;
        el.style.maxHeight = '500px';
        el.style.display = 'block';
        el.style.visibility = 'visible';
        el.style.opacity = '1';
      });
    }

    // Keep parent menus open
    let currentParent = parent.parentElement?.closest('.has-submenu') as HTMLElement | null;
    while (currentParent) {
      currentParent.classList.add('active');
      const parentSubmenu = currentParent.querySelector('.submenu') as HTMLElement | null;
      if (parentSubmenu) {
        const parentTotalHeight = calculateTotalHeight(parentSubmenu);
        parentSubmenu.style.maxHeight = `${parentTotalHeight}px`;
      }
      const nextParent = currentParent.parentElement;
      currentParent = nextParent ? nextParent.closest('.has-submenu') as HTMLElement | null : null;
    }
  }

  private handleRouteChange() {
    const currentPath = this.router.url;
    const isSecuenciacionPage = currentPath.includes('Secuenciacion');
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
    
    if (isSecuenciacionPage) {
      const secuenciacionItem = document.querySelector(`a[href="${currentPath}"]`) as HTMLElement | null;
      if (secuenciacionItem) {
        this.showPhasesMenu(secuenciacionItem);
      }
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
}
