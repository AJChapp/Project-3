const mongoose = require("mongoose");
// refrence 10/3-19
const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
    roomNumber: Number,
    vacant : Boolean,
    nonSmoking: Boolean,
    rate: Number,
    maxAdult: Number,
    view:{
        type:String
    },
    numOfBeds:{
        king: Number,
        queen: Number,
        full: Number,
        twin: Number,
        rollaway:Number
    }
});

const Rooms = mongoose.model('Rooms', RoomsSchema);

module.exports = Rooms;