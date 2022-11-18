const notes = [
    {
      noteId:2222,
      userId: 12345,
      note: "I should do my homework today!"
    },
    {
      noteId:1111,
      userId: 55555,
      note: "I need to take my car to washing center"
    },
    {
      noteId:3333,
      userId: 99999,
     note: "I should get all the fruits and vegetables"
    }
  ];
  

function getAllNotes() {
  return notes;
}

function note(note) { // {userName: "sda", password: "gsdhjsga"}
  

  let cNote = notes.filter( u => u.note === note.note);
  
  

  return cNote[0];
}

module.exports = { getAllNotes, note };