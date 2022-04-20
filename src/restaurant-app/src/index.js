import React from "react";
import ReactDOM from "react-dom";

class MenuItem extends React.Component {
  render() {
    return (
      <tr>
        <td><label>{this.props.menuitem.Name}</label></td>
        <td><label>{this.props.menuitem.Cost}</label></td>
      </tr>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    console.log('menu constructor')
    super(props)
    this.state = {
      loading: true,
      menuitems: []
    }
  }

  componentDidMount() {
    console.log('component mounted')
    const apiUrl = 'https://jv5nch5zs5.execute-api.us-east-1.amazonaws.com/Public/restaurant/menu/appetizers'
    fetch(apiUrl)
      .then(async (response) => {
        console.log('got the data')
        this.setState({ loading: false, menuitems: await response.json() });
      });
  }


  render() {
    console.log('Loading: '+this.state.loading)
    return (
      <div>
        <table align='center'>
          <th>Item</th>
          <th>Cost</th>
          {this.state.menuitems.map((item) =>
            <MenuItem menuitem={item} />
          )}
        </table>
      </div>
    )
  }
}


ReactDOM.render(<Menu />, document.getElementById("root"));


