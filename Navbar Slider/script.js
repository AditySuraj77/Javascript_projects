let humbergr = document.querySelector('#humberger')
let nav = document.querySelector('.navbar')
let close = document.querySelector('#close')


// Menu event code
function menuclick() {
     humbergr.addEventListener('click', () => {
          if (nav.style.left = -280 + 'px') {
               nav.style.left = 0 + 'px'
               humbergr.style.zIndex = 0
          } else {
               nav.style.left = -280 + 'px'
          }

     })

}

menuclick()


// Close event code
function closeclick() {
     close.addEventListener('click', () => {
          if (nav.style.left = 0 + 'px') {
               nav.style.left = -280 + 'px'
          } else {
               nav.style.left = 0 + 'px'
          }
     })
}

closeclick()