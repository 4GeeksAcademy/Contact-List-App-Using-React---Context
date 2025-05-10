export const goGetAgenda = async (dispatch, store) => {
  let response = await fetch(
    "https://playground.4geeks.com/contact/agendas/nmorris11"
  );
  let data = response.json();
  if (!response.ok) {
    console.log("go get agenda failed");

    await createAgenda();
    getContacts(dispatch, store);
  } else {
    getContacts(dispatch, store);
    dispatch({
      type: "set_agenda",
      payload: { agenda: data.slug },
    });
  }
};

export const createAgenda = async (dispatch, payload) => {
  let response = await fetch(
    "https://playground.4geeks.com/contact/agendas/nmorris11",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
    }
  );
  let data = await response.json();
  console.log("Here is your create agenda data", data);
  goGetAgenda(dispatch);
};

export const getContacts = async (dispatch, store) => {
  let response = await fetch(
    "https://playground.4geeks.com/contact/agendas/nmorris11/contacts"
  );
  let data = await response.json();
  console.log("Here are the contacts from home", data.contacts);
  dispatch({
    type: "get_contacts",
    payload: { contacts: data.contacts },
  });
};

export const createContact = async (dispatch, payload) => {
  let response = await fetch(
    "https://playground.4geeks.com/contact/agendas/nmorris11/contacts",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        address: payload.address,
      }),
    }
  );
  // let data = response.json()
  getContacts(dispatch);
};

// export const updateContact = async (payload, dispatch) => {
//   let response = await fetch(
//     `https://playground.4geeks.com/contact/agendas/nmorris11/contacts/${payload.id}`,
//     {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         name: payload.name,
//         phone: payload.phone,
//         email: payload.email,
//         address: payload.address,
//       }),
//     }
//   );
//   let data = response.json();
//    getContacts(dispatch);
// };

export const deleteContact = async (dispatch, payload) => {
  let response = await fetch(
    "https://playground.4geeks.com/contact/agendas/nmorris11/contacts/20",
    {
      method: "DELETE",
    }
  );
  let data = response.json();
};
