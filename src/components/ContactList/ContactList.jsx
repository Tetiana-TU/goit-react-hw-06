import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // Відправляємо екшен для видалення контакту
  };
  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase()) // Перевіряємо чи є значення фільтра в імені контакту
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact
            contact={contact}
            onDelete={() => handleDelete(contact.id)} // Відправляємо функцію для видалення контакту
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
