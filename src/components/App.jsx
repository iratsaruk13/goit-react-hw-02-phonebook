import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Container, MainTitle, ContactsTitle } from "./App.styled";
import {FormContact} from "./FormContact/FormContact";
import { Contacts } from "./Contacts/Contacts";
import { FormFilter } from "./Filter/Filter";
import initialContacts from "../contacts.json";

export class App extends Component {
  state = {
    contacts: initialContacts,
    name: "",
  };

  addContact = (name, number) => {
    const checkName = this.state.contacts.some(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChangeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.includes(filter)
    );
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.getContacts();
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <FormContact addContact={this.addContact} />
        
        <ContactsTitle>Contacts</ContactsTitle>
        <FormFilter 
        label="Find contacts by name"
        onChange={this.onChangeFilter} />
        {contacts.length === 0 ? (
          <p>You don't have contacts yet</p>
        ) : (<Contacts
          options={filteredContacts}
          removeContact={this.removeContact}
        />
        )
      }
      </Container>
    );
  }
}


