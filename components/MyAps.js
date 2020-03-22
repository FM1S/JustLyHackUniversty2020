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
            self.setState({town: "",street: "",house: "",metro: "",renttype: "",roomsnum: "" ,cost: "",sqware: "",allfloors: "",floorap: "", description:""})

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
        <div style={{'background-color':'rgba(255, 255, 255, .75)', height:'83vh'}} className="overflow-auto pb-10 scrollbar scrollbar-success">

        </div>
    );
  }
}
