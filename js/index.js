let url = location.href;
const navitems = Array.from(document.querySelectorAll('.navitems a'));
navitems.map(navitem => {
  if (navitem.href === url)
    navitem.setAttribute('class', 'active')
})

const close = document.querySelector('.close')

const navMobile = document.querySelector('#navMobile')



const hideNavMobile = () => {
  navMobile.classList.add('hideNav');
  close.classList.add('hide')
}

const showNavMobile = () => {
  navMobile.classList.toggle('showNav');
  if (close.getAttribute('src') === './images/open.svg') {
    
    close.setAttribute('src', './images/close.svg')
  }else{
    
      close.setAttribute('src', './images/open.svg')
  }
}



close.addEventListener('click', () => {
  showNavMobile()
}
) 