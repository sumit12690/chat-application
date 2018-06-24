let express =require('express');
let app =express();
let http=require('http').Server(app);
let io=require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

http.listen(3002,function() {
    console.log('listening on port 3002');
})


// var fs=require('fs');
// var userView = function(req, res) {
//     fs.readFile('./index.html', function (err, data) {
//         if(err) throw err;
//         res.writeHead(200);
//         res.end(data);
//     });
// }
// var server = require('http').createServer(userView);
// var io = require('socket.io')(server);
// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//         io.emit('chat message', msg);
//       });
// });

// server.listen(3002,function() {
//     console.log('listening on port 3002');
// })