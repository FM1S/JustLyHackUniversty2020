import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import ProfileInner from './ProfileInner';
import PersanalData from './PersanalData';
import AddApartament from './AddApartament';

export default class ProfileBody extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {block: <div></div>}
  }

  render(){
    let block = <div></div>
    const ShowProfile = () =>{
      this.setState({block: <ProfileInner login={this.props.login} res=""/>});
      return(
        <div></div>
      );
    }

    const handlerPData = () =>{
      this.setState({block: <PersanalData login={this.props.login}/>});
      return(
        <div></div>
      );
    }

    const ShowMatches = () =>{
      this.setState({block: <ProfileInner/>});
      return(
        <div></div>
      );
    }

    const ShowAparts = () =>{
      this.setState({block: <ProfileInner/>});
      return(
        <div></div>
      );
    }

    const handlerAddAps = () =>{
      this.setState({block: <AddApartament/>});
      return(
        <div></div>
      );
    }

    const ShowContracts = () =>{
      this.setState({block: <ProfileInner/>});
      return(
        <div></div>
      );
    }

    return(
      <div className="my-2">
        <Container>
          <Row>
            <Col md={9}>
              {this.state.block}
            </Col>
            <Col md={3} className="pr-0">
              <Accordion>
                <ListGroup defaultActiveKey="#link1" sticky="top">
                  <ListGroup.Item action onClick={ShowProfile} className="p-0">
                    <Accordion.Toggle as={ListGroup.Item}  variant="text" eventKey="0">
                      Профиль
                    </Accordion.Toggle>
                  </ListGroup.Item>
                  <Accordion.Collapse eventKey="0">
                    <ListGroup.Item style={{'background-color':'#f2f2f2'}} action onClick={(e) => handlerPData(e)} className="mx-1">
                      Персональные данные
                    </ListGroup.Item>
                  </Accordion.Collapse>
                  <ListGroup.Item action onClick={ShowMatches} className="p-0">
                    <Accordion.Toggle as={ListGroup.Item} variant="text" eventKey="1">
                      Совпадения
                    </Accordion.Toggle>
                  </ListGroup.Item>
                  <ListGroup.Item action onClick={ShowAparts} className="p-0">
                    <Accordion.Toggle as={ListGroup.Item} variant="text" eventKey="2">
                      Квартиры
                    </Accordion.Toggle>
                  </ListGroup.Item>
                  <Accordion.Collapse eventKey="2">
                    <div>
                      <ListGroup.Item style={{'background-color':'#f2f2f2'}} className="mx-1">
                        Мои квартиры
                      </ListGroup.Item>
                      <ListGroup.Item style={{'background-color':'#f2f2f2'}} action onClick={(e) => handlerAddAps(e)} className="mx-1">
                        Добавить квартиру
                      </ListGroup.Item>
                    </div>
                  </Accordion.Collapse>
                  <ListGroup.Item action onClick={ShowContracts} className="p-0">
                    <Accordion.Toggle as={ListGroup.Item} variant="text" eventKey="3">
                      Договоры
                    </Accordion.Toggle>
                  </ListGroup.Item>
                  <Accordion.Collapse eventKey="3">
                    <div>
                      <ListGroup.Item style={{'background-color':'#f2f2f2'}} className="mx-1">
                        Мои договоры
                      </ListGroup.Item>
                      <ListGroup.Item style={{'background-color':'#f2f2f2'}} className="mx-1">
                        Добавить договор
                      </ListGroup.Item>
                    </div>
                  </Accordion.Collapse>
                </ListGroup>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
