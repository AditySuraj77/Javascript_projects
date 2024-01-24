let friend = document.querySelector('#addfriend')
let btn = document.querySelector('#btn')

let flag = 0

btn.addEventListener('click',()=>{
     if (flag == 0) {
          friend.innerHTML = 'Friend'
          friend.style.color = 'blue'
          btn.innerHTML = 'Remove'
          btn.style.backgroundColor = 'red'
          flag = 1
          
     }else{
          friend.innerHTML = 'None'
          friend.style.color = 'red'
          btn.innerHTML = 'Add Friend'
          btn.style.backgroundColor = 'rgb(114, 245, 97)'
          flag = 0
     }
})