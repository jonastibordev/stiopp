"use strict";document.querySelectorAll("nav a").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelectorAll("nav a").forEach((e=>e.classList.remove("selected"))),this.classList.add("selected");const t=document.querySelector(this.getAttribute("href")),o=document.querySelector("header").offsetHeight;window.scrollTo({top:t.offsetTop-o,behavior:"smooth"})}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=["./pictures/header_logo1.png","./pictures/header_logo2.png","./pictures/header_logo3.png","./pictures/header_logo4.png"],t=document.querySelector(".header-img");let o=0;function n(){t.style.opacity=0,setTimeout((()=>{t.src=e[o],o=(o+1)%e.length,t.style.opacity=1}),900)}n(),setInterval(n,1e4)}));const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector("nav ul");function displayContent(e){["book1","book2","book3"].includes(e)?window.location.href="tortenet.html":alert("Nincs ilyen könyv")}let currentImageIndex;hamburger.addEventListener("click",(()=>{hamburger.classList.toggle("active"),navMenu.classList.toggle("show")})),navMenu.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(()=>{hamburger.classList.remove("active"),navMenu.classList.remove("show")}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=Array.from({length:21},((e,t)=>2024-t)),t=["./pictures/arch_book2.jpg","./pictures/arch_book3.jpg","./pictures/arch_book4.jpg","./pictures/arch_book5.jpg","./pictures/arch_book6.jpg","./pictures/arch_book7.jpg"],o=document.querySelector(".bookshelf");e.forEach(((e,n)=>{const i=document.createElement("div");i.classList.add("book"),i.id=`book${n+1}`,i.style.backgroundImage=`url('${t[Math.floor(Math.random()*t.length)]}')`;const r=Math.floor(16*Math.random())+190,a=Math.floor(31*Math.random())+90;i.style.height=`${r}px`,i.style.width=`${a}px`,i.innerHTML=`<a href="#" class="book-link">${e}</a>`,o.appendChild(i),i.addEventListener("click",(e=>{e.preventDefault(),displayContent(i.id)}))}))})),window.addEventListener("scroll",(()=>{document.getElementById("scrollToTopBtn").style.display=window.scrollY>580?"block":"none"})),document.getElementById("scrollToTopBtn").addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));const images=document.querySelectorAll(".gallery-images img");function fullView(e){const t=document.getElementById("fullImageView"),o=document.getElementById("fullImage");t.style.display="block",o.src=e.src,currentImageIndex=Array.from(images).indexOf(e)}function closeFullView(){document.getElementById("fullImageView").style.display="none"}function prevImageFullScreen(){currentImageIndex=0===currentImageIndex?images.length-1:currentImageIndex-1,document.getElementById("fullImage").src=images[currentImageIndex].src}function nextImageFullScreen(){currentImageIndex=currentImageIndex===images.length-1?0:currentImageIndex+1,document.getElementById("fullImage").src=images[currentImageIndex].src}document.getElementById("prevButton").addEventListener("click",(()=>{const e=document.querySelector(".gallery-images");e.insertBefore(e.lastElementChild,e.firstElementChild)})),document.getElementById("nextButton").addEventListener("click",(()=>{const e=document.querySelector(".gallery-images");e.appendChild(e.firstElementChild)}));const videos=[{src:"https://www.youtube-nocookie.com/embed/cPaSjIPlpiY",title:".",author:"Bepi De Marzi",description:"Signore delle cime"},{src:"https://www.youtube-nocookie.com/embed/2W9UzRmbV_s",title:".",author:"Aretino Bivi",description:"Animam meam dilectam tradidit"},{src:"https://www.youtube-nocookie.com/embed/gmRHNCXl8Kw",title:".",author:"Orazio Vecchi",description:"Gioite tutti"},{src:"https://www.youtube-nocookie.com/embed/CEo7S1_CAWY",title:".",author:"Thomas Tallis",description:"If ye love me"},{src:"https://www.youtube-nocookie.com/embed/lCYTQgR_Ghk",title:".",author:"Claude Goudimel",description:"zsoltár"},{src:"https://www.youtube-nocookie.com/embed/6vKM_jU2ucs",title:".",author:"Liszt Ferenc",description:"Salutaris hostia"},{src:"https://www.youtube-nocookie.com/embed/EkdBnsTrNHA",title:".",author:"Kodály Zoltán",description:"Adventi ének"},{src:"https://www.youtube-nocookie.com/embed/0PiXvcMcEw8",title:".",author:"Huzella Elek",description:"Virgo prudentissima"},{src:"https://www.youtube-nocookie.com/embed/Tc_TW64qVCo",title:".",author:"Bárdos Lajos",description:"A pusztában kiáltó szava"},{src:"https://www.youtube-nocookie.com/embed/OZWBy-RPdII",title:".",author:"Orbán György",description:"Ave Maria"}],videoContainer=document.getElementById("videoContainer");videos.forEach(((e,t)=>{const o=document.createElement("div");o.classList.add("video"),o.innerHTML=`\n    <iframe\n      width="1280"\n      height="720"\n      src="${e.src}"\n      title="${e.title}"\n      frameborder="0"\n      allow="encrypted-media; picture-in-picture"\n      referrerpolicy="strict-origin-when-cross-origin"\n      allowfullscreen\n    ></iframe>\n    <button class="toggle-btn" data-index="${t}">Szerző és cím mutatása / elrejtése</button>\n    <div class="video-description">\n      <h3>${e.author}</h3>\n      <p>${e.description}</p>\n    </div>\n  `,videoContainer.appendChild(o)})),document.querySelectorAll(".toggle-btn").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-index"),o=document.querySelectorAll(".video-description")[t];"block"===o.style.display?o.style.display="none":o.style.display="block"}))}));const audios=[{src:"./audio/05 Cortonai dícséret - Sia laudato San Francesco.mp3",image:"./pictures/audio_picture.jpg",author:"Cortonai dícséret",title:" Sia laudato San Francesco"},{src:"./audio/03 Josquin In te Domine 18 12 18.mp3",image:"./pictures/audio_picture.jpg",author:"Josquin des Prez",title:"In te domine speravi"},{src:"./audio/04 Victoria O magnum misterium 18 12 18.mp3",image:"./pictures/audio_picture.jpg",author:"Tomás Luis de Victoria",title:"O magnum misterium"},{src:"./audio/01 Tomás Luis de Victoria - Ave Maria.mp3",image:"./pictures/audio_picture.jpg",author:"Tomás Luis de Victoria",title:"Ave Maria"},{src:"./audio/03 Benjamin Britten - Deo gratias tétel A Ceremony of Carols.mp3",image:"./pictures/audio_picture.jpg",author:"Benjamin Britten",title:"A Ceremony of Carols, Deo gratias"},{src:"./audio/Bartók Béla - Kórusdal Murányi E átirat.mp3",image:"./pictures/bartók_kórusdal.jpg",author:"Bartók Béla",title:"Kórusdal Murányi Eszter kórus feldolgozása"},{src:"./audio/Bartók Béla - Tót legények tánca Murányi E Faragó D átirat.mp3",image:"./pictures/bartók_tóth_legények.jpg",author:"Bartók Béla",title:"Tót legények tánca Murányi Eszter kórus feldolgozása, szöveg: Faragó Dániel"},{src:"./audio/Borisz Hrisztov - Rcsenyica.mp3",image:"./pictures/audio_picture.jpg",author:"Borisz Hrisztov",title:"Rcsenyica"},{src:"./audio/Karai József - Ugrótánc.mp3",image:"./pictures/karai_ugrótánc.jpg",author:"Karai József",title:"Ugrótánc"},{src:"./audio/Rick Róbert - Egy ágy fölött.mp3",image:"./pictures/audio_picture2.jpg",author:"Rick Róbert",title:"Egy ágy fölött"}],audioContainer=document.getElementById("audioContainer");audios.forEach(((e,t)=>{const o=document.createElement("div");o.classList.add("audio-item"),o.innerHTML=`\n    <img src="${e.image}" alt="Audio kép" />\n    <button class="toggle-btn" data-index="${t}">Szerző és cím mutatása / elrejtése</button>\n    <div class="audio-description">\n      <h3>${e.author}</h3>\n      <p>${e.title}</p>\n    </div>\n    <div class="audio-controls">\n      <audio controls>\n        <source src="${e.src}" type="audio/mpeg" />\n        A böngésződ nem támogatja az audio elemet.\n      </audio>\n    </div>\n  `,audioContainer.appendChild(o)})),document.querySelectorAll(".toggle-btn").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-index"),o=document.querySelectorAll(".audio-description")[t];"block"===o.style.display?o.style.display="none":o.style.display="block"}))}));const mapLink=document.getElementById("mapLink");mapLink.href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bécsikapu tér")}`;let currentPage=1;const totalPages=5;document.getElementById("nextPage").addEventListener("click",(()=>{currentPage<5&&(document.getElementById(`page${currentPage}`).classList.add("flipped"),currentPage++)})),document.getElementById("prevPage").addEventListener("click",(()=>{currentPage>1&&(currentPage--,document.getElementById(`page${currentPage}`).classList.remove("flipped"))})),document.getElementById("myForm").addEventListener("submit",(function(e){document.getElementById("option1").checked||(alert("Az üzenetet csak akkor lehet elküldeni, ha az első opció van kiválasztva."),e.preventDefault())})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("stiopp"),t=e.textContent;e.textContent="";for(let o=0;o<t.length;o++){const n=document.createElement("span");n.textContent=t[o],n.setAttribute("data-char",t[o]),n.style.setProperty("--x",500*Math.random()-100+"px"),n.style.setProperty("--y",500*Math.random()-100+"px"),n.style.animationDelay=.3*o+"s",e.appendChild(n)}}));