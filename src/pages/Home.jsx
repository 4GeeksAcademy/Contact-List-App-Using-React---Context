import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch, goGetAgenda } = useGlobalReducer()
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		goGetAgenda()
	}, [])


	useEffect(() => {}, [store.contacts])

	// if (!store.contacts) {
	// 	return <div>Loading...</div>;  // Or display some fallback content
	// }

	// const contacts = Array.isArray(store.contacts) ? store.contacts : [];

	return (
		<div className="text-center mt-5">
			<h1></h1>
			<div>
				{store.contacts.map((contact) => {
					<div key={contact.id}>
						<div>name:{contact.name}</div>
						<div>phone:{contact.phone}</div>
						<div>email:{contact.email}</div>
						<div>address:{contact.address}</div>
					</div>
				})}
			</div>
			<div className="text-center">
				<ContactCard/>
				<Link className="btn btn primary" to={"/update"}>update</Link>
				<Link className="btn btn primary" to={"/Add"}>Add</Link>
			</div>
		</div>
	);
}; 