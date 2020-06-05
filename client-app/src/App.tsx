import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Header } from 'semantic-ui-react'

class App extends Component {
  state = { values: [] };

  componentDidMount() {
    axios.get("http://localhost:5000/values").then((response) => {
      this.setState({ values: response.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header as='h1'>First Header</Header>
        <ul>
          {this.state.values.map((value : any) => (
            <li key={value.id}>{value.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
