import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
    constructor(){
        super();
        this.state = {
            members: []
        }
    }
    componentDidMount(){
        fetch("/api/members")
        .then(res => res.json())
        .then(members => this.setState({members}))
    }

  render(){  
  return (
    <div>
        <h2>Customers</h2>
        <ul>
            {this.state.members.map(member => <li key={member.id}>
                {member.firstName} {member.lastName} 
            </li>)}
        </ul>
    </div>
  );
}
}
export default Customers;
