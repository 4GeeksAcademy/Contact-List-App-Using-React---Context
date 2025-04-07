import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, { useState } from "react";


export const AddContacts = () => {

	const { store, dispatch } = useGlobalReducer()

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();


		const newContact = { name, email, phone, address };



		dispatch({ type: 'ADD_CONTACT', payload: newContact });
	};


	return (
		<form className="row g-3">
			<div className="col-md-12">
				<label htmlFor="inputName" className="form-label">Full Name</label>
				<input
					type="text"
					className="form-control"
					id="inputName"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="col-md-12">
				<label htmlFor="inputEmail" className="form-label">Email</label>
				<input
					type="email"
					className="form-control"
					id="inputEmail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="col-12">
				<label htmlFor="inputPhone" className="form-label">Phone</label>
				<input
					type="text"
					className="form-control"
					id="inputPhone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
				/>
			</div>
			<div className="col-12">
				<label htmlFor="inputAddress" className="form-label">Address</label>
				<input
					type="text"
					className="form-control"
					id="inputAddress"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
				/>
			</div>
			<div className="col-12">
				{/* <button type="submit" className="btn btn-primary" onClick={handleSubmit}> */}
				<button type="submit" className="btn btn-primary">
					Add Contact
				</button>
			</div>
		</form>
	);
}; 