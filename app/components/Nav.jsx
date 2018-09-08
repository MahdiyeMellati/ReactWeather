var React = require("react")
var {Link,IndexLink}=require('react-router');
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


  var Nav= (props)=>{
    return(
      <div>
        <h3>Nav Component!</h3>
      <div><IndexLink to="/" activeClassName="active" activeStyle={{fronweight: 'bold'}}> Get Weather</IndexLink></div>
        <div><IndexLink to="/about" activeClassName="active" activeClassName="active"  activeStyle={{fronweight: 'bold'}}> About</IndexLink></div>
      <div><IndexLink to="/Examples" activeClassName="active" activeStyle={{fronweight: 'bold'}}>Examples</IndexLink></div>
       <a href="#/about">go to about</a>

      </div>

    );
  };
module.exports =Nav;
