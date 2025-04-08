import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import { Home } from "../pages/Home.jsx";


export const ContactCard = () => {

  const { store, dispatch } = useGlobalReducer()


  return (
    <div className="card" style={{ width: "18rem" }}>  {/* Corrected inline style */}
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Contact</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name</li>
        <li className="list-group-item">Email</li>
        <li className="list-group-item">Phone</li>
        <li className="list-group-item">Address</li>
      </ul>
    </div>
  );
};

