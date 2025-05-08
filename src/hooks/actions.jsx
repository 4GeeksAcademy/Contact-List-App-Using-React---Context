export const goGetAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/nmorris11");
    let data = response.json()


    if (data.detail == 'Agenda "nmorris11" does not exist.') {
        createAgenda();
        // getContacts()
    }


    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
}


export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/nmorris11", {
        method: POST,
        headers: { "content-type": "application.json" }
    });
    let data = response.json()
    console.log("Here is your create agenda data",data)
    goGetAgenda(dispatch) 
}


export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/nmorris11/contacts");
    let data = response.json()

    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts },
    });
}


export const createContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/nmorris11/contacts", {
        method: POST,
        headers: {"content-type": "application.json"},
        body: {
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
           
        }
    });
    // let data = response.json()
    getContacts(dispatch)
}


export const updateContact = async (dispatch,payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/nmorris11/contacts/20", {
        method: PUT,
        headers: {"content-type": "application.json"},
        body: {
             "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        }
    });
    let data = response.json()
}

export const deleteContact = async (dispatch,payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/nmorris11/contacts/20", {
        method: DELETE,
    });
    let data = response.json()

}






