//REGISTER
const URL_API = 'https://back-sprint1.herokuapp.com/users';

class UI {
    constructor (targetID){
        this.target = document.getElementById(targetID);
    }
    getValue(){
        return this.target.value;
    }
}
const name = new UI ('name');
const cellphone = new UI ('cellphone');
const password = new UI ('password'); 
const phrase = new UI ('phrase'); 
const img = new UI ('img'); 

const form = document.getElementById('form__register');

const handleSubmit = async (e) =>{
    e.preventDefault();
    //new object from value
    const newUser= { //object but push
        name: name.getValue(),
        cellphone: cellphone.getValue(),
        password: password.getValue(),
        phrase: phrase.getValue(),
        img: img.getValue()
    }
    for (const key in newUser) { //verification object(forin)
            const element = newUser[key];
            if (element === '') {
                return;
            }
        }
        //send to back 
       try {
        let response = await axios.post(`${URL_API}users`, newUser);
        if (response.status === 201) { 
            Swal.fire(
                'Excelente!',
                'Usuario creado con éxito!',
                'success'
              )
            
              location.href = './src/pages/home.html';
        } 
       } catch (error) {
        Swal.fire(
            'Lo siento!',
            'Se ha presentado un error!',
            'error'
          )
       }
    }
form.addEventListener('submit', (e)=> {handleSubmit(e)});
