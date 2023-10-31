
//  for menu 
const menu = document.querySelector(".menu");
const hamMenuIcon = document.querySelector(".ham-menu-icon");
let i = true;
hamMenuIcon.addEventListener("click", (e) => {
    if (i) {
        menu.style.display='flex';
        e.target.classList.remove("bi-list"); //e.target = icon 
        e.target.classList.add("bi-x-lg");
        i = false;
    } else {
        e.target.classList.remove("bi-x-lg");
        e.target.classList.add("bi-list"); //e.target = icon 
        menu.style.display='none';
        i = true;
    }
});
 
// for swiper
var swiper = new Swiper(".card_slider", {
    spaceBetween: 30,
    loop:true,
    speed:1000,
    autoplay:{
        delay:2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
          },
        1200: {
          slidesPerView: 3,
        },
      },
  });


  // typing 
  const words = ['web Developer ', 'Frontend Developer ', 'JavaScript Developer ', ' React Developer '];
let index = 0;
const paragraph = document.getElementById('typing');
const staticText = "";
const textColor = "white"; // Color for the typed words

function typeWord() {
  const word = words[index];
  let i = 0;

  function type() {
    if (i < word.length) {
      paragraph.innerHTML = staticText + `<span style="color:${textColor}">${word.substring(0, i)}</span>|`;
      i++;
      setTimeout(type, 100);
    } else {
      setTimeout(eraseWord, 2000);
    }
  }

  type();
}

function eraseWord() {
  let i = words[index].length;

  function erase() {
    if (i >= 0) {
      paragraph.innerHTML = staticText + `<span style="color:${textColor}">${words[index].substring(0, i)}</span>|`;
      i--;
      setTimeout(erase, 100);
    } else {
      index = (index + 1) % words.length;
      setTimeout(typeWord, 1000);
    }
  }

  erase();
}

typeWord();
