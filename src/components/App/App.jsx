import React, { Component } from "react";
import { nanoid } from "nanoid";
import initialContacts from "../../contacts.json";

class App extends Component {
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
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <form addContact={this.addContact}>
          <div>
            <label htmlFor="name">Name </label>
            <input type="text" id="name"  />
          </div>
          <div>
            <label htmlFor="number">Number </label>
            <input type="tel" id="number"  />
          </div>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <form onChange={this.onChangeFilter}>
          <label htmlFor="filter">Find contacts by name </label>
          <input type="text" id="filter" name="filter" />
        </form>
      </div>
    );
  }
}

export default App;
