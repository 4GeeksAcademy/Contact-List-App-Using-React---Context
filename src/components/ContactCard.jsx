import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { deleteContact } from "../hooks/actions.jsx";

export const ContactCard = ({ contact }) => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = () => {
    deleteContact(dispatch, contact.id);
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.phone}</p>
          <p className="card-text">{contact.address}</p>
          <Link className="btn btn-primary" to={`/update/${contact.id}`}>
            update
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(dispatch, contact.id)}>
            Kick Rocks
          </button>
        </div>
      </div>
    </div>
  );
};
