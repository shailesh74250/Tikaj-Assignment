var express = require('express');
var router = express.Router();
// var time = Date.now || function() {
//     return +new Date;
// };
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date_time = date+' '+time;

var notifications = [
   {id: 1, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 2, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 3, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 4, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 5, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 6, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 7, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 8, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 9, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 10, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 11, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 12, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 13, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 14, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 15, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 16, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 17, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 18, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 19, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 20, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 21, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 22, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 23, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 24, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 25, title: "Fight Club", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 26, title: "Inception", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 27, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 28, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 29, title: "The Dark Knight", description: 'description', time_stamp: date_time, author:'shailesh'},
   {id: 30, title: "12 Angry Men", description: 'description', time_stamp: date_time, author:'shailesh'}
];

router.get('/notifications', function(req, res){
    res.json(notifications);
});

router.get('/:id([0-9]{3,})', function(req, res){
    var currMovie = notifications.filter(function(movie){
        if(movie.id == req.params.id){
            return true;
        }
    });
   
    if(currMovie.length == 1){
        res.json(currMovie[0])
    } else {
        res.status(404);  //Set status to 404 as movie was not found
        res.json({message: "Not Found"});
    }
});
module.exports = router;