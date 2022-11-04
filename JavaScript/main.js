class User {
    constructor(fname, lname,email, pwd,note) {
      this.userFirstName = fname;
      this.userLastName = lname;
      this.userEmailId = email;
      this.userPassword = pwd;
      this.notecreated = note;
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

    getNoteCreated(){
      return this.notecreated;
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
    setNoteCreated(note) {
      this.notecreated = note;
    }
  }
  
    
  function submission(e)  
  {
    e.preventDefault();
    let fname = ((document.getElementById("fname")||{}).value)||"";
    let lname = ((document.getElementById("lname")||{}).value)||"";
    let email = ((document.getElementById("email")||{}).value)||"";
    let pwd   = ((document.getElementById("pwd")||{}).value)||"";
    let note  = ((document.getElementById("note")||{}).value)||"";
    

    
    let user1 = new User(fname,lname,email,pwd,note);
    console.log(user1)

   // Getting rid of text after submitting
    document.forms['Form'].reset()
    
}

  
  let form =document.getElementById("Form").addEventListener('submit', submission);

      




