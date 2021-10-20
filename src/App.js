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
      { id: "id-1", name: "Rosie Simpson", number: "380950254596" },
      { id: "id-2", name: "Hermione Kline", number: "380950254436" },
      { id: "id-3", name: "Eden Clements", number: "380950256456" },
      { id: "id-4", name: "Annie Copeland", number: "380950252276" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contact = localStorage.getItem("contacts");
    const parsedContact = JSON.parse(contact);

    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    } else {
      this.setState(this.state.contacts);
    }
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

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
