//INDEX
import {getData} from "./getData.js";
import {getConversations} from "./getConversation.js";
import {printChats} from "./ui.js";
//url
const URL_USERS = 'https://back-sprint1.herokuapp.com/users';
const URL_MESSAGES= 'https://back-sprint1.herokuapp.com/messagess';

const formFilter = document.getElementById("form__filter");


//LISTENER FILTER SEARCHS 
formFilter.addEventListener("submit", async (e)=>{
    e.preventDefault()
    const query = formFilter[1].value;
    console.log(query);

    const URLS= `${URL_USERS}?id=${query}`
    console.log(URLS);

    const userLogged = await getData(URLS)
    console.log(userLogged);


}
)


//Print Chats
const mainFunction = async () =>{
    let data = await getData()
    printChats(data)
}
mainFunction();


//SESSION CLOSE
const btnCloseSession = document.getElementById('btnCloseSession');

const handleCloseSession = () =>{
    localStorage.clear();
    location.href = 'http://127.0.0.1:5500/index.html';
}
btnCloseSession.addEventListener('click',handleCloseSession)


//LISTENER SEARCH CONTAINER PRINCIPAL
const formSendMessage = document.getElementById('container__principalForm');

formSendMessage.addEventListener('submit',(e)=>{
    e.preventDefault();
    let search= formSendMessage[0].value;
    console.log(search);
    const url_users= `${URL_MESSAGES}?id=${search}`
    console.log(url_users);
    
})



