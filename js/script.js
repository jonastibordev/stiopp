'use strict';

// Header menu with smooth scrolling
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    document
      .querySelectorAll('nav a')
      .forEach((item) => item.classList.remove('selected'));
    this.classList.add('selected');

    const targetElement = document.querySelector(this.getAttribute('href'));
    const headerHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  });
});

// Header image animation
document.addEventListener('DOMContentLoaded', () => {
  const interval = 10000;
  const imageSources = [
    './pictures/header_logo1.png',
    './pictures/header_logo2.png',
    './pictures/header_logo3.png',
    './pictures/header_logo4.png',
  ];
  const headerImg = document.querySelector('.header-img');
  let currentIndex = 0;

  function changeImage() {
    headerImg.style.opacity = 0;
    setTimeout(() => {
      headerImg.src = imageSources[currentIndex];
      currentIndex = (currentIndex + 1) % imageSources.length;
      headerImg.style.opacity = 1;
    }, 900);
  }

  changeImage();
  setInterval(changeImage, interval);
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

// Hide menu when a link is clicked
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
  });
});

// .......................................................................... Archívum menü könyvespolc, könyvek
document.addEventListener('DOMContentLoaded', () => {
  const years = Array.from({ length: 21 }, (_, i) => 2024 - i);
  const backgrounds = [
    './pictures/arch_book2.jpg',
    './pictures/arch_book3.jpg',
    './pictures/arch_book4.jpg',
    './pictures/arch_book5.jpg',
    './pictures/arch_book6.jpg',
    './pictures/arch_book7.jpg',
  ];

  const bookshelf = document.querySelector('.bookshelf');
  years.forEach((year, index) => {
    const book = document.createElement('div');
    book.classList.add('book');
    book.id = `book${index + 1}`;
    book.style.backgroundImage = `url('${
      backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }')`;

    // Véletlenszerű magasság és szélesség generálása
    const minHeight = 190; // Minimális magasság
    const maxHeight = 205; // Maximális magasság
    const minWidth = 90; // Minimális szélesség
    const maxWidth = 120; // Maximális szélesség

    const randomHeight =
      Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    const randomWidth =
      Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

    book.style.height = `${randomHeight}px`;
    book.style.width = `${randomWidth}px`;

    book.innerHTML = `<a href="#" class="book-link">${year}</a>`;
    bookshelf.appendChild(book);

    book.addEventListener('click', (event) => {
      event.preventDefault();
      displayContent(book.id);
    });
  });
});

function displayContent(bookId) {
  const pages = ['book1', 'book2', 'book3'];
  if (pages.includes(bookId)) {
    window.location.href = 'tortenet.html';
  } else {
    alert('Nincs ilyen könyv');
  }
}

// .......................................................................... Gomb a lap tetejére
window.addEventListener('scroll', () => {
  document.getElementById('scrollToTopBtn').style.display =
    window.scrollY > 580 ? 'block' : 'none';
});

