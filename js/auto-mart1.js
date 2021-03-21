const list_items = [{
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },
  {
    isNew: false,
    brand: '2016 Ford Mustang V6',
    price: '₦128,015,000',
    speed: '19,800',
    location: 'Lagos'
  },

];

const list_element = document.querySelector('.card-ctn');


const pagination_element = document.getElementById('pagination');

let current_page = 1;

let rows = 6;


function DisplayList(items, wrapper, rows_per_page, page) {

  wrapper.innerHTML = "";


  page--;

  let start = rows * page;

  let end = start + rows_per_page;

  let paginatedItems = items.slice(start, end)

  

  for (let i = 0; i < paginatedItems.length; i++){

    let item = paginatedItems[i];

    let item_element = document.createElement('div');


    item_element.innerHTML = `<div class="card">
  <a a href = "./auto-mart2.html" >
  <img src="./images/auto-truck.png" alt=" ">
  </a>
  <div class="card-btm">
  <p class="auto1-ft"><span class="p-xmini">${item.isUsed ? 'Brand New' : 'USED'}</span>
  <span class="p-xmini auto1-ft"><img src="./images/auto1-star.png" alt="auto1-star"> 4.8</span></p>
  <p class="car-modle">${item.brand}</p>
  <p>${item.price}</p>
  <p class="p-xmini auto1-ft">
  <span class="p-xmini">
  <img src="./images/meter-logo.svg" alt="meter"> ${item.speed}</span> 
  <span class="p-xmini">
  <img src="./images/location-logo.svg" alt="location-logo"> ${item.location}</span>
  <span class="p-xmini">See more
  details</span></p>
  </div>
  </div>`;
    
    wrapper.appendChild(item_element);

  }
}



function SetupPagination(items, wrapper, rows_per_page) {

  wrapper.innerHTML = ""
  let page_count = Math.ceil(items.length / rows_per_page);

  for (let i = 1; i < page_count + 1; i++){

    let btn = PaginationButton(i,items)
    

    wrapper.appendChild(btn)

  }
  
}



function PaginationButton(page,items) {

  let button = document.createElement('span');

  button.innerText = page;

  if (current_page == page) button.classList.add('active');


  button.addEventListener('click', function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page)
    
    let current_btn = document.querySelector('.pagenumbers span.active')

    current_btn.classList.remove('active')

    button.classList.add('active')
  });

  return button

}



DisplayList(list_items, list_element,rows, current_page );


SetupPagination(list_items, pagination_element,rows)
