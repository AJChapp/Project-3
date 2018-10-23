const mongoose = require ('mongoose');
const db = require ('../models')

mongoose.connect('mongodb://localhost/project3')
const roomSeed = [
  {
    roomNumber: 200,
    vacant: true,
    nonSmoking: true,
    rate: 200,
    maxAdult: 4,
    view:{
      type:'Beach'
    },
    numOfBeds:{
      king: 0,
      queen: 2,
      full: 0,
      twin: 0,
      rollaway: 1
    }

  },
  {
    roomNumber: 404,
    vacant: false,
    nonSmoking: false,
    rate: 400,
    maxAdult: 2,
    view:{
      type:'Objstructed'
    },
    numOfBeds:{
      king: 0,
      queen: 0,
      full: 2,
      twin: 0,
      rollaway: 2
    }
  }
]


db.Rooms
  .remove({})
  .then(() => db.Rooms.collection.insertMany(roomSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
