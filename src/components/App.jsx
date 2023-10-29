import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  loginInputId = nanoid();

  handleContact = event => {
    const {name, value} = event.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    
  };

handleSubmit = e => {
e.preventDefault();
console.log(this.state);
};


  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleContact}
              id={this.loginInputId}
              value={this.state.name}
              type="text"
              name="name"
              required
            />
          </label>
          <label>
            Number:
            <input
              onChange={this.handleContact}
              id={this.loginInputId}
              value={this.state.number}
              type="tel"
              name="number"
              required
            />
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
