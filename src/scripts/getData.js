//DATA

export const getData = async (url) =>{
   const URL_user= 'https://back-sprint1.herokuapp.com/users';
   const { data } = await axios.get(URL_user);
   return data;
}
