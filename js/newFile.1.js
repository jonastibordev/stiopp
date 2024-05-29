'use strict';
/* ...........................................................................Header menürendszer, lenyíló menük készítése... menühöz...*/
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Megakadályozza a link alapértelmezett működését

    // Törölje az összes menüpontra vonatkozóan a .selected osztályt
    document.querySelectorAll('nav a').forEach((item) => {
      item.classList.remove('selected');
    });

    // Adjuk hozzá a kattintott elemhez a .selected osztályt
    this.classList.add('selected');

    // Az anchor elem href attribútumának értéke
    const target = this.getAttribute('href');

    // A cél elem kiválasztása
    const targetElement = document.querySelector(target);

    // A h2 elem kiválasztása az adott szakaszon belül
    const headingElement = targetElement.querySelector('h2');

    // Meghatározzuk a header magasságát
    const headerHeight = document.querySelector('header').offsetHeight;

    // Görgetés a kiválasztott szakaszhoz úgy, hogy a h2 elem 20px-el legyen a header alatt
    window.scrollTo({
      top: targetElement.offsetTop - headerHeight - 50,
      behavior: 'smooth', // Sima görgetési animáció
    });
  });
});
