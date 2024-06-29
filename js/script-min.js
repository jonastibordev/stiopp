"use strict";function displayContent(e){["book1","book2","book3"].includes(e)?window.location.href="tortenet.html":alert("Nincs ilyen könyv")}let currentImageIndex;document.querySelectorAll("nav a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelectorAll("nav a").forEach((e=>{e.classList.remove("selected")})),this.classList.add("selected");const t=document.querySelector(this.getAttribute("href")),n=document.querySelector("header").offsetHeight;window.scrollTo({top:t.offsetTop-n,behavior:"smooth"})}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=["./pictures/header_logo1.png","./pictures/header_logo2.png","./pictures/header_logo3.png","./pictures/header_logo4.png"],t=document.querySelector(".header-img");let n=0;function o(){t.style.opacity=0,setTimeout((()=>{t.src=e[n],n=(n+1)%e.length,t.style.opacity=1}),900)}o(),setInterval(o,1e4)})),document.addEventListener("DOMContentLoaded",(()=>{const e=Array.from({length:21},((e,t)=>2024-t)),t=["./pictures/arch_book2.jpg","./pictures/arch_book3.jpg","./pictures/arch_book4.jpg","./pictures/arch_book5.jpg","./pictures/arch_book6.jpg","./pictures/arch_book7.jpg"],n=document.querySelector(".bookshelf");e.forEach(((e,o)=>{const i=document.createElement("div");i.classList.add("book"),i.id=`book${o+1}`,i.style.backgroundImage=`url('${t[Math.floor(Math.random()*t.length)]}')`,i.innerHTML=`<a href="#" class="book-link">${e}</a>`,n.appendChild(i),i.addEventListener("click",(e=>{e.preventDefault(),displayContent(i.id)}))}))})),window.addEventListener("scroll",(()=>{document.getElementById("scrollToTopBtn").style.display=window.scrollY>580?"block":"none"})),document.getElementById("scrollToTopBtn").addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));const images=document.querySelectorAll(".gallery-images img");function fullView(e){const t=document.getElementById("fullImageView"),n=document.getElementById("fullImage");t.style.display="block",n.src=e.src,currentImageIndex=Array.from(images).indexOf(e)}function closeFullView(){document.getElementById("fullImageView").style.display="none"}function prevImageFullScreen(){currentImageIndex=0===currentImageIndex?images.length-1:currentImageIndex-1,document.getElementById("fullImage").src=images[currentImageIndex].src}function nextImageFullScreen(){currentImageIndex=currentImageIndex===images.length-1?0:currentImageIndex+1,document.getElementById("fullImage").src=images[currentImageIndex].src}document.getElementById("prevButton").addEventListener("click",(()=>{const e=document.querySelector(".gallery-images");e.insertBefore(e.lastElementChild,e.firstElementChild)})),document.getElementById("nextButton").addEventListener("click",(()=>{const e=document.querySelector(".gallery-images");e.appendChild(e.firstElementChild)}));const videos=[{src:"https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy",title:".",author:"Szerző neve",description:"Laude novella"},{src:'https://www.youtube.com/embed/6vKM_jU2ucs"',title:".",author:"Liszt Ferenc",description:"O Salutaris Hostia"},{src:"https://www.youtube.com/embed/QWr5ZEOWxVs",title:".",author:"Dobri Hristov",description:"Rcenica (Legénybúcsú)"},{src:"https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy",title:"Laude novella",author:"Szerző neve",description:"Negyedik Mű"},{src:"https://www.youtube.com/embed/u58N8A9Ju2A?list=PLVqnjxCbTHHP3e_5CQD1-gxO5xNOioQXy",title:"Laude novella",author:"Szerző neve",description:"Ötödik Mű"}],videoContainer=document.getElementById("videoContainer");videos.forEach((e=>{videoContainer.innerHTML+=`\n    <div class="video">\n      <iframe\n        width="1280"\n        height="720"\n        src="${e.src}"\n        title="${e.title}"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n        referrerpolicy="strict-origin-when-cross-origin"\n        allowfullscreen\n      ></iframe>\n      <div class="video-description">\n        <h3>${e.author}</h3>\n        <p>${e.description}</p>\n      </div>\n    </div>`}));const audios=[{src:"./audio/01.mp3",image:"./pictures/audio_picture.jpg",author:"Orlando di Lasso",title:"Tutto lo di mi dici canta!"},{src:"./audio/02.mp3",image:"./pictures/audio_picture.jpg",author:"Magyarországi gregorián",title:"Procedentem sponsum"},{src:"./audio/03.mp3",image:"./pictures/audio_picture.jpg",author:"Umbriai középkori dallam",title:"Alle – psalite cum – luia"},{src:"./audio/04.mp3",image:"./pictures/audio_picture.jpg",author:"Jacopus Arcadelt",title:"Il bianco e dolce cigno"},{src:"./audio/05.mp3",image:"./pictures/audio_picture.jpg",author:"Óangol burden            ",title:"Nowell Sing We "},{src:"./audio/06.mp3",image:"./pictures/audio_picture.jpg",author:"Aretino Bivi             ",title:" Animam meam dillectam"}],audioContainer=document.getElementById("audioContainer");audios.forEach((e=>{audioContainer.innerHTML+=`\n    <div class="audio-item">\n      <img src="${e.image}" alt="Audio kép" />\n      <div class="audio-description">\n        <h3>${e.author}</h3>\n        <p>${e.title}</p>\n      </div>\n      <div class="audio-controls">\n        <audio controls>\n          <source src="${e.src}" type="audio/mpeg" />\n          A böngésződ nem támogatja az audio elemet.\n        </audio>\n      </div>\n    </div>`}));const mapLink=document.getElementById("mapLink");mapLink.href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bécsikapu tér")}`;let currentPage=1;const totalPages=5;document.getElementById("nextPage").addEventListener("click",(()=>{currentPage<5&&(document.getElementById(`page${currentPage}`).classList.add("flipped"),currentPage++)})),document.getElementById("prevPage").addEventListener("click",(()=>{currentPage>1&&(currentPage--,document.getElementById(`page${currentPage}`).classList.remove("flipped"))})),document.getElementById("myForm").addEventListener("submit",(function(e){document.getElementById("option1").checked||(alert("Az üzenetet csak akkor lehet elküldeni, ha az első opció van kiválasztva."),e.preventDefault())}));