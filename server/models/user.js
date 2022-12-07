/*
const users = [
    {
      userId: 12345,
      userFirstName: "Alice",
      userLastName:"Trus",
      userName:"trus@gmail.com",
      password: "star@123"
    },
    {
      userId: 55555,
      userFirstName: "Sam",
      userLastName:"Struat",
      userName:"sstuart@gmail.com",
      password: "pie#876"
    },
    {
      userId: 99999,
      userFirstName: "Akank",
      userLastName:"Bable",
      userName:"bable@gmail.com",
      password: "sun*246"
    }
  ];
  
  */

  const con = require("./db_connect");
  async function createTable() {
    let sql=`CREATE TABLE IF NOT EXISTS users (
      userID INT NOT NULL AUTO_INCREMENT,
      userName VARCHAR(255) NOT NULL UNIQUE,
      userFirstName VARCHAR(255) NOT NULL ,
      userLastName VARCHAR(255) NOT NULL ,
      password VARCHAR(255) NOT NULL,
      CONSTRAINT userPK PRIMARY KEY(userID)
    ); `
    await con.query(sql);
  }
  createTable();

  

async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}

// Create  User - Registering
async function register(user) {
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("UserName already in use");

  const sql = `INSERT INTO users (userName, userFirstName, userLastName, password)
    VALUES ("${user.userName}","${user.userFirstName}","${user.userLastName}", "${user.password}");
  `
  await con.query(sql);
  return await login(user);
}



// Read User -- login user
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user); //[{userName: "cathy123", password: "icecream"}]
  
  if(!cUser[0]) throw Error("UserName not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editUser(user) {
  let sql = `UPDATE users 
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID}
  `;

  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE userName = "${user.userName}"
  `;
  }
  return await con.query(sql);  
}

/*
let cathy = {
  userID: 5,
  userName: "cathy123",
  password: "icecream"
}; 
login(cathy);
*/

module.exports = { getAllUsers, login, register, editUser, deleteUser};

/*function getAllUsers() {
  return users;
}

function login(user) { 
  let cUser = users.filter( u => u.userName === user.userName);
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

module.exports = { getAllUsers, login };
*/