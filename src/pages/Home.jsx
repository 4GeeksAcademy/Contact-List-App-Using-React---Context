import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { useState, useEffect } from "react";
import { getContacts } from "../hooks/actions.jsx";


export const Home = () => {

	const { store, dispatch, goGetAgenda } = useGlobalReducer()
	const [contact, setContact] = useState([]);

	useEffect(() => {
		getContacts()
	}, [])


	return (
		<div className="text-center mt-5">
			<h1></h1>
			<p>
				{store.contacts.map((contact) => {
					<div key={contact.id}>
						<div>name:{contact.name}</div>
						<div>phone:{contact.phone}</div>
						<div>email:{contact.email}</div>
						<div>address:{contact.address}</div>
					</div>
				})}
			</p>
		</div>
	);
}; 