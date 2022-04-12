import React from 'react';
import ReactDOM from 'react-dom';

/*
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
*/

/*
function Hello(props) {
  return <h1>Hello World! -2 </h1>;
}

ReactDOM.render(<Hello />, document.getElementById("root"));

class Person extends React.Component{
  render(){
      return <h2>My name is sairama!</h2>
  }
}

ReactDOM.render(<Person />, document.getElementById("root"));
/
*/

class Person extends React.Component {
  render() {
      return (
          <div>
              <td><label>{this.props.name}</label></td>
              <td><label>{this.props.age}</label></td>
          </div>
      )
  } 
}

class PersonContainer extends React.Component {
  render() {
      return (
          <div>
              <table>
                  <tr><Person name="Aneesh" age="20" /></tr>
                  <tr><Person name="Neil" age="21"/></tr>
                  <tr><Person name="Tarun" age="22"/></tr>
                  <tr><Person name="Karan" age="23"/></tr>
              </table>
          </div>
      )
  }
}

ReactDOM.render(<PersonContainer />, document.getElementById("root"));