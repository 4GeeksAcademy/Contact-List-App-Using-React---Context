import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.Phone}</p>
          <p className="card-text">{contact.address}</p>
          <Link className="btn btn primary" to={"/update"}>
            update
          </Link>
          <Link className="btn btn primary" to={"/add"}>
            Add
          </Link>
        </div>
      </div>
    </div>
  );
};
