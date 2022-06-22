import React from "react";
import { Link } from "react-router-dom";

import ContactContext from "../context/ContactContext";
import { useContext } from "react";
import { DeleteContact } from "../context/ContactAction";

function TableContent({ contact }) {
  const { contacts, dispatch, formData } = useContext(ContactContext);

  const handleOnClickDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      DeleteContact(contact.id);
      const updateContacts = contacts.filter((item) => item.id !== contact.id);
      dispatch({
        type: "DELETE_CONTACT",
        payload: updateContacts,
      });
    } else {
    }
  };

  const handleOnClickEdit = () => {
    dispatch({ type: "SET_EDIT_FALSE" });
    const data = contact;

    dispatch({
      type: "EDIT_CONTACT",
      payload: data,
    });

    dispatch({ type: "SET_EDIT" });
  };

  return (
    <>
      <tr>
        <th>{contact.id}</th>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.contact}</td>
        <td>
          <Link to={`/users/${contact.id}`}>
            <h3>View User</h3>
          </Link>
          <button onClick={handleOnClickEdit}>Edit</button>

          <button onClick={handleOnClickDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default TableContent;
