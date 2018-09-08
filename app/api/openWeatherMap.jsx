var axios= require('axios');

const OPEN_WEATHER_MAP_URL='https://api.openweathermap.org/data/2.5/weather?appid=45069e713ac4b8328d82c39fb231eb7a&units=metric';
//45069e713ac4b8328d82c39fb231eb7a
module.exports={
  getTemp:function(location)
  {
    var encodedLocation=encodeURIComponent(location);
    var requestUrl= `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      console.log(res);
      if(res.data.cod && res.data.message){
        throw new Error (res.data.message);
      }
      else{
        return res.data.main.temp;
      }

    }, function(res) {
      debugger
      throw new Error(res.response.data.message);

  });
  }
}
