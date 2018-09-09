var React = require('react');
var WeatherForm= React.createClass({
  onFormSubmit: function(e)
  {
    e.preventDefault();
    var location=this.refs.location.value;

    if(location.length>0)
    {
      this.refs.location.value='';
      this.props.onSearch(location);
    }
    else
    alert("Please entera city");
  },
render:function()
{
  return(
    <form onSubmit={this.onFormSubmit}>
    <input type="text" placeholder="Enter the city" ref="location"></input>
    <button className="button expanded hollow">Get Weather</button>
    </form>
  );
  }
})

module.exports= WeatherForm;
