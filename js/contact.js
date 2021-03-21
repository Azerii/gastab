const close1 = document.querySelector('#close');

const ctModal = document.querySelector('.ct-modal');
ctModal.style.display = 'none'

const btn = document.querySelector('.btn')
const hide = () => {
  ctModal.style.display = 'none'
}
close1.addEventListener('click',
  () => {
  hide()
  }
)
btn.addEventListener('click',
  (event) => {
    event.preventDefault()
    ctModal.style.display = 'flex'
  }
)