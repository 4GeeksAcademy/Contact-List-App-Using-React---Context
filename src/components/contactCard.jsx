import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";


export const contactCard = () => {

  const {store, dispatch} =useGlobalReducer()
//   const [contact, setContact] = useState([]);


    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!!</h1>
            <p>
                <img src={rigoImageUrl} />
            </p>
        </div>
    );
}; 