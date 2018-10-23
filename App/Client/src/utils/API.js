const axios = require('axios');


export default {
    getRooms:function(){
        return axios.get("/search/api/static");
    },
   
}