import {createServer} from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();

const server = createServer(app);

app.get('/' , (req,res)=> {
    res.send ('<h1>Hello Rorld </>')
})

server.listen(4600, ()=>{
    console.log('Server is running on http://localhost:4600');
});