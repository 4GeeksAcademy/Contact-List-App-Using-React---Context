import { useState } from "react";


const contactContainer = () => {
    const [contact, setContact] = useState([]);
    const [newContact, setNewContact] = useState("");




    const getAgenda = async () => {
        const response = await fetch("", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            }
        })


        const createAgenda = async () => {

        }


        const getContact = async () => {

        }


        const createContact = async () => {

        }


        const updateContact = async () => {

        }


        const deleteContact = async () => {

        }

    }
}

    





