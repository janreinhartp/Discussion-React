import axios from "axios";

const contact_url = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
});

export const GetAllContacts = async () => {
  const response = await contact_url.get(`/users`);
  const contacts = await response.data;
  return contacts;
};

export const AddContact = async (data) => {
  const response = await contact_url.post(`/add`, data);
  const contact = await response.data;

  return contact;
};

export const GetContact = async (Id) => {
  const response = await contact_url.get(`/users/${Id}`);
  const contact = await response.data;
  return contact;
};

export const DeleteContact = async (Id) => {
  const response = await contact_url.delete(`/delete/${Id}`);
  const contact = await response.data;
  return contact;
};

export const EditContact = async (Id, data) => {
  const response = await contact_url.put(`/update/${Id}`, data);
  const contact = await response.data;

  return contact;
};
