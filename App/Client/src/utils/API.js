import axios from 'axios'


export default {
    getRooms:function(){
        return axios.get("/search/api/roomsearch");
    },
   
}