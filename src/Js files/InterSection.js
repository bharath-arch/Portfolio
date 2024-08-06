// Intersection.js

export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  export function observeElements(selector) {
    const hiddenElements = document.querySelectorAll(selector);
    hiddenElements.forEach((el) => observer.observe(el));
  }
  