var React = require('react');
// var WeatherMessage= React.createClass({
// render:function(){
// var {temp,location}=this.props;
//   return(
//     <h6>it's {temp} in {location}</h6>
//   );
//   }
// })

var WeatherMessage=({temp,location})=>
{
  //var {temp,location}=props;
    return(
      <h6>it's {temp} in {location}</h6>
    );
  };
module.exports= WeatherMessage;
