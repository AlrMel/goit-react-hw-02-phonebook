import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  nlogiInputId = nanoid();

  handleContact = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handelFindName = e => {
    const { contacts } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    this.setState({ filter: e.target.value, filterContacts });
  };

  render() {
    const { name, number, filter, filterContacts } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              onChange={this.handleContact}
              id={this.loginInputId}
              value={name}
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
              value={number}
              type="tel"
              name="number"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {filterContacts &&
            filterContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
        </ul>
        <form action="">
          <label>
            Find contacts by Name
            <input
              onChange={this.handelFindName}
              id={this.loginInputId}
              value={filter}
              type="text"
              name="filter"
              placeholder="Find a Name"
            />
          </label>
        </form>
      </div>
    );
  }
}
