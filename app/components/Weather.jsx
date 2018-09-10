var React= require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeathermap= require('openWeathermap');
var ErrorModal= require('ErrorModal');
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
    this.setState({
      isLoadnig: true,
      errorMessage:undefined

    });
    openWeathermap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoadnig: false,

      });
    }, function(e){
      that.setState({
        isLoadnig: false,
        errorMessage: e.message
      });


    });
   // this.setState({
   //   location: location,
   //   temp:23
   // });
 },
  render: function()
    {
      var {isLoadnig,temp,location,errorMessage}=this.state;

    function  renderMessage ()
    {
      if(isLoadnig)
      {
        return <h3 className="text-center">weather is fetching...</h3>;
      }
      else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }

    }
    function renderError()
    {
      if (typeof errorMessage === 'string')
      {
        return(
          <ErrorModal message={errorMessage}/>

        )
      }
    }
    return(
      <div>
      <h1 className="text-center">Get Weather</h1>
      <WeatherForm onSearch={this.handleSearch} />
      {renderMessage()}
      {renderError()}
      </div>

  );
}
});

module.exports = Weather;
