
class User {
    constructor(fname, lname, email, pwd) {
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
  
  

  function registration(e)  
  {
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pwd   = document.getElementById("pwd").value;
    

    
    let user1 = new User(fname,lname,email,pwd);
    console.log(user1)
  }

function loginfun(e)  
  {
    e.preventDefault();
   
    let email = document.getElementById("email").value;
    let pwd   = document.getElementById("pwd").value;
   

    
    let user2 = new User(email,pwd);
    console.log(user2)


    
}


//grab login form add event l
 
 

 
  let form = document.getElementById("register")
  if(form) form.addEventListener('submit', registration);
  
  let form1 = document.getElementById("login")
  if(form1)   form1.addEventListener('submit', loginfun);


 // getUsers button 
document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
 fetch("http://localhost:3000/users/")
 .then((res)=> res.json())
 .then((data) => console.log(data))
 .catch((err)=> console.log(err))
}
