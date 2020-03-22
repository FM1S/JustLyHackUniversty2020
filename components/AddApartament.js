import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class AddApartament extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
  }

  render(){
    const handler = (e) => {
      let city = document.getElementById('city').value;
      let metro = document.getElementById('metro').value;
      let street = document.getElementById('street').value;
      let houseNum = document.getElementById('houseNum').value;
      let constructionNum = document.getElementById('constructionNum').value;
      let houseType = document.getElementById('houseType').value;
      let floor = document.getElementById('floor').value;
      let numFloor = document.getElementById('numFloor').value;
      let square = document.getElementById('square').value;
      let numRooms = document.getElementById('numRooms').value;
      let price = document.getElementById('price').value;
      let description = document.getElementById('description').value;
      let url = '192.168.0.5';
      fetch('http://'+ url +':8080/api/v1/users/addaps/',
          {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({city: city, metro: metro, street: street, houseNum: houseNum, constructionNum: constructionNum, houseType: houseType, floor: floor, numFloor: numFloor, square: square, numRooms: numRooms, price: price, description: description, login: this.props.login})
        }).then(res => res.json()).then((result) =>{
        if(result.code == 200){
          alert("Квартира добавлена!");
        }else{
          alert("Ошибка!");
        }
      },(error)=>{
      });
    }

    return(
      <div style={{'background-color':'rgba(255, 255, 255, .75)', height:'83vh'}} className="overflow-auto pb-10 scrollbar scrollbar-success">
        <Container >
          <Row>
            <Col lg={12}>
              <Row>
                <h3 className="p-2">Заполните информацию о квартире:</h3>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Город</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="city" as="input" placeholder="Введите город">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Метро</h4>
                </Col>
                <Col lg={9}>
                <Form>
                  <Form.Group>
                    <Form.Control id="metro" as="input" placeholder="Введите станцию метро">
                    </Form.Control>
                  </Form.Group>
                </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Улица</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="street" as="input" placeholder="Введите улицу">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Дом</h4>
                </Col>
                <Col lg={3}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="houseNum" type="number">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg={3} className="border-right-1">
                  <h4 className="text-right">Корпус</h4>
                </Col>
                <Col lg={3}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="constructionNum" type="number">
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col lg={3} className="border-right-1">
                  <h4>Помещение</h4>
                </Col>
                <Col lg={9}>
                  <Form>
                    <Form.Group>
                      <Form.Control id="houseType" as="select">
                        <option>Квартира</option>
                        <option>Комната</option>
                        <option>Дом</option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
              <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>Этаж</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="floor" type="number">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>Этажей в доме</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="numFloor" type="number">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>Площадь (м^2)</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="square" type="number">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>Количество комнат</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="numRooms" type="number">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>Цена ₽</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="price" type="number">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} className="border-right-1">
                    <h4>Описание</h4>
                  </Col>
                  <Col lg={9}>
                    <Form>
                      <Form.Group>
                        <Form.Control id="description" as="textarea" row='3' placeholder="Описание квартиры. Можете написать о достоинствах и недостатках">
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}></Col>
                  <Col lg={4} className="text-center">
                    <Button type="submit" onClick={(e)=>handler(e)} className="btn-success w-100 my-2" action>Сохранить</Button>
                  </Col>
                  <Col lg={4}></Col>
                </Row>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
