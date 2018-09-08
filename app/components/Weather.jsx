var React= require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeathermap= require('openWeathermap');
var Weather= React.createClass({
  getInitialState: function()
  {
    return{
      isLoadnig:false
    }
  },
  handleSearch: function(location)
  {
    var that=this;
    this.setState({isLoadnig: true});
    openWeathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoadnig: false
      });
    }, function(errorMessage){
      that.setState({isLoadnig: false});
      alert(errorMessage);


    })
   // this.setState({
   //   location: location,
   //   temp:23
   // });
 },
  render: function()
    {
      var {isLoadnig,temp,location}=this.state;

    function  renderMessage ()
    {
      if(isLoadnig)
      {
        return <h7>weather is fetching...</h7>;
      }
      else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }

    }
    return(
      <div>
      <h4>Weather Component</h4>
      <WeatherForm onSearch={this.handleSearch} />
      {renderMessage()}
      </div>

  );
}
});

module.exports = Weather;
