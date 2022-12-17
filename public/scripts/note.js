import { fetchData, getCurrentUser } from './main.js'

// user class
class Note {
  constructor(noteContent, userID) {
    this.noteContent = noteContent;
    this.userID = userID;
  }
}

// login functionality
let loginf = document.getElementById("note");
if(loginf) loginf.addEventListener('submit', login);

let user1 = getCurrentUser();
console.log(user1)


function login(e) {
  e.preventDefault();

  let userID = user1.userID;
  console.log(userID)
  let noteContent = document.getElementById("noteContent").value;
  let note = new Note(noteContent, userID);
  console.log(note)
 

  fetchData("/notes/createNote", note, "POST")
  .then((note) => {
    window.location.href = "note.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}

/*

let displayBtn = document.getElementById("btn-notes");
  if(displayBtn) displayBtn.addEventListener('click', displayNote);
  
  function displayNote() {
  
    let user = getCurrentUser();
    console.log(user)
    
      fetchData("/notes/readNote", user, "PUT")
      .then((data) => {
        removeCurrentUser();
      })
      .catch((err) => {
        let p = document.querySelector('.error');
        p.innerHTML = err.message;
      })
    } 
  */
    /*
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}
let all_notes = document.getElementById("btn-notes");
if(all_notes) all_notes.addEventListener('submit', get_all_notes);
function get_all_notes(e) {
  e.preventDefault();
  fetchData("/notes/", data1, "GET")
  .then((data1) => {
    window.location.replace = "note.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
*/