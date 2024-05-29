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

// ........................................................................Header kép (Stioppi felirat) animálása, szín váltás
document.addEventListener('DOMContentLoaded', function () {
  // Az időköz, amikor a kép váltakozik (ms-ben)
  const interval = 10000; // 5 másodperc

  // Képek forrásainak listája
  const imageSources = [
    '/pictures/header_logo1.png',
    '/pictures/header_logo2.png',
    '/pictures/header_logo3.png',
    '/pictures/header_logo4.png',
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

/* ...........................................................................Archívum menüben lévő könyvespolc, könyvek működése...*/
document.addEventListener('DOMContentLoaded', function () {
  const years = Array.from({ length: 21 }, (_, i) => 2024 - i);
  const backgrounds = [
    '/pictures/arch_book2.jpg',
    '/pictures/arch_book3.jpg',
    '/pictures/arch_book4.jpg',
    '/pictures/arch_book5.jpg',
    '/pictures/arch_book6.jpg',
    '/pictures/arch_book7.jpg',
  ];

  years.forEach((year, index) => {
    const bookshelf = document.querySelector('.bookshelf');
    const book = document.createElement('div');
    book.classList.add('book');
    book.id = `book${index + 1}`;
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    book.style.backgroundImage = `url('${randomBackground}')`;
    book.innerHTML = `<a href="#" class="book-link">${year}</a>`;
    bookshelf.appendChild(book);

    book.addEventListener('click', function (event) {
      event.preventDefault();
      displayContent(this.id);
    });
  });
});

function displayContent(bookId) {
  switch (bookId) {
    case 'book1':
    case 'book2':
    case 'book3':
      window.location.href = 'http://127.0.0.1:5500/tortenet.html';
      break;
    default:
      alert('Nincs ilyen könyv');
  }
}

/* ........................................................................................................................Gomb a lap tetejére...*/
// Amikor a felhasználó elkezd görgetni, ellenőrizzük, hogy megjelenítsük-e a gombot
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 580 ||
    document.documentElement.scrollTop > 580
  ) {
    document.getElementById('scrollToTopBtn').style.display = 'block';
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none';
  }
}

// Amikor a gombra kattintanak, görgetjük a lap tetejére
document
  .getElementById('scrollToTopBtn')
  .addEventListener('click', function () {
    scrollToTop();
  });

function scrollToTop() {
  document.body.scrollTop = 0; // Firefox és Chrome
  document.documentElement.scrollTop = 0; // IE, Edge, Safari
}

/* ........................................................................................................................Képgaléria...*/
document.addEventListener('DOMContentLoaded', function () {
  const galleryImages = document.querySelector('.gallery-images');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  const imageWidth = galleryImages.firstElementChild.clientWidth + 10; // Az első kép szélessége + margin-right

  let currentPosition = 0;

  nextButton.addEventListener('click', function () {
    if (currentPosition > -(galleryImages.childElementCount - 5) * imageWidth) {
      currentPosition -= imageWidth;
      galleryImages.style.transform = `translateX(${currentPosition}px)`;
    }
  });

  prevButton.addEventListener('click', function () {
    if (currentPosition < 0) {
      currentPosition += imageWidth;
      galleryImages.style.transform = `translateX(${currentPosition}px)`;
    }
  });
});

// Teljes képenyős nézet...

let images = [
  '/pictures/main_01.jpg',
  '/pictures/main_02.jpg',
  '/pictures/main_03.jpg',
  '/pictures/main_04.jpg',
  '/pictures/main_05.jpg',
  '/pictures/main_06.jpg',
  '/pictures/main_07.jpg',
  '/pictures/main_08.jpg',
  '/pictures/main_09.jpg',
  '/pictures/main_10.jpg',
];

let currentIndex = 0;

function nextImageFullScreen() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('fullImage').src = images[currentIndex];
}

function prevImageFullScreen() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('fullImage').src = images[currentIndex];
}

function fullView(imagesArray, ImgLink) {
  document.getElementById('fullImage').src = ImgLink;
  document.getElementById('fullImageView').style.display = 'block';
  images = imagesArray.slice(); // Frissítsd az images tömböt az átadott tömbbel
}

function closeFullView() {
  document.getElementById('fullImageView').style.display = 'none';
}

/* ........................................................................................................................Audió galéria...*/
// Videók generálása
const videos = [
  {
    src: 'https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy',
    title: 'Laude novella',
    author: 'Szerző neve',
    description: 'Mű címe',
  },
  {
    src: 'https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy',
    title: 'Laude novella',
    author: 'Szerző neve',
    description: 'Mű címe',
  },
  {
    src: 'https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy',
    title: 'Laude novella',
    author: 'Szerző neve',
    description: 'Mű címe',
  },
  {
    src: 'https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy',
    title: 'Laude novella',
    author: 'Szerző neve',
    description: 'Mű címe',
  },
  {
    src: 'https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy',
    title: 'Laude novella',
    author: 'Szerző neve',
    description: 'Mű címe',
  },
  // További videók...
];

const videoContainer = document.getElementById('videoContainer');
videos.forEach((video) => {
  const videoHTML = `
      <div class="video">
        <iframe
          width="1280"
          height="720"
          src="${video.src}"
          title="${video.title}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div class="video-description">
          <h3>${video.author}</h3>
          <p>${video.description}</p>
        </div>
      </div>
    `;
  videoContainer.innerHTML += videoHTML;
});

// Audio elemek generálása
const audios = [
  {
    src: '/audio/01.mp3',
    image: '/pictures/audio_picture.jpg',
    author: 'Szerző neve',
    title: 'Mű címe',
  },
  {
    src: '/audio/01.mp3',
    image: '/pictures/audio_picture.jpg',
    author: 'Szerző neve',
    title: 'Mű címe',
  },
  {
    src: '/audio/01.mp3',
    image: '/pictures/audio_picture.jpg',
    author: 'Szerző neve',
    title: 'Mű címe',
  },
  {
    src: '/audio/01.mp3',
    image: '/pictures/audio_picture.jpg',
    author: 'Szerző neve',
    title: 'Mű címe',
  },
  {
    src: '/audio/01.mp3',
    image: '/pictures/audio_picture.jpg',
    author: 'Szerző neve',
    title: 'Mű címe',
  },
  // További audio elemek...
];

const audioContainer = document.getElementById('audioContainer');
audios.forEach((audio) => {
  const audioHTML = `
      <div class="audio-item">
        <img src="${audio.image}" alt="Audio kép" />
        <div class="audio-description">
          <h3>${audio.author}</h3>
          <p>${audio.title}</p>
        </div>
        <div class="audio-controls">
          <audio controls>
            <source src="${audio.src}" type="audio/mpeg" />
            A böngésződ nem támogatja az audio elemet.
          </audio>
        </div>
      </div>
    `;
  audioContainer.innerHTML += audioHTML;
});

// Térkép beszúrása
let cim = 'Bécsikapu tér';

// Az URL enkódolása
let encodedCim = encodeURIComponent(cim);

// Az URL beállítása
let url = 'https://www.google.com/maps/search/?api=1&query=' + encodedCim;

// A link beállítása
document.getElementById('mapLink').setAttribute('href', url);
