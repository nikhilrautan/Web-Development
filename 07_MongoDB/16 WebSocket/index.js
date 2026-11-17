const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http')

const server = http.createServer(app); 
const io = new Server(server);


io.on("connection",(socket)=>{

      socket.on('message',(data)=>{
        io.emit('new-message',data);
      })

    // iska mtlb hai ye yha pr listen kr rha hai mtlb jb disconnect krna hoga to aise ho jaega
    socket.on("disconnect",()=>{
        console.log("Disconnected from server");
    })
})

server.listen(3000,()=>{
    console.log("Listening at port 3000");
})



// is tarike se error bhi aa skte hai ( to hum ye wala use nhi krte)
// const server = app.listen(3000,()=>{
//     console.log("Listening at port 3000");
// })

// const io = new Server(server);