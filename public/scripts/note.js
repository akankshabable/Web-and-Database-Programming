class Note {
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
   
    let note  = document.getElementById("note")[0].value;

    let note1 = new Note(note);
    console.log(note1)
    fetchData("/notes/createNote", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "login.html";
    })
    .catch((err) =>{
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
    })
  }

//grab note form add event listener
 let form = document.getElementById("note")
  if(form) form.addEventListener('submit', note1);

//   // getNotes button 

// document.getElementById("btn-notes").addEventListener('click', getNotes);
// function getNotes() {
//   fetch("http://localhost:3000/notes/")
//   .then((res)=> res.json())
//   .then((data) => console.log(data))
//   .catch((err)=> console.log(err))
//   }