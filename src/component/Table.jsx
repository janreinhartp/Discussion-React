import React from "react";

import { useEffect, useContext } from "react";
import { GetAllContacts } from "../context/ContactAction";
import ContactContext from "../context/ContactContext";

import TableContent from "./TableContent";

function Table() {
  const { contacts, dispatch } = useContext(ContactContext);

  const loadContacts = async () => {
    const data = await GetAllContacts();
    dispatch({ type: "LOAD_ALL_CONTACTS", payload: data });
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <TableContent key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
