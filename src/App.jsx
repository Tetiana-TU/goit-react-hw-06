import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name || "");

  useEffect(() => {
    // Ініціалізація контактів, якщо вони збережені в локальному сховищі
    if (contacts.length === 0) {
      dispatch(addContact(...initialContacts));
    }
  }, [contacts, dispatch]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter ? filter.toLowerCase() : "")
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
