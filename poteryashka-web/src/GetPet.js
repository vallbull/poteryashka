import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";


const queryParams = new URLSearchParams(window.location.search);

class GetPetComponent extends Component {
  constructor() {
    super();
    this.state = {
      ownerName: "",
      petName: "",
      phone: "",
      address: "",
    };
  }

  async componentDidMount() {
    const id = queryParams.get('id');
    const response = await fetch(`http://localhost:8080/get_pet?id=${id}`, {method: "POST"});
    if (response.status != 200) {
      window.location.replace(`/register?id=${id}`)
    } else {
      const json = await response.json();
      console.log(json)
      this.setState({
        ownerName: json.owner_name,
        petName: json.pet_name,
        phone: json.phone,
        address: json.address,
      });
    }
  }

  render() {
    return (
      <Container>
        <CardBody> <CardTitle> <h4> Питомец найден! </h4> </CardTitle> </CardBody>
        <Row xs="5">
          <Col className="bg-light">
            Хозяин
          </Col>
            {this.state.ownerName}
          <Col className="bg-light">
          </Col>
        </Row>
        <Row xs="5">
          <Col className="bg-light">
            Кличка
          </Col>
          <Col className="bg-light">
            {this.state.petName}
          </Col>
        </Row>
        <Row xs="5">
          <Col className="bg-light">
            Телефон 
          </Col>
          <Col className="bg-light">
            {this.state.phone}
          </Col>
        </Row>
        <Row xs="5">
          <Col className="bg-light">
            Адрес
          </Col>
          <Col className="bg-light">
            {this.state.address}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default function GetPet() {
	return (<GetPetComponent />);
}

