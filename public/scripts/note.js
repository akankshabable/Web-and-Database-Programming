import { fetchData, getCurrentUser, setCurrentUser } from './main.js'

class Note {
    constructor(noteContent) {
    
      this.noteContent = noteContent;
    }
    //get methods
   getNoteCreated(){
      return this.noteContent;
    }
    //set methods
    

    setNoteCreated(noteContent) {
      this.noteContent = noteContent;
    }
  }
  let form = document.getElementById("note")
  if(form) form.addEventListener('submit', note);

  function note(e)  
  {
    e.preventDefault();
   
    let noteContent  = document.getElementById("notecontents").value;

    let note = new Note(noteContent);
    //console.log(note)
    var ff = getCurrentUser();
    fetchData("/notes/createNote/", ff, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }

//grab note form add event listener
 
//   // getNotes button 

// document.getElementById("btn-notes").addEventListener('click', getNotes);
// function getNotes() {
//   fetch("http://localhost:3000/notes/")
//   .then((res)=> res.json())
//   .then((data) => console.log(data))
//   .catch((err)=> console.log(err))
//   }