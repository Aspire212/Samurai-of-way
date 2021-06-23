const state = {
    profilePage: {
        posts: [{
                id: 1,
                message: "It's my first post!",
                likesCount: 11,
            },
            {
                id: 2,
                message: "Hi, how are you?",
                likesCount: 12,
            },
        ]
    },
    dialogsPage: {
        dialogs: [
            { name: "Stason", id: 1 },
            { name: "Dimych", id: 2 },
            { name: "Artyom", id: 3 },
            { name: "Alesya", id: 4 },
            { name: "Ludaria", id: 5 },
            { name: "Sasha", id: 6 },
            { name: "Varya", id: 7 },
        ],
        messages: [
            { text: "Hi", id: 1 },
            { text: "How is your it-kamsutra?", id: 2 },
            { text: "Yo", id: 3 },
            { text: "Yo-yo", id: 4 },
        ],
    }


}

export default state