'use strict';
// ........................................................................Header kép (Stioppi felirat) animálása, szín váltás
document.addEventListener('DOMContentLoaded', function () {
  // Az időköz, amikor a kép váltakozik (ms-ben)
  const interval = 10000; // 5 másodperc

  // Képek forrásainak listája
  const imageSources = [
    './pictures/header_logo1.png',
    './pictures/header_logo2.png',
    './pictures/header_logo3.png',
    './pictures/header_logo4.png',
  ];

  const headerImg = document.querySelector('.header-img');
  let currentIndex = 0;

  // Függvény a kép változtatására
  function changeImage() {
    // Csökkentsük az átlátszóságot
    headerImg.style.opacity = 0;

    // Várjunk egy rövid időt, mielőtt beállítanánk az új kép forrását
    setTimeout(() => {
      headerImg.src = imageSources[currentIndex];
      currentIndex = (currentIndex + 1) % imageSources.length; // Következő indexre ugrás, ciklikusan

      // Visszaállítjuk az átlátszóságot
      headerImg.style.opacity = 1;
    }, 900); // 300 milliszekundum (vagyis 0.3 másodperc) várakozás
  }

  // Első kép beállítása
  changeImage();

  // Időzítő létrehozása a kép váltakozásához
  setInterval(changeImage, interval);
});
