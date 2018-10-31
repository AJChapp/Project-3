const db = require('../models');
const mongoose = require('mongoose')


module.exports = function (app) {
    app.get('/search/api/roomsearch', function (req, res) {
        db.Rooms.find({}).then(function (data) {
            res.json(data);
        }).catch(function (err){
            res.json(err)
        })
    }),
    app.get('/findopening',function(req,res){
        db.Booking.find({}).then(function(data){
            res.json(data);
        }).catch(function (err){
            res.json(err)
        })
    })


};

//example of finding range
// db.posts.find(
//     {"created_on": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}})