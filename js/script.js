'use strict';

// .......................................................................... Header menürendszer, lenyíló menük
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelectorAll('nav a').forEach((item) => {
      item.classList.remove('selected');
    });

    this.classList.add('selected');

    const targetElement = document.querySelector(this.getAttribute('href'));
    const headerHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  });
});

// .......................................................................... Header kép (Stioppi felirat) animálása
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
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelector('.gallery-images');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const imageWidth = galleryImages.firstElementChild.clientWidth + 10;
  let currentPosition = 0;

  nextButton.addEventListener('click', () => {
    if (currentPosition > -(galleryImages.childElementCount - 5) * imageWidth) {
      currentPosition -= imageWidth;
      galleryImages.style.transform = `translateX(${currentPosition}px)`;
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentPosition < 0) {
      currentPosition += imageWidth;
      galleryImages.style.transform = `translateX(${currentPosition}px)`;
    }
  });
});

// .......................................................................... Teljes képernyős nézet
const images = [
  './pictures/main_01.jpg',
  './pictures/main_02.jpg',
  './pictures/main_03.jpg',
  './pictures/main_04.jpg',
  './pictures/main_05.jpg',
  './pictures/main_06.jpg',
  './pictures/main_07.jpg',
  './pictures/main_08.jpg',
  './pictures/main_09.jpg',
  './pictures/main_10.jpg',
];
let currentIndex = 0;

function updateFullScreenImage(index) {
  document.getElementById('fullImage').src = images[index];
}

function nextImageFullScreen() {
  currentIndex = (currentIndex + 1) % images.length;
  updateFullScreenImage(currentIndex);
}

function prevImageFullScreen() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateFullScreenImage(currentIndex);
}

function fullView(imagesArray, ImgLink) {
  document.getElementById('fullImage').src = ImgLink;
  document.getElementById('fullImageView').style.display = 'block';
  images = [...imagesArray];
}

function closeFullView() {
  document.getElementById('fullImageView').style.display = 'none';
}

// .......................................................................... Audió galéria
const videos = [
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
  videoContainer.innerHTML += `
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
    </div>`;
});

const audios = [
  {
    src: './audio/01.mp3',
    image: './pictures/audio_picture.jpg',
    author: 'Szerző neve',
    title: 'Mű címe',
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

// .......................................................................... Aktuális könyszerű lapozás
let currentPage = 1;
const totalPages = 4;

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
