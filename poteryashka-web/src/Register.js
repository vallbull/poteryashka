import { useState } from "react";
import {
  InputGroup,
  InputGroupText,
  Input,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  FormFeedback,
} from "reactstrap";

const queryParams = new URLSearchParams(window.location.search);

const Theme = () => {
  const [masterName, setMasterName] = useState("");
  const [petName, setPetName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const Submit = (ev) => {
    ev.preventDefault();
    const request = {
      'id': queryParams.get('id'),
      'owner_name': masterName,
      'phone': phone,
      'address': address,
      'pet_name': petName,
    }
    console.log(request)
    const id = queryParams.get("id");
    fetch(`http://localhost:8080/register?id=${id}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(request),
    }).then((r) => {
      console.log(r.json());
      if (r.status == 200) {
        window.location.replace(`/get_pet?id=${id}`);
      }
    });
  }
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(event.target.value)
  }

  return (
    <form onSubmit={Submit}>
      <h4>
        Зарегистрируйте вашего питомца!
      </h4>
      <br />
      <FormGroup>
        <Label>
          ФИО Хозяина
        </Label>
        <Input name="master_name"  onChange={(e)=>inputChangeHandler(setMasterName, e)} />
        <FormText>
          Как к вам обращаться, если нашли вашего питомца
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>
          Кличка
        </Label>
        <Input name="pet_name"  onChange={(e)=>inputChangeHandler(setPetName, e)} />
        <FormText>
          На какую кличку отзывается питомец
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>
          Адрес
        </Label>
        <Input name="address"  onChange={(e)=>inputChangeHandler(setAddress, e)} />
        <FormText>
          Дом питомца
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>
          Телефон
        </Label>
        <Input name="phone"  onChange={(e)=>inputChangeHandler(setPhone, e)} />
        <FormText>
          Телефон для связи
        </FormText>
      </FormGroup>
      <Button type="submit">
        Зарегистрировать
      </Button>
    </form>
  );
};

export default function Register() {
  return (<Theme/>);
}

