import Component from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import axios from 'axios';

export default class ProfileInner extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {name: "", ndname: "", sex: "", date: "", phone: "", email: ""}
  }

  async componentDidMount(){
    var self = this;
    let url = '192.168.0.5';
    await axios.get('http://'+ url +':8080/api/v1/users/userinfo/'+ this.props.login).then(function (response) {
        if(response.data.code == 200){
          let len = response.data.us.length - 1;
          try{
            self.setState({name: response.data.us[len].name,date: response.data.us[len].dateborn,ndname: response.data.us[len].surname,phone: response.data.us[len].phone,email: response.data.us[len].email,sex: response.data.us[len].sex})

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
      <div style={{'background-color':'rgba(255, 255, 255, .75)'}}>
        <Container>
          <Row>
            <Col lg={3}>
              <Image src="https://sun9-55.userapi.com/-0mfdYSseuR5_9BriNswx8BPryoWf5lzwUqoyg/1h9kUj56k1A.jpg" className='p-2' roundedCircle fluid />
            </Col>
            <Col lg={9}>
              <Row>
                <h3>{this.state.name + " " +this.state.ndname}</h3>
              </Row>
              <Row>
                <h5>{this.props.login}</h5>
              </Row>
              <Row className="border-bottom-1">
                <h5>{this.state.date}</h5>
              </Row>
              <Row className="border-bottom-1">
                <h5>{this.state.sex}</h5>
              </Row>
              <Row className="border-bottom-1">
                <h4>Контакты:</h4>
              </Row>
              <Row className="border-bottom-1">
                <h5>{this.state.phone}</h5>
              </Row>
              <Row>
                <h5>{this.state.email}</h5>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
