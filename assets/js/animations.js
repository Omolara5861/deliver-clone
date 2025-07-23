// GSAP entrance animations
window.addEventListener('load', () => {
  gsap.from('.navbar', { duration: 0.8, y: -50, opacity: 0 });
  gsap.from('main h1', { duration: 1, x: -100, opacity: 0, delay: 0.5 });
  gsap.from('main p', { duration: 1, x: -100, opacity: 0, delay: 0.7 });
  gsap.from('main .btn', { duration: 1, scale: 0.8, opacity: 0, delay: 0.9 });
  gsap.from('main img', { duration: 1.2, x: 100, opacity: 0, delay: 1 });
});
