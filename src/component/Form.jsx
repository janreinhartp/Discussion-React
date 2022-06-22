import React from "react";
import { useContext, useState, useEffect } from "react";
import { AddContact, EditContact } from "../context/ContactAction";
import ContactContext from "../context/ContactContext";

function Form() {
  const { contacts, formData, dispatch, isEdit } = useContext(ContactContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    //   setName(formData.name);
    //   setEmail(formData.email);
    //   setContact(formData.contact);
    console.log(formData);
  }, [formData]);

  const HandleSubmit = async () => {
    if (isEdit) {
      console.log(formData);

      const data = { name: name, email: email, contact: contact };

      const editedData = await EditContact(formData.id, data);

      const edittedContacts = contacts.map((item) =>
        item.id === editedData.id ? { ...item, ...editedData } : item
      );

      dispatch({
        type: "LOAD_ALL_CONTACTS",
        payload: edittedContacts,
      });

      dispatch({ type: "SET_EDIT_FALSE" });
    } else {
      const data = { name: name, email: email, contact: contact };
      console.log(data);
      try {
        const contact = await AddContact(data);
        contacts.push(contact);

        dispatch({
          type: "ADD_CONTACT",
          payload: contacts,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="contact"
          onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit" />
        <p>{isEdit ? "Edit" : "Add"}</p>
      </form>
    </div>
  );
}

export default Form;
