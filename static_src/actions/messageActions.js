export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, sender, chatId, massages) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    sender,
    chatId,
    massages,
});


export const sendMessageThunk = (messageId, text, sender, chatId, massages) => {
    return async function(dispatch) {
        dispatch()
    }
}