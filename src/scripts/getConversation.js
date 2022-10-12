import {getData} from "./getData.js";


export const getConversations = async(url,query) =>{
    // const conversations = await getData(url)
    const urlConversationReceived = `${url}?idUser2=${query}&idUser1?`
    const conversationsReceived = await getData(urlConversationReceived);

    const urlConversationStarted = `${url}?idUser1=${query}&idUser2?`
    const conversationStarted = await getData(urlConversationStarted);
    const chats =[ //copye conversations started
    ...conversationsReceived,
    ...conversationStarted

    ]
    return chats
}

