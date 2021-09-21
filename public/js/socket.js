
const socket = io()
socket.on('message',(msg)=>{
    console.log(msg)
})

// socket.on('countUpdated',(count)=>{
//     console.log("count has been updated "+count)

// })

// document.querySelector("#increment").addEventListener("click",()=>{
//     console.log("clicked");
//     socket.emit('increment')
// })