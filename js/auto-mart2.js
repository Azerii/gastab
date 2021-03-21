let carousel = document.querySelector('.carousel');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');


const IMAGE_PAIR = [{
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
  {
    bigSRC: './images/auto-truck.png',
    smallSRC: './images/auto-truck-sm.png'
  },
];

// function printSixImages(start, end) {
//   let newImagePair = IMAGE_PAIR.slice(start, end + 1);
//   return newImagePair;
// }




function toggleCarousel() {

  carousel.querySelector('.sm-img').innerHTML = `
      ${
        IMAGE_PAIR.map(
          image => {
            
            return `
            <img 
            src="${image.smallSRC}" alt="${image.smallSRC.slice(10, -3)}"/>
            `
          }
          ).join('')
        }
      
  `
}
toggleCarousel()
const enlarge = document.querySelector('.enlarge');
Array.from(
  document.querySelectorAll('.sm-img img')
).map(
  (el, index) => {
    el.setAttribute('onclick', `toggle('${IMAGE_PAIR[index].bigSRC}')`)
  }
)

function toggle(src) {
  enlarge.setAttribute('src', src)
}
const smImg = document.querySelector('.sm-img');

const screen = document.querySelector('.screen');

let index = 0;

let width = document.querySelector('.sm-img img').width


function moveLeft() {
  if (index > 0) {
    index = index - 1
    smImg.style.transform = `translateX(${-index * (width + 15)}px)`;


    if (index >= IMAGE_PAIR.length - 5) {
      document.querySelector('.right-arrow').style.backgroundImage = "url('images/arrow-rw.svg')"
    }else {
      document.querySelector('.right-arrow').style.backgroundImage = "url('images/arrow-rb.svg')"
    }


    if (index <= 5) {
      document.querySelector('left-arrow').style.backgroundImage = "url('images/arrow-lw.svg')"
    }else{
      document.querySelector('left-arrow').style.backgroundImage = "url('images/arrow-lb.svg')"
    }



  }
}


function moveRight() {
  if (index < IMAGE_PAIR.length - 5) {
    index = index + 1;
    smImg.style.transform = `translateX(${-index * (width + 15)}px)`;
    

    if (index > 0) {
      document.querySelector('.left-arrow').style.backgroundImage = "url('images/arrow-lb.svg')"
    }else{
      document.querySelector('.left-arrow').style.backgroundImage = "url('images/arrow-lw.svg')"
    }



    if (index >= IMAGE_PAIR.length - 5) {
      document.querySelector('.right-arrow').style.backgroundImage = "url('images/arrow-rw.svg')"
    }else{
      document.querySelector('.right-arrow').style.backgroundImage = "url('images/arrow-rb.svg')"
    }



  }

}

leftArrow.addEventListener('click', () => {
  moveLeft()
})
rightArrow.addEventListener('click', () => {
  moveRight()
})
const closeModal = (num) => {
  ctModal[num].style.display = 'none'
}

const closeModalBtns = document.querySelectorAll('.closeModalBtn');

const ctModal = document.querySelectorAll('.ct-modal');
closeModal(0)
closeModal(1)

const btns = document.querySelectorAll('.auto2-sec1-b .btn');

closeModalBtns[0].addEventListener('click',
  () => closeModal(0)
)
closeModalBtns[1].addEventListener('click',
  () => closeModal(1)
)
btns[0].addEventListener('click',
  (event) => {
    event.preventDefault()
    ctModal[0].style.display = 'flex'
  }
)
btns[1].addEventListener('click',
  (event) => {
    event.preventDefault()
    ctModal[1].style.display = 'flex'
  }
)