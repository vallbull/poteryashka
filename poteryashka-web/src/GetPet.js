import React, { Component } from "react";
import ReactDOM from "react-dom";


class GetPetComponent extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/get_pet?id=1234", {method: "POST"});
    const json = await response.json();
    if (true) {
      console.log(json)
      window.location.replace("/register")
    } else {}
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default function GetPet() {
	return (<h1> <GetPetComponent /> </h1>);
}

