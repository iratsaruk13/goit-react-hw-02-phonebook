import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Container, MainTitle, ContactsTitle, Message } from "./App.styled";
import { FormContact } from "./FormContact/FormContact";
import { Contacts } from "./Contacts/Contacts";
import { FormFilter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    const normalizedNumber = this.normalizedNumber(number);
    const checkName = this.state.contacts.some(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: normalizedNumber,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  normalizedNumber = number => {
    let normalizedNumber = number.substring(0, 3) + '-';
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        normalizedNumber += '-';
      }
      normalizedNumber += number[i];
    }
    return normalizedNumber;
  };

  onChangeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
          onChange={this.onChangeFilter}
        />
        {contacts.length === 0 ? (
          <Message>You don't have contacts yet</Message>
        ) : (
          <Contacts
            options={filteredContacts}
            removeContact={this.removeContact}
          />
        )}
      </Container>
    );
  }
}
