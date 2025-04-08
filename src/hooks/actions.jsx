export const userAgenda = async (dispatch, payload) => {
    let response = await fetch("");
    let data = response.json


    if (data.detail == 'Agenda "nmorris11" does not exist.') {
        createAgenda();
    }


    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
}


export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("", {
        method: POST,
        headers: { "content-type": "application.json:" }
    });
    let data = response.json
    userAgenda()
}


export const getContact = async (dispatch, payload) => {
    let response = await fetch("");
    let data = response.json

    dispatch({
        type: "getContact",
        payload: {contacts: data.contacts },
    });
}


export const createContact = async (dispatch, payload) => {
    let response = await fetch("", {
        method: POST,
        headers: { "content-type": "application.json:"}
    });
    let data = response.json
}


export const updateContact = async (dispatch,payload) => {
    let response = await fetch("", {
        method: PUT,
        headers: {"content-type": "application.json:"}
    });
    let data = response.json
}

export const deleteContact = async (dispatch,payload) => {
    let response = await fetch("");
    let date = response.json

    dispatch({
        type: "getContact",
        payload: {contacts: data.contacts },
    });

}






