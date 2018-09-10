var React = require("react")
var {Link,IndexLink}=require('react-router');


  var Nav= React.createClass({
    onSearch: function(e)
    {
      e.preventDefault();
      alert('nothig wired up yet!')
    },
    render: function(){
      return(
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className-="menu-text">React Weather App</li>
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fronweight: 'bold'}}> Get Weather</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeClassName="active"  activeStyle={{fronweight: 'bold'}}>About</Link></li>
              <li><Link to="/Examples" activeClassName="active" activeStyle={{fronweight: 'bold'}}>Examples</Link></li>
            </ul>
          </div>

          <div className="top-bar-right" >

              <form onSubmit={this.onSearch}>
                <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city"/>
                </li>

                <li>
                  <input type="submit" className="button" value="GetWeather"/>
                </li>
                </ul>
              </form>

          </div>

        </div>

      );
    }
  });
module.exports =Nav;

// var oldNav=
// {
//   <div>
//     <h3>Nav Component!</h3>
//   <div><IndexLink to="/" activeClassName="active" activeStyle={{fronweight: 'bold'}}> Get Weather</IndexLink></div>
//     <div><IndexLink to="/about" activeClassName="active" activeClassName="active"  activeStyle={{fronweight: 'bold'}}> About</IndexLink></div>
//   <div><IndexLink to="/Examples" activeClassName="active" activeStyle={{fronweight: 'bold'}}>Examples</IndexLink></div>
//    <a href="#/about">go to about</a>
//
//   </div>
// }




// var Nav= React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h3>Nav Component!</h3>
//       <div><IndexLink to="/" activeClassName="active" activeStyle={{fronweight: 'bold'}}> Get Weather</IndexLink></div>
//         <div><IndexLink to="/about" activeClassName="active" activeClassName="active"  activeStyle={{fronweight: 'bold'}}> About</IndexLink></div>
//       <div><IndexLink to="/Examples" activeClassName="active" activeStyle={{fronweight: 'bold'}}>Examples</IndexLink></div>
//        <a href="#/about">go to about</a>
//
//       </div>
//
//     );
//   }
