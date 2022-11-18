const express = require('express');
const Users = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Users.getAllNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/note', async (req, res) => {
    try {
      let note = await Users.note(req.body);
      res.send({...note})
      
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })



  
module.exports = router;
