import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { updateContacts } from "./updateContacts.jsx";
import { addContacts } from "./addContacs.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  


	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 