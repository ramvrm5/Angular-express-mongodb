
//Install express server
const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const router = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const MONGODB_URI ='mongodb://localhost:27017/srk_database';


var port = (process.env.PORT || '3000');

app.use(express.static(__dirname + '/dist/ventinghub'));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));


app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ventinghub/index.html'));
});


app.use('/', router)


io.on('connection', (socket) => {
    console.log('a user connected');
   
    socket.on('room', (user) => {
        socket.join(user.room);
        io.to(user.room).emit('room-joined', user);
    });

    socket.on('new-message', (user) => {
        io.to(user.room).emit('new-message', user);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true , useNewUrlParser: true})
  .then(result => {
      console.log('connected To Database...!!!');
      http.listen(port, () => {
        console.log(`listening on ${port} `);
    });
    
  })
  .catch(err => {
    console.log(err);
  });


