import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

     componentDidMount() {
        this.TimerID = setInterval(
            ()=> this.tick(),
            1000);
     }

     componentWillUnmount() {
         clearInterval(this.TimerID);
     }

     tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
        return (
            <div>
               <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title><h1>Now the time is</h1></Card.Title>
    <Card.Text>
    <h2> {this.state.date.toLocaleTimeString()} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>
            </div>
        )
    }
}
export default Clock