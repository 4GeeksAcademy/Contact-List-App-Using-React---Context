import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { useState, useEffect } from "react";

export const Home = () => {
  const { store, dispatch, goGetAgenda } = useGlobalReducer();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    goGetAgenda(dispatch, store);
    // console.log("Here are the contacts from home", store.contacts);
  }, []);

  // useEffect(() => {
  //   setContacts(store.contacts);

  return (
    <div className="text-center mt-5">
      <h1></h1>
      <div>
        {store.contacts?.length > 0 ? (
          store.contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))
        ) : (
          <h1>No Contacts</h1>
        )}
      </div>
    </div>
  );
};
