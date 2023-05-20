import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { Countainer } from "../components/Countainer/Countainer";
import { TitleContact,TitlePhone } from "../components/Titles/Titles";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";

const CONTACTS_KEY='contacts'


export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter:'',
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.contacts !== this.state.contacts){
     localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount(){
    const contactCurrent= localStorage.getItem(CONTACTS_KEY);
    const parseContact= JSON.parse(contactCurrent)

    if(contactCurrent){
      this.setState({contacts:parseContact})
    }
  }

  handleSubmit = (values, {resetForm}) =>{
    this.addNewCotact(values,resetForm);
}

   addNewCotact = (values, resetForm) =>{
  const {name, number} = values;
  const {contacts} = this.state

  
  const checkContact = contacts.find(item => item.name === name);
  
  const newContact = {
    id: nanoid(),
    name,
    number
  }

  if (checkContact !== undefined) {
    alert(`${name} is already in contacts.`);
  }else{
    this.setState(prevState =>({
      contacts: [newContact, ...prevState.contacts]
    }))
    resetForm()
  }
  
}

  handleFindContact=e=>{
    this.setState({filter:e.target.value})
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase() || ''));
  }

  deleteContact= contactId=>{
    this.setState(prevState=>({
      contacts:prevState.contacts.filter(({id}) => id !== contactId)
    }))
  }


  render() {
    

    return (

      <Countainer> 
         <TitlePhone>Phonebook</TitlePhone >


          <Form  
           handleSubmit={this.handleSubmit}
          />
       

        <TitleContact>Contacts</TitleContact>

        <Filter 
            title="Find contacts by name"
            handleFindContact={this.handleFindContact}
            filter={this.state.filter}
           />

             <Contacts 
                contacts={this.filterContacts()} 
                deleteContact={this.deleteContact}
                />

      </Countainer>
    );
  }
};


