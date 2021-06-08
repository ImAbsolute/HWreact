// import update from 'react-addons-update';
// import { SEND_MESSAGE } from '../actions/messageActions';

// const initialStore = {
//     chats: {
//         1: { title: 'Чат 1', messageList: [1] },
//         2: { title: 'Чат 2', messageList: [2] },
//         3: { title: 'Чат 3', messageList: [] },
//     },
//     // messages: {
//     //     1: { text: "Привет!", sender: "bot" },
//     //     2: { text: "Здравствуйте!", sender: "bot" },
//     // },
// };

// export default function messageReducer(store = initialStore, action) {
//     switch (action.type) {
//         case SEND_MESSAGE:
//             {
//                 return update(store, {
//                     chats: {
//                         $merge: {
//                             [action.chatId]: {
//                                 title: store.chats[action.chatId].title,
//                                 messageList: [...store.chats[action.chatId].messageList, action.messageId]
//                             }
//                         }
//                     },
//                 });
//             }
//         default:
//             return store;
//     }
// }