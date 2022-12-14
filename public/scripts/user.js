import { fetchData, setCurrentUser } from './main.js'

class User {
    constructor(userName, password, userFirstName, userLastName) {
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
      this.userName = userName;
      this.password = password;
      
    }
    
    //get methods
    getUserFirstName() {
      return this.userFirstName;
    }
    getUserLastName() {
      return this.userLastName;
    }
    getuserName() {
        return this.userName;
    }
    getUserPassword() {
      return this.password;
    }

    //set methods
    setUserFirstName(userFirstName) {
      this.userFirstName = userFirstName;
    }
    setUserLastName(userLastName) {
      this.userLastName = userLastName;
    }
    setuserName(userName) {
        this.userName = userName;
    }
    setUserPassword(password) {
      
        this.password = password;
      
    }
   
  }

  let loginform = document.getElementById("login")
  if(loginform)   loginform.addEventListener('submit', login);

function login(e)  
  {
    e.preventDefault();
   
    let userName = document.getElementById("username").value;
    let password   = document.getElementById("pswd").value;
    let user = new User(userName,password);
    //console.log(user)

    fetchData("/users/login", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    }) 


    
}


  let regform = document.getElementById("register")
  if(regform) regform.addEventListener('submit', register);
  

  function register(e)  
  {
    e.preventDefault();
    let userFirstName = document.getElementById("fname").value;
    let userLastName = document.getElementById("lname").value;
    let userName = document.getElementById("username").value;
    let password   = document.getElementById("pswd").value;
    
    let user = new User(userName,password, userFirstName, userLastName);
    //console.log(user)

    fetchData("/users/register", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }

 
//grab login form add event l
 
 

  



 // getUsers button 
// let form = document.getElementById("btn-users")
// if(form) form.addEventListener('click', getUsers);

//  function getUsers() {
//   fetch("http://localhost:3000/users/")
//   .then((res)=> res.json())
//   .then((data) => console.log(data))
//   .catch((err)=> console.log(err))
//  }
