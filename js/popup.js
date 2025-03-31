'use strict';
let w_h = window.innerHeight;
document.documentElement.style.setProperty('--w_h', w_h + 'px');
const img = document.querySelectorAll('li img');
function popUpimg (img_src) {
  const overlay = document.createElement('div');
  overlay.id = "overlay";
  overlay.classList.add('cover-lb', 'center');
  /* cover-main部分 */
  const cover_main = document.createElement('div');
  cover_main.classList.add('cover-main');
  const cover_main_img = document.createElement('img');
  cover_main_img.src = img_src;
  cover_main.appendChild(cover_main_img);
  overlay.appendChild(cover_main);
  document.body.appendChild(overlay);
  overlay.classList.add('show');
  cover_main_img.classList.add('scale');
  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    cover_main_img.classList.remove('scale');
    overlay.addEventListener('transitionend', () => {
      overlay.remove();
    });
  });
}
img.forEach( img => {
  img.addEventListener('click', e => {
    e.preventDefault();
    popUpimg(img.src);
  });
});