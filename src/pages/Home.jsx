import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { contactCard } from "../components/contactCard.jsx";
import {useState,useEffect} from "react";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const [contact, setContact] = useState([]);


	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				
			</p>
		</div>
	);
}; 