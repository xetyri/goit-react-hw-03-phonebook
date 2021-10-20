import { Component } from "react";
import Section from "./components/Section";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (contact) => {
    this.state.contacts.some(({ name }) => name === contact.name)
      ? alert("Sorry, this name has already been added !!!")
      : this.setState((prevState) => ({
          contacts: [
            { id: shortid.generate(), ...contact },
            ...prevState.contacts,
          ],
        }));
    // console.log(this.contacts);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== e),
    }));
    // console.log(this.contacts);
  };

  render() {
    const { contacts, filter } = this.state;
    const noramalizesFilter = filter.toLowerCase();
    const visibleContact = contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(noramalizesFilter)
    );

    return (
      <Section>
        <Container>
          <ContactForm onSubmit={this.addContact} />
        </Container>
        <Container>
          <Filter value={filter} onChange={this.changeFilter} />
        </Container>
        <Container>
          <ContactList
            contacts={visibleContact}
            deleteContact={this.deleteContact}
          />
        </Container>
      </Section>
    );
  }
}

export default App;
