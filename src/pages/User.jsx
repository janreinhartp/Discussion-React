import React from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetContact } from "../context/ContactAction";
import ContactContext from "../context/ContactContext";

function User() {
  const { contact, dispatch } = useContext(ContactContext);
  const params = useParams();
  useEffect(() => {
    const getContactData = async () => {
      const contactData = await GetContact(params.ID);
      dispatch({ type: "GET_CONTACT", payload: contactData });
    };

    getContactData();
  }, []);

  return (
    <div>
      <h2>ID : {contact.id}</h2>
      <h2>Name : {contact.name}</h2>
      <h2>Email : {contact.email}</h2>
      <h2>Contact : {contact.contact}</h2>
      <Link to="/">Back Button</Link>
    </div>
  );
}

export default User;
