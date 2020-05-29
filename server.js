
//Install express server
const express = require('express');
const path = require('path');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

var port = (process.env.PORT || '3000');

app.use(express.static(__dirname + '/dist/ventinghub'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/ventinghub/index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
   
    socket.on('room', (room) => {
        socket.join(room);
    });

    socket.on('new-message', (user) => {
        io.to(user.room).emit('new-message', user);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Start the app by listening on the default Heroku port
http.listen(port, () => {
    console.log(`listening on ${port} `);
});
