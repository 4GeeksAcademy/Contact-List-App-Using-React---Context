import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";

export const UpdateContact = () => {

	const { store, dispatch } = useGlobalReducer()



	return (
		<form className="row g-3">
			<div className="col-md-12">
				<label htmlFor="inputName" className="form-label">Full Name</label>
				<input
					type="text"
					className="form-control"
					id="inputName"
					value={name}
					onChange={(e) => updateName(e.target.value)}
				/>
			</div>
			<div className="col-md-12">
				<label htmlFor="inputEmail" className="form-label">Email</label>
				<input
					type="email"
					className="form-control"
					id="inputEmail"
					value={email}
					onChange={(e) => updateEmail(e.target.value)}
				/>
			</div>
			<div className="col-12">
				<label htmlFor="inputPhone" className="form-label">Phone</label>
				<input
					type="text"
					className="form-control"
					id="inputPhone"
					value={phone}
					onChange={(e) => updatePhone(e.target.value)}
				/>
			</div>
			<div className="col-12">
				<label htmlFor="inputAddress" className="form-label">Address</label>
				<input
					type="text"
					className="form-control"
					id="inputAddress"
					value={address}
					onChange={(e) => updateAddress(e.target.value)}
				/>
			</div>
			<div className="col-12">
				{/* <button type="submit" className="btn btn-primary" onClick={handleSubmit}> */}
				<button type="submit" className="btn btn-primary">
					update Contact
				</button>
			</div>
		</form>
	);
}; 