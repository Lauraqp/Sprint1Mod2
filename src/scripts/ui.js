//PRINT 
import {getConversations} from "./getConversation.js";
import { getData } from "./getData.js";

const containerMessages= document.getElementById('container__messages');

export const printChats = (listChats) =>{
    containerMessages.innerHTML = '';
    listChats.forEach(element => {
        // console.log(element);
        containerMessages.innerHTML +=`
        <div id="container__chats" class="main__chats">
           <h3>${element.name}</h3>
           <img src="${element.image}" class="main__imagesChat" alt="foto perfil">
           <p>${element.phrase}</p>
           </div>
        `
    })
}


const containerChat= document.getElementById('main__containerChats')
export const printMessagess = (getConversation) =>{
    containerMessages.innerHTML = '';
    getConversation.forEach(messagess => {
        console.log(messagess);
        console.log(messagess);
        containerMessages.innerHTML +=`
        <div id="container__chats" class="main__chats">
           <h3>${messagess.sendBy}</h3>
           <p>${messagess.idUser1}</p>
           </div>
        `
    })
}


