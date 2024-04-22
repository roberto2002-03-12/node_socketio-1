import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import env from './config'

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

io.on('connection', socket => {
  console.log(socket.id);

  socket.on('message', (data) => {
    console.log(data);

    // guardar mensaje en la bd usando mongoose
    
    // enviar mensaje

    // parece rendundante, sin embargo no lo es.
    // en este caso el servidor api emite un evento
    socket.broadcast.emit('message', {
      body: data,
      from: socket.id.slice(6)
    });
  })
});

server.listen(env.PORT);
console.log(`Running http://localhost:${env.PORT}`);