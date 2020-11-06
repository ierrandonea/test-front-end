const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            hotels: null,
            payments: null,
            notifications: null,
            modal: true,
            Hid: null
        },
        actions: {
            getHotels: () => {
                let store = getStore();
                fetch(`http://localhost:3001/hotels`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        setStore({
                            hotels: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            getPayments: () => {
                let store = getStore();
                fetch(`http://localhost:3001/payments`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        setStore({
                            payments: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            getNotifications: () => {
                let store = getStore();
                fetch(`http://localhost:3001/notifications`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => response.json())
                    .then(data => {
                        setStore({
                            notifications: data
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            setModal: (id) =>{
                let store = getStore();
                if (store.modal == false) {
                    setStore({
                        modal: true,
                        Hid: id
                    })
                } else {                    
                    setStore({
                        modal: false,
                        Hid: null
                    })
                }
            }

        }
    }
}

export default getState;