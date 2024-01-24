let imgtag = document.querySelector('.container')

let flag = 0
imgtag.addEventListener('dblclick', () => {
     if (flag == 0) {


          document.querySelector('i').style.transform = "translate(-50%,-50%) scale(1)"

          setTimeout(() => {
               document.querySelector('i').style.opacity = 0
          }, 1000);
          setTimeout(() => {
               document.querySelector('i').style.transform = "translate(-50%,-50%) scale(0)"
          }, 3000);
          flag = 1
     }else{
          document.querySelector('i').style.transform = "translate(-50%,-50%) scale(0)"

          setTimeout(() => {
               document.querySelector('i').style.opacity = 1
          }, 1000);
          setTimeout(() => {
               document.querySelector('i').style.transform = "translate(-50%,-50%) scale(1)"
          }, 3000);
          flag = 0
     }
})

