
// ******************Taskbar**************************************


let windowicon = document.querySelector('#windowicon')
let strtmenu = document.querySelector('.startmenu')
let desktop = document.querySelector('.desktop')
windowicon.addEventListener('click', () => {
     if (strtmenu.style.opacity == 0) {
          strtmenu.style.opacity = 1;
     }
     else {
          strtmenu.style.opacity = 0;
     }

})




// ************Opening Folder or file************************************





let fileicon = document.querySelector('#fileicon')
let file = document.querySelector('.file')

fileicon.addEventListener('click', () => {
     if (file.style.opacity == 0) {
          file.style.opacity = 1;
          fileicon.style.borderBottom = '4px solid grey'
          desktop.style.zIndex = 30;
     } else {
          file.style.opacity = 0;
     }
})





// ************Cancel Minimize and Maximize*****************************

let cross = document.querySelector('#cross')
let max = document.querySelector('#max')
let min = document.querySelector('#min')

cross.addEventListener('click', () => {
     file.style.opacity = 0;
     desktop.style.zIndex = 100
     fileicon.style.borderBottom = ''
})

max.addEventListener('click', () => {
     console.log('clicke');
     if (file.style.width == 100 + '%' && file.style.height == 93 + '%') {
          file.style.width = 50 + '%';
          file.style.height = 50 + '%';

     } else {
          file.style.width = 100 + '%';
          file.style.height = 93 + '%';

     }


})

min.addEventListener('click', () => {
     file.style.opacity = 0;
     desktop.style.zIndex = 100
     fileicon.style.borderBottom = '4px solid grey'

})


// **************Recyclebin & My PC************************************

let pc = document.querySelector('#pc')
let recycle = document.querySelector('#recycle')


pc.addEventListener('dblclick', () => {
     file.style.opacity = 1;
     fileicon.style.borderBottom = '4px solid grey'
     desktop.style.zIndex = 30
})
recycle.addEventListener('dblclick', () => {
     file.style.opacity = 1;
     fileicon.style.borderBottom = '4px solid grey'
     desktop.style.zIndex = 30
})


document.querySelector('.file').addEventListener('click', () => {
     if (strtmenu.style.opacity == 1) {
          strtmenu.style.opacity = 0;

     }

})


// ******************Time***************************************************

let time = document.querySelector('#time')


setInterval(() => {
     let date = new Date()
     time.innerHTML = date.toLocaleTimeString()
}, 1000);



