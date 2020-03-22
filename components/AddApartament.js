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
                    <Button type="submit" className="btn-success w-100 my-2" action>Сохранить</Button>
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
