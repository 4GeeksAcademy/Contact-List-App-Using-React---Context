import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useEffect } from "react";
import { useState } from "react";
import { getContacts } from "../hooks/actions.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { store, dispatch, getContacts } = useGlobalReducer();
  const [updatedContact, setUpdatedContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    id: id,
  });

  useEffect(() => {
    // console.log("My id",id)
    // let contact = store.contacts?.filter((contact, index) => {
    //   return contact.id == id;
    // });
    // console.log("My contact",contact)
    // setUpdatedContact(contact)
    if (store.contacts.length > 0) {
      const foundContact = store.contacts.find((c) => c.id === parseInt(id));
      if (foundContact) {
        setUpdatedContact(foundContact);
      }
    }
  }, []);

  const handleChange = (e) => {
    setUpdatedContact({ [e.target.name]: e.target.value });
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `https://playground.4geeks.com/contact/agendas/nmorris11/contacts/${updatedContact.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: updatedContact.name,
          phone: updatedContact.phone,
          email: updatedContact.email,
          address: updatedContact.address,
        }),
      }
    );
    let data = response.json();
    navigate("/");
    getContacts(dispatch);
  };

  return (
    <form className="row g-3">
      <div className="col-md-12">
        <label htmlFor="inputName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          value={updatedContact.name}
          onChange={(e) =>
            setUpdatedContact({ ...updatedContact, name: e.target.value })
          }
        />
      </div>
      <div className="col-md-12">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          value={updatedContact.email}
          onChange={(e) =>
            setUpdatedContact({
              ...updatedContact,
              email: e.target.value,
            })
          }
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputPhone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPhone"
          value={updatedContact.phone}
          onChange={(e) =>
            setUpdatedContact({
              ...updatedContact,
              phone: e.target.value,
            })
          }
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          value={updatedContact.address}
          onChange={(e) =>
            setUpdatedContact({
              ...updatedContact,
              address: e.target.value,
            })
          }
        />
      </div>
      <div className="col-12">
        {/* <button type="submit" className="btn btn-primary" onClick={handleSubmit}> */}
        <button
        //   type="submit"
          className="btn btn-primary"
          onClick={ handleSubmitContact }
        >
          Update Contact
        </button>
      </div>
    </form>
  );
};
