const API_HOST = 'https://gastab-server.herokuapp.com';
let listings = []

const getCollection = async (collectionType, id) => {
  // const token = getToken();
  const options = {
    method: 'get',
    mode: 'cors',
  };

  if(id) options.body = id;

  let res;
  const url = id ? `${API_HOST}/${collectionType}/${id}` : `${API_HOST}/${collectionType}`;

  try {
    res = await fetch(url, options).then((response) => response.json());

    if (res) {
      if (res.length) {
        const list = res;

        localStorage.setItem(`${collectionType}List`, JSON.stringify(list));
      }

      return res;
    }
  } catch (e) {
    console.log(e);
  }

  return null;
};

const formatNumber = (num) => {
  const formatter = new Intl.NumberFormat()
  const toNum = Number(num);

  return formatter.format(toNum);
};

const setPreviewItemId = (id) => {
  localStorage.setItem("previewItemId", id);
}

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
    item_element.style.width = '100%'


    item_element.innerHTML = `
      <div class="card">
        <a href = "./auto-preview.html" >
          <img src="${API_HOST}${item.mainImage && (item.mainImage.url ?? "...")}" alt="${item.model}" onclick="setPreviewItemId('${item.id}')">
        </a>
        <div class="card-btm">
          <p class="auto1-ft">
            <span class="p-xmini">${item.condition}</span>
            <span style="display: none;" class="p-xmini auto1-ft"><img src="./images/auto1-star.png" alt="auto1-star"> 4.8</span>
          </p>
          <p class="car-model">${item.model}</p>
          <p class="car-price">₦&nbsp;${formatNumber(item.price)}</p>
          <p class="p-xmini auto1-ft bottom-info">
            <span class="metrics">
              <span class="p-xmini car-mileage"><img src="./images/meter-logo.svg" alt="meter"> ${formatNumber(item.mileage)}</span> 
              <span class="p-xmini car-location"><img src="./images/location-logo.svg" alt="location-logo"> ${item.location}</span>
            </span>
            <a href="./auto-preview.html" class="p-xmini go-to-preview" onclick="setPreviewItemId('${item.id}')">See more details</a>
          </p>
        </div>
      </div>
    `;
    
    wrapper.appendChild(item_element);

  }
}

{/* <span class="p-xmini">See more
          details</span></p> */}



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

const showListings = () => {
  DisplayList(listings, list_element,rows, current_page );
  SetupPagination(listings, pagination_element,rows);
}

const setListings = async () => {
  listings = await getCollection("vehicles");

  if(listings && listings.length) {
    showListings();
  }
};

setListings();



