var React= require('react');
// var About= React.createClass({
//   render: function()
//     {
//     return(
//       <h4>About Component</h4>
//   );
// }
// });

var About =(props)=>
{
  return(
<div>
  <h1 className="text-center">About Component</h1>
  <p>This is my app</p>
  <p>here are some of the tools I used</p>
  <ul>
    <li>
      <a href="https://kipaad.ir">Kipaad</a> Here is kipaad
    </li>
    <li>
      <a href="https://github.com">github</a> here is github
    </li>
  </ul>
</div>

    //<h4>About Component</h4>
);
}

module.exports = About;
