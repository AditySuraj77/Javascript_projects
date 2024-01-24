
// Creating Objects
let arr = [
     {dp:"https://images.unsplash.com/photo-1682687218982-6c508299e107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1682687218982-6c508299e107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D"},

     {dp:"https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D",story:"https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D"},

     {dp:"https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjl8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjl8fHxlbnwwfHx8fHw%3D"},

     {dp:"https://images.unsplash.com/photo-1704326163357-cf0a659c226c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1704326163357-cf0a659c226c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D"},

     {dp:"https://images.unsplash.com/photo-1705086867540-86ee11e93f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1705086867540-86ee11e93f8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fHw%3D"}
]

// define empty variable
let clutter = ""


// loop all objects that above created
arr.forEach((element,idx)=>{
     clutter += ` <div class="story">
     <img id="${idx}" src="${element.dp}" alt="">
     </div>`

})

// Selecting element
let fullscreen = document.querySelector('#story-screen')
let storiyan = document.querySelector('.storiyan')



// display all data on html page
storiyan.innerHTML = clutter




// on click story element we display big picture of story
storiyan.addEventListener('click',(detail)=>{
     fullscreen.style.display = 'block'
     fullscreen.style.backgroundImage = `url(${arr[detail.target.id].story})`

     setTimeout(() => {
          fullscreen.style.display = 'none'
     }, 3000);
})