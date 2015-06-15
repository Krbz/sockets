var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://karbz:shinev234@ds031842.mongolab.com:31842/nodedb';



app.use(express.static(path.resolve(__dirname, 'client')));

io.on('connection', function (socket) {
    console.log('User is connected', socket.id);
    

    socket.on('disconnect', function () {
      console.log("User left", socket.id);
    });

    MongoClient.connect(url, function (error, db) {
        if (error) {
          console.log('#error - Unable to connect to the mongoDB server. Error:', error);
        } else {
          console.log('#info - Connection established to', url);
        }
        //broadcast data from db - 
        //emit it.
        //if new click, main.js - emit it to db.
        //
        var pointzCollection = db.collection('pointz');
        // userCollection.insert({"details":data}, function(error, cursor){
            // cursor ? console.log('#success - data send to db') : console.log('#error -');
        // });
    });



});







// function broadcast(event, data) {
//   sockets.forEach(function (socket) {
//     socket.emit(event, data);
//   });
// }



server.listen(process.env.PORT || 3000, process.env.IP || "192.0.0.1", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
