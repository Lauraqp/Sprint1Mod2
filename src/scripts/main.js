
//LOGIN 
const URL_API = 'https://back-sprint1.herokuapp.com/users';

class UI {
    constructor (targetID){
        this.target = document.getElementById(targetID);
    }
    getValue(){
        return this.target.value;
    }
}
const cellphone = new UI ('cellphone');
const password = new UI ('password'); 

const form = document.getElementById('form__login');

const handleSubmit = async (e) =>{
    e.preventDefault();
    //new object from value
    const user= { //object but push
        cellphone: cellphone.getValue(),
        password: password.getValue()
    }
    for (const key in user) { //verification object(forin)
            const element = user[key];
            if (element === '') {
                alert(`Falta completar el campo: ${key}`)
                return;
            }
        }
        //send to back 
       try {
        let response = await axios.get(`${URL_API}?cellphone=${user.cellphone}&password=${user.password}`);
        console.log(response);
        if (response.status === 200) { 
           if (response.data.length) {
            //save localStorage session
            localStorage.setItem('user',JSON.stringify(response.data[0]))
            
            location.href = './src/pages/home.html';
           }else{
            Swal.fire(
                'Oops!',
                'Usuario o contraseña incorrectas!',
                'error'
              )
           }
        } 
       } catch (error) {
        Swal.fire(
            'Oops!',
            'Se ha presentado un error!',
            'error'
          )
       }
    }
const validationSession = () =>{
    const user = localStorage.getItem('user');
    if (user) {
        location.href = './src/pages/home.html';
    }
}  
validationSession();

form.addEventListener('submit', (e)=> {handleSubmit(e)});
