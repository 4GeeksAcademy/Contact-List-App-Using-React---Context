import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const ContactCard = (props) => {

  const { store, dispatch } = useGlobalReducer()


  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.email}</p>
        <p className="card-text">{props.Phone}</p>
        <p className="card-text">{props.address}</p>
        <a href="#" className="btn btn-primary">Update Now</a>
      </div>
    </div>
  );
};

