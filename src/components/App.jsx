import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  loginInputId = nanoid();

  handeleContact = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };



  render() {
    const {contacts, name} = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form>
          <label>
            Name:
            <input
              onChange={this.handeleContact}
              id={this.loginInputId}
              value={this.state.name}
              type="text"
              name="name"
              required
            />
          </label>
          <label>Number
            <input type="tel" />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={name}>{contact.name}</li>
          ))}
          <li></li>
        </ul>
      </div>
    );
  }
}
