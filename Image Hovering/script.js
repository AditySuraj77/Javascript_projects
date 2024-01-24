let elmcontain = document.querySelectorAll('.elm')

elmcontain.forEach((elemnt) => {

     elemnt.addEventListener('mouseenter', () => {
          elemnt.childNodes[3].style.opacity = 1
     })
     elemnt.addEventListener('mouseleave', () => {
          elemnt.childNodes[3].style.opacity = 0
     })

     elemnt.addEventListener('mousemove',(dts)=>{
          elemnt.childNodes[3].style.top = dts.y+"px"
     })
})

