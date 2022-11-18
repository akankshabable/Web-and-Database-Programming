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
  
  

function getAllUsers() {
  return users;
}

function login(user) { 
  let cUser = users.filter( u => u.userName === user.userName);
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

module.exports = { getAllUsers, login };