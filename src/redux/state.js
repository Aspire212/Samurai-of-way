import { rerenderEntireThree } from "../render";
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
        ],
        newPostText: 'it-kamasutra.com'
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
    },
    sitebar: {
        friends: [{
                id: 1,
                name: 'Sasha',
                img: 'https://otyrar.kz/wp-content/uploads/2018/11/%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0.jpeg'
            },
            {
                id: 2,
                name: 'Ludaria',
                img: 'https://xaxa-net.ru/uploads/posts/2014-03/1394119777_xaxanet-true-20140306-1.jpg'
            },
            {
                id: 3,
                name: 'Varya',
                img: 'https://art-assorty.ru/uploads/posts/2017-11/1509700195_4f6e968c04b1a7ddbccb8bb2a7b48a0c.jpg'
            }
        ]
    }


}

export let updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state)
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state)
}

export default state