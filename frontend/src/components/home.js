import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Temperature: '',
            Humidity: '',
            WindChill: ''
        }
        this.state = { weather: [] };
    }

    render() {

        return (
            <div className="text-center container w-95" >

                <Jumbotron fluid className="rounded" style={{ backgroundImage: "url('https://i.pinimg.com/originals/13/b9/01/13b90120f2685a8334951fd8e3d53750.png')", backgroundColor: 'white' }} >
                    <h2>Welcome to DIS-MISSLE! </h2>
                    <h4>Have you home in a whistle!</h4>
                    <br></br>
                    <img className="rounded" src="https://w.bookcdn.com/weather/picture/32_4715_0_1_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=29067" alt="weather" />

                </Jumbotron>
            </div >
        )
    }
}
