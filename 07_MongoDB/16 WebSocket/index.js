const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http')

const server = http.createServer(app); 
const io = new Server(server);


io.on("connection",(socket)=>{

})

server.listen(3000,()=>{
    console.log("Listening at port 3000");
})



// is tarike se error bhi aa skte hai ( to hum ye wala use nhi krte)
// const server = app.listen(3000,()=>{
//     console.log("Listening at port 3000");
// })

// const io = new Server(server);