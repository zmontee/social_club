/*
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./types";
import profileReducer from "./reducers/profileReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    callSubscriber() {

    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this.callSubscriber();
    }
}

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText});

window.store = store;
export default store;*/
