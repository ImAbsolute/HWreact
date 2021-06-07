import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions.js';

const initialState = {

}

export default function messageReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            {
                return update(state, {
                    [action.chatId]: {
                        title: state.chats[action.chatId].title,
                        messageList: [...state.chats[action.chatId].messageList, action.messageId]
                    }
                })
            }
        default:
            return state;
    }
}