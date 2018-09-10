var React= require('react');
var {Link}= require('react-router');
// var Examples= React.createClass({
//   render: function()
//     {
//     return(
//       <h5>Examples Component</h5>
//   );
// }
// });

var Examples=(props)=>{
  return(

    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to="/?location=Tehran">Tehran,Iran </Link>
          </li>
          <li>
            <Link to="/location=Rio">Rio,Brazil </Link>
          </li>
        </ol>
    </div>
)
};

module.exports = Examples;
