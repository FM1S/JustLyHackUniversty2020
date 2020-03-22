import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import axios from 'axios';

export default class MyAps extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {block:< div></div>, town: "", street: "", house: "", metro: "", renttype: "", roomsnum: "", cost:"", sqware:"", allfloors: "", floorap: "", description:""}
  }

  async componentDidMount(){
    var self = this;
    let url = '192.168.0.5';
    await axios.get('http://'+ url +':8080/api/v1/users/givemyaps/'+ this.props.login).then(function (response) {
        if(response.data.code == 200){
          try{
            let rs = response.data.search[0];
            self.setState({town: rs.town ,street: rs.street,house: rs.house,metro: rs.metro,renttype: rs.renttype,roomsnum: rs.roomsnum ,cost: rs.cost,sqware: rs.sqware,allfloors: rs.allfloors,floorap: rs.floorap, description:rs.description})

        }catch(err){
          alert("Внутренняя ошибка!");}
        }else{
          alert("Внутренняя ошибка! Данные не загружены!");
        }

    }).catch(function (error) {
      // handle error
    }).finally(function () {
      // always executed
    });
  }

  render(){
    return(
        <div style={{'background-color':'rgba(255, 255, 255, .75)', height:'83vh'}} className="overflow-auto pb-10 scrollbar scrollbar-success p-2">
          <Container lc>
            <Row>
              <Col lg={12}>
                <Row>
                  <h3>Квартира:</h3>
                </Row>
                <Row>
                  <h5>{this.state.town}</h5>
                </Row>
                <Row>
                  <h5>{this.props.street}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.house}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.metro}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.renttype}</h5>
                </Row>
                <Row>
                  <h5>{this.state.roomsnum}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.cost}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.sqware}</h5>
                </Row>
                <Row>
                  <h5>{this.state.allfloors}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.floorap}</h5>
                </Row>
                <Row className="border-bottom-1">
                  <h5>{this.state.description}</h5>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}
