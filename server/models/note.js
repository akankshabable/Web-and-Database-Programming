const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
  ); `
  await con.query(sql);
}
createTable();


  async function getAllNotes() {
    const sql = `SELECT * FROM notes;`;
    return await con.query(sql);
    
  }
  
  // Create  Note
  async function createNote(note) {
   
    const sql = `INSERT INTO notes (noteContent,userID)
      VALUES ("${note.noteContent}",${note.userID})
    `
    await con.query(sql);
  return await readNote(note);
  }
  
  // Read Note 
  async function readNote(note) { 
    let cNote = await getAllNotes(note); 
    
    if(!cNote) throw Error("Note not found");
    
return cNote;
  }
  
  //Edit Note based on noteID
  async function editNote(note) {
    let sql = `UPDATE notes 
      SET noteContent = "${note.noteContent}"
      WHERE noteID = ${note.noteID}
    `;
  
    await con.query(sql);
    let updatedNote = await getNote(note);
    return updatedNote[0];
  }
  
  // Delete Note based on noteID
  async function deleteNote(note) {
    let sql = `DELETE FROM notes
      WHERE noteID = ${note.noteID}
    `
    await con.query(sql);
  }
  
  // Useful Functions
  async function getNote(note) {
    let sql;
    
    sql = `
        SELECT * FROM notes
         WHERE noteID = ${note.noteID}
      `
       return await con.query(sql);  
  }

  module.exports = { getAllNotes, readNote, createNote,editNote,deleteNote};
 

  
  
  
  

//   async function getAllNotes() {
//     const sql = `SELECT * FROM notes;`;
//     let notes = await con.query(sql);
//     console.log(notes)
//   }
// async function note(note) { // {userName: "sda", password: "gsdhjsga"}
  

//   let cNote = await getNotes(note)
  
//   const sql = `INSERT INTO notes (note)
//     VALUES ("${note.note}");
//   `
//   await con.query(sql);

//   return cNote[0];
// }
// // function getAllNotes() {
// //   return notes;
// // }
// async function getNotes(note) {
//   let sql;

//    {
//     sql = `
//       SELECT * FROM notes
       
//     `;
 
//   }
//   return await con.query(sql);  
// }

// module.exports = { getAllNotes, note };

// const notes = [
//     {
//       noteId:2222,
//       userId: 12345,
//       note: "I should do my homework today!"
//     },
//     {
//       noteId:1111,
//       userId: 55555,
//       note: "I need to take my car to washing center"
//     },
//     {
//       noteId:3333,
//       userId: 99999,
//      note: "I should get all the fruits and vegetables"
//     }
//   ];