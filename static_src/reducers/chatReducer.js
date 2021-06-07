import update from 'react-addons-update';
import { ADD_CHAT } from "../actions/chatActions.js";

const initialState = {
    chats: {
        1: { title: 'Чат 1', messageList: [1] },
        2: { title: 'Чат 2', messageList: [2] },
        3: { title: 'Чат 3', messageList: [] },
    },
    profile: {
        name: "bot",
        age: "99"
    }
};


export default function chatReducer(state = initialState, action) {
    switch (action.type) {
        // case SEND_MESSAGE:
        //     {
        //         return update(store, {
        //             chats: {
        //                 $merge: {
        //                     [action.chatId]: {
        //                         title: store.chats[action.chatId].title,
        //                         messageList: [...store.chats[action.chatId].messageList, action.messageId]
        //                     }
        //                 }
        //             },
        //         });
        //     }
        case ADD_CHAT:
            {
                const chatId = Object.keys(state.chats).length + 1;
                return update(state, {
                    chats: {
                        $merge: {
                            [chatId]: {
                                title: action.title,
                                messageList: []
                            }
                        }
                    },
                });
            }
        default:
            return state;
    }
}