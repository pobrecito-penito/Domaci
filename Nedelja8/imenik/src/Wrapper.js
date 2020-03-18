import React from 'react'
import ContactList from './ContactList';
import Error from './Error'
  
class Wrapper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            filteredContacts: [],
            name: '',
            number: '',
            message: ''
        }
    }
    
    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    
    handleNumber(e){
        this.setState({
            number: e.target.value
        })
    }
    
    handleClick(){
        if(this.state.name.trim() === '' || this.state.number.trim() === ''){
            this.setState({
                message: 'Wrong input!'
            })
        } 
         else if(!this.state.number.startsWith('+')){
            this.setState({
                message: 'Please enter number in format +ххх ххххххххх'
            })
        }
         else {
            this.setState({
                message: ''
            })
            if(this.state.contacts.find(el => el.name === this.state.name)){
                if(window.confirm('Are you sure you want to replace existing contact?')){
                    let contact = {
                        name: this.state.name,
                        number: this.state.number
                    }
                    let index = this.state.contacts.findIndex(el => el.name===this.state.name);
                    this.state.contacts.splice(index,1,contact);
                    this.setState({
                        contacts: this.state.contacts,
                        filteredContacts: this.state.contacts
                    })
                } else {return}
            } else {
                let contact = {
                    name: this.state.name,
                    number: this.state.number
                }
                this.state.contacts.push(contact);
                this.setState({
                    contacts: this.state.contacts,
                    filteredContacts: this.state.contacts
                })
        } }}

    reset() {
        this.setState({
            name: '',
            number: ''
        })
    }

    handleInput(e){
        let filteredContacts = this.state.contacts.filter(el =>  el.name.includes(e.target.value));
        this.setState({
            filteredContacts: filteredContacts
        })
    }

    render() {
        
        return(
            <>
            <div>
                <input type="text" onChange={(e) => this.handleName(e)} value={this.state.name} placeholder="Enter name" />
                <input type="text" onChange={(e) => this.handleNumber(e)} value={this.state.number} placeholder="Enter number" />
                <button onClick={() =>{ this.handleClick(); this.reset() }}>Add Contact</button>
            </div>
            <div>
                <Error message={this.state.message} />
            </div>
            <div>
                <h3>Contact List</h3>
                <ContactList contacts={this.state.filteredContacts} />
            </div>
            <input type="text" onChange={(e) => this.handleInput(e)} />
            </>
        )
    }
    
}

export default Wrapper