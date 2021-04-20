const API_HOST = 'https://gastab-server.herokuapp.com';
let vehicles;
let previewItemId;
let previewItem;

if (localStorage.getItem("vehiclesList") && localStorage.getItem("previewItemId")) {
    vehicles = JSON.parse(localStorage.getItem("vehiclesList"));
    previewItemId = localStorage.getItem("previewItemId");

    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].id.toString() === previewItemId.toString()) {
            previewItem = vehicles[i];
            break;
        }
    }
}

let carousel = document.querySelector('.carousel');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

// const IMAGE_PAIR = [{
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
//   {
//     bigSRC: './images/auto-truck.png',
//     smallSRC: './images/auto-truck-sm.png'
//   },
// ];

// function printSixImages(start, end) {
//   let newImagePair = IMAGE_PAIR.slice(start, end + 1);
//   return newImagePair;
// }




// function toggleCarousel() {

  // carousel.querySelector('.sm-img').innerHTML = `
  //     ${
  //       IMAGE_PAIR.map(
  //         image => {
            
  //           return `
  //           <img 
  //           src="${image.smallSRC}" alt="${image.smallSRC.slice(10, -3)}"/>
  //           `
  //         }
  //         ).join('')
  //       }
      
  // `
// }

// toggleCarousel();

const enlarge = document.querySelector('.enlarge');

// Array.from(document.querySelectorAll('.sm-img img')).map(
//   (el, index) => {
//     el.setAttribute('onclick', `toggle('${IMAGE_PAIR[index].bigSRC}')`)
//   }
// );

function toggle(src) {
  enlarge.setAttribute('src', src)
}
const smImg = document.querySelector('.sm-img');

const screen = document.querySelector('.screen');

let index = 0;

let width;


function moveLeft() {
  if (index > 0) {
    index = index - 1
    smImg.style.transform = `translateX(${-index * (width + 15)}px)`;
  }
}


function moveRight() {
  let slides = document.querySelector('.sm-img img')
  if (index >= 0 && index < slides.length - 5) {
    index = index + 1;
    smImg.style.transform = `translateX(${-index * (width + 15)}px)`;
  }
}

leftArrow.addEventListener('click', () => {
  moveLeft()
})
rightArrow.addEventListener('click', () => {
  moveRight()
})

const closeModal = (num) => {
  ctModal[num].classList.remove('open');
}

const closeModalBtns = document.querySelectorAll('.closeModalBtn');

const ctModal = document.querySelectorAll('.ct-modal');
// closeModal(0)
// closeModal(1)

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
    // ctModal[0].classList.add('open');
  }
)
// btns[1].addEventListener('click',
//   (event) => {
//     event.preventDefault()
//     ctModal[1].classList.add('open');
//   }
// )

const showPreview = () => {

  const API_HOST = 'https://gastab-server.herokuapp.com';

  const formatNumber = (num) => {
      const formatter = new Intl.NumberFormat()
      const toNum = Number(num);

      return formatter.format(toNum);
  };

  // preview elements
  const mainImage__preview = document.querySelector('.mainImage__preview');
  const condition__preview = document.querySelector('.condition__preview');
  const year__preview = document.querySelector('.year__preview');
  const model__preview = document.querySelector('.model__preview');
  const mileage__preview = document.querySelector('.mileage__preview');
  const location__preview = document.querySelector('.location__preview');
  const price__preview = document.querySelector('.price__preview');
  const decsription__preview = document.querySelector('.description__preview');
  const condition2__preview = document.querySelector('.condition2__preview');
  const currentState__preview = document.querySelector('.currentState__preview');
  const transmission__preview = document.querySelector('.transmission__preview');
  const color__preview = document.querySelector('.color__preview');

  // set preview image
  if (previewItem && previewItem.mainImage) {
      const previewUrl = previewItem.mainImage.url;
      mainImage__preview.src = `${API_HOST}${previewUrl}`;
  }

  if (previewItem && previewItem.moreImages.length) {
    carousel.querySelector('.sm-img').innerHTML = `
      ${
        previewItem.moreImages.map(
          image => {
            
            return `
            <img 
            src="${API_HOST}${image.url}" alt="image slide"/>
            `
          }
        ).join('')
      }
    `
  } else {
    leftArrow.remove();
    rightArrow.remove();
    document.querySelector('.sm-img').innerHTML = `<p>-- --</p>`
  }

  // set preview details
  if (previewItem) {
      condition__preview.innerText = previewItem.condition;
      year__preview.innerText = previewItem.year;
      model__preview.innerText = previewItem.model;
      mileage__preview.innerText = formatNumber(previewItem.mileage);
      location__preview.innerText = previewItem.location;
      price__preview.innerText = formatNumber(previewItem.price);
      decsription__preview.innerText = previewItem.description;
      condition2__preview.innerText = previewItem.condition;
      currentState__preview.innerText = previewItem.currentState
      transmission__preview.innerText = previewItem.transmission;
      color__preview.innerText = previewItem.color;
  }

  if (document.querySelector('.sm-img img')) {
    width = document.querySelector('.sm-img img').width
  }
};

showPreview();