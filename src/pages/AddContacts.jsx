import { useNavigate } from "react-router-dom";
import { createContact } from "../hooks/actions.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState } from "react";

export const AddContacts = () => {
  const navigate = useNavigate();
  const { store, dispatch, createContact } = useGlobalReducer();
  const [newContact, setNewContact] = useState( {
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  // const [name, setName] = useState({name:""});
  // const [email, setEmail] = useState({email:""});
  // const [phone, setPhone] = useState({phone:""});
  // const [address, setAddress] = useState({address:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(newContact);
    navigate("/");
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
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
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
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
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
          onChange={(e) =>
            setNewContact({ ...newContact, phone: e.target.value })
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
          onChange={(e) =>
            setNewContact({ ...newContact, address: e.target.value })
          }
        />
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};
