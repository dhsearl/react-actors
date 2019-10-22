import React, { Component } from 'react';


class Input extends Component {
    state ={
        businessLead : {
            firstName : '',
            lastName : '',
            impression : '',
        }
    }
    handleFirst=(event)=>{
        this.setState({ 
            businessLead : {
                firstName : event.target.value,
                lastName : this.state.businessLead.lastName,
                impression : this.state.businessLead.impression,
        }})
    }
    handleLast=(event)=>{
        this.setState({ 
            businessLead : {
                firstName : this.state.businessLead.firstName,
                lastName : event.target.value,
                impression : this.state.businessLead.impression,
        }})
    }
    handleImpression=(event)=>{
        this.setState({ 
            businessLead : {
                firstName : this.state.businessLead.firstName,
                lastName : this.state.businessLead.lastName,
                impression : event.target.value,
        }})
    }

    mailThem=(e)=>{
        e.preventDefault();
        alert(`Thank you ${this.state.businessLead.firstName}`)
        this.setState({
            businessLead : {
                firstName : '',
                lastName : '',
                impression : '',
            }
        })
    }
  render() {
    return (
      <>
      <form>
      <input onChange={this.handleFirst} value={this.state.businessLead.firstName} placeholder={"First Name"} />
      <input onChange={this.handleLast} value={this.state.businessLead.lastName} placeholder={"Last Name"} />
      <input onChange={this.handleImpression} value={this.state.businessLead.impression} placeholder={"Impression"} />
      <button onClick={this.mailThem}>Add</button></form>
      {(this.state.businessLead.firstName && this.state.businessLead.lastName && this.state.businessLead.impression ) &&
<p>{this.state.businessLead.firstName} {this.state.businessLead.lastName}'s celebrity crush is {this.state.businessLead.impression}</p>}
      </>
    );
  }
}

export default Input;