document.getElementById('scrollToTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// .......................................................................... Képgaléria
let currentImageIndex;
const images = document.querySelectorAll('.gallery-images img');

function fullView(img) {
  const fullImageView = document.getElementById('fullImageView');
  const fullImage = document.getElementById('fullImage');
  fullImageView.style.display = 'block';
  fullImage.src = img.src;
  currentImageIndex = Array.from(images).indexOf(img);
}

function closeFullView() {
  document.getElementById('fullImageView').style.display = 'none';
}

function prevImageFullScreen() {
  currentImageIndex =
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  document.getElementById('fullImage').src = images[currentImageIndex].src;
}

function nextImageFullScreen() {
  currentImageIndex =
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  document.getElementById('fullImage').src = images[currentImageIndex].src;
}

// Carousel functionality
document.getElementById('prevButton').addEventListener('click', () => {
  const gallery = document.querySelector('.gallery-images');
  gallery.insertBefore(gallery.lastElementChild, gallery.firstElementChild);
});

document.getElementById('nextButton').addEventListener('click', () => {
  const gallery = document.querySelector('.gallery-images');
  gallery.appendChild(gallery.firstElementChild);
});

// ..........................................................................Video,  Audió galéria
const videos = [
  {
    src: 'https://www.youtube-nocookie.com/embed/cPaSjIPlpiY',
    title: '.',
    author: 'Bepi De Marzi',
    description: 'Signore delle cime',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/2W9UzRmbV_s',
    title: '.',
    author: 'Aretino Bivi',
    description: 'Animam meam dilectam tradidit',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/gmRHNCXl8Kw',
    title: '.',
    author: 'Orazio Vecchi',
    description: 'Gioite tutti',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/CEo7S1_CAWY',
    title: '.',
    author: 'Thomas Tallis',
    description: 'If ye love me',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/lCYTQgR_Ghk',
    title: '.',
    author: 'Claude Goudimel',
    description: 'zsoltár',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/6vKM_jU2ucs',
    title: '.',
    author: 'Liszt Ferenc',
    description: 'Salutaris hostia',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/EkdBnsTrNHA',
    title: '.',
    author: 'Kodály Zoltán',
    description: 'Adventi ének',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/0PiXvcMcEw8',
    title: '.',
    author: 'Huzella Elek',
    description: 'Virgo prudentissima',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/Tc_TW64qVCo',
    title: '.',
    author: 'Bárdos Lajos',
    description: 'A pusztában kiáltó szava',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/OZWBy-RPdII',
    title: '.',
    author: 'Orbán György',
    description: 'Ave Maria',
  },

  // További videók...
];

const videoContainer = document.getElementById('videoContainer');
videos.forEach((video) => {
  videoContainer.innerHTML += `
    <div class="video">
  <iframe
    width="1280"
    height="720"
    src="${video.src}"
    title="${video.title}"
    frameborder="0"
    allow="encrypted-media; picture-in-picture"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  <div class="video-description">
    <h3>${video.author}</h3>
    <p>${video.description}</p>
  </div>
</div>`;
});

const audios = [
  {
    src: './audio/05 Cortonai dícséret - Sia laudato San Francesco.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Cortonai dícséret',
    title: ' Sia laudato San Francesco',
  },
  {
    src: './audio/03 Josquin In te Domine 18 12 18.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Josquin des Prez',
    title: 'In te domine speravi',
  },
  {
    src: './audio/04 Victoria O magnum misterium 18 12 18.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Tomás Luis de Victoria',
    title: 'O magnum misterium',
  },
  {
    src: './audio/01 Tomás Luis de Victoria - Ave Maria.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Tomás Luis de Victoria',
    title: 'Ave Maria',
  },
  {
    src: './audio/03 Benjamin Britten - Deo gratias tétel A Ceremony of Carols.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Benjamin Britten',
    title: 'A Ceremony of Carols, Deo gratias',
  },
  {
    src: './audio/Bartók Béla - Kórusdal Murányi E átirat.mp3',
    image: './pictures/bartók_kórusdal.jpg',
    author: 'Bartók Béla',
    title: 'Kórusdal Murányi Eszter kórus feldolgozása',
  },
  {
    src: './audio/Bartók Béla - Tót legények tánca Murányi E Faragó D átirat.mp3',
    image: './pictures/bartók_tóth_legények.jpg',
    author: 'Bartók Béla',
    title:
      'Tót legények tánca Murányi Eszter kórus feldolgozása, szöveg: Faragó Dániel',
  },
  {
    src: './audio/Borisz Hrisztov - Rcsenyica.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Borisz Hrisztov',
    title: 'Rcsenyica',
  },
  {
    src: './audio/Karai József - Ugrótánc.mp3',
    image: './pictures/karai_ugrótánc.jpg',
    author: 'Karai József',
    title: 'Ugrótánc',
  },
  {
    src: './audio/Rick Róbert - Egy ágy fölött.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Rick Róbert',
    title: 'Egy ágy fölött',
  },

  // További audio elemek...
];

const audioContainer = document.getElementById('audioContainer');
audios.forEach((audio) => {
  audioContainer.innerHTML += `
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
    </div>`;
});

// .......................................................................... Térkép beszúrása
const mapLink = document.getElementById('mapLink');
mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Bécsikapu tér'
)}`;

// .......................................................................... Média könyszerű lapozás
let currentPage = 1;
const totalPages = 5;

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.add('flipped');
    currentPage++;
  }
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.remove('flipped');
  }
});

// .......................................................................... Form, csak az első rádógomb jó küldéshez
document.getElementById('myForm').addEventListener('submit', function (event) {
  let isOption1Selected = document.getElementById('option1').checked;
  if (!isOption1Selected) {
    alert(
      'Az üzenetet csak akkor lehet elküldeni, ha az első opció van kiválasztva.'
    );
    event.preventDefault();
  }
});

//Felrobbant hatás
document.addEventListener('DOMContentLoaded', function () {
  const title = document.getElementById('stiopp');
  const text = title.textContent.replace(/\./g, ' .'); // Remove dots from the text content
  title.textContent = ' ';

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.setProperty('--x', `${Math.random() * 900 - 100}px`);
    span.style.setProperty('--y', `${Math.random() * 300 - 100}px`);
    span.style.animationDelay = `${i * 0.2}s`;
    title.appendChild(span);
  }
});
