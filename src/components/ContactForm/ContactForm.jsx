import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && number) {
      // Додаємо новий контакт через екшен
      dispatch(addContact({ id: Date.now().toString(), name, number }));
      // Очищаємо поля форми
      setName("");
      setNumber("");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={css.field}
        type="text"
        placeholder="Phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
