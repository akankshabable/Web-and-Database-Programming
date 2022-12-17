import { fetchData, getCurrentUser} from './main.js'

class Note {
    constructor(noteContent, userID) {
      this.noteContent = noteContent;
      this.userID = userID;
    }
    //get methods
  //  getNoteCreated(){
  //     return this.noteContent;
  //   }
    //set methods

    // setNoteCreated(noteContent) {
    //   this.noteContent = noteContent;
    // }
  }

  let form = document.getElementById("note")
  if(form) form.addEventListener('submit', note);

  let user = getCurrentUser(); 
  console.log(user)
  // fetchData("/notes/getNotes", user1, "POST")
  
  //console.log(user1);
  
  // let userID = user1.userID; 
  // console.log(userID);

  function note(e)  
  {
    e.preventDefault();
    // let userID =  user;
    let user_id = user.userID;
    console.log(user_id)
    let noteContent  = document.getElementById("noteContent").value;
    let note_1 = new Note(noteContent, user_id);
    // let note_ = note.noteContent;
    // let user_ = user1.userID;
    // let data1 = {user_, note_}
    // console.log(note_)
    // console.log(user1)
    // console.log(data1)
    // note_data = {user1, note}
    //console.log(note)
    
    fetchData("/notes/createNote", note_1, "POST")
    .then((data1) => {
      window.location.href = "note.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }

//grab note form add event listener

//   // getNotes button 

 document.getElementById("btn-notes").addEventListener('click', getNotes);
 function getNotes() {
 fetch("http://localhost:3000/notes/")
 .then((res)=> res.json())
 .then((data) => console.log(data))
 .catch((err)=> console.log(err))
}

