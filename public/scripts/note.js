
class Users {
    constructor(note) {
    
      this.notecreated = note;
    }
    //get methods
   

    getNoteCreated(){
      return this.notecreated;
    }
    //set methods
    
    setNoteCreated(note) {
      this.notecreated = note;
    }
  }
  
  

 
function note1(e)  
  {
    e.preventDefault();
   
    let note  = document.getElementById("note").value;

    
    let user3 = new Users(note);
    console.log(user3)

}
//grab login form add event l
 
 
  let form = document.getElementById("note")
  if(form) form.addEventListener('submit', note1);


  
  
// getUsers button 

document.getElementById("btn-notes").addEventListener('click', getNotes);

function getNotes() {
  fetch("http://localhost:3000/notes/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
  }