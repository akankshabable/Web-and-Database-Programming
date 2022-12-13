import { fetchData, setCurrentUser } from './main.js'

class User {
    constructor(email, pwd, fname, lname) {
      this.userFirstName = fname;
      this.userLastName = lname;
      this.userEmailId = email;
      this.userPassword = pwd;
      
    }
    //get methods
    getUserFirstName() {
      return this.userFirstName;
    }
    getUserLastName() {
      return this.userLastName;
    }
    getUserEmailId() {
        return this.userEmailId;
    }
    getUserPassword() {
      return this.userPassword;
    }

    //set methods
    setUserFirstName(fname) {
      this.userFirstName = fname;
    }
    setUserLastName(lname) {
      this.userLastName = lname;
    }
    setUserEmailId(email) {
        this.userEmailId = email;
    }
    setUserPassword(pwd) {
      
        this.userPassword = pwd;
      
    }
   
  }
  let regform = document.getElementById("register")
  if(regform) regform.addEventListener('submit', register);
  

  function register(e)  
  {
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd   = document.getElementById("pwd").value;
    
    let user = new User(email,pwd, fname, lname);
    //console.log(user)

    fetchData("/users/register", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "login.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }

  let loginform = document.getElementById("login")
  if(loginform)   loginform.addEventListener('submit', login);

function login(e)  
  {
    e.preventDefault();
   
    let email = document.getElementById("email").value;
    let pwd   = document.getElementById("pwd").value;
   

    
    let user = new User(email,pwd);
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
