// Import Jest DOM matchers
require('@testing-library/jest-dom');

// Set up any global test environment configuration here
global.window.location.hash = '';

// Mock functions that might not be available in jsdom
window.scrollTo = jest.fn();

// Add any custom matchers or global test utilities here
expect.extend({
  toHaveProperSubmenuState(element, isOpen) {
    const hasActiveClass = element.classList.contains('active');
    const submenu = element.querySelector('.submenu');
    const icon = element.querySelector('i');

    const pass = isOpen
      ? hasActiveClass &&
        submenu.style.maxHeight !== '0px' &&
        icon.classList.contains('fa-chevron-up')
      : !hasActiveClass &&
        submenu.style.maxHeight === '0px' &&
        icon.classList.contains('fa-chevron-down');

    return {
      pass,
      message: () => `expected element to ${isOpen ? 'be' : 'not be'} in an open submenu state`,
    };
  },
});
