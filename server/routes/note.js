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

  .post('/readNote', async (req, res) => {
    try {
      let note = await Users.readNote(req.body);
      res.send({...note})
      
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .post('/createNote', async (req, res) => {
    try {
      let note = await Users.createNote(req.body);
      res.send({...note})
      
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  

  .put('/edit', async (req, res) => {
    try {
      let note = await Users.editNote(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Users.deleteNote(req.body);
      res.send({success: "The note is been deleted"})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })


module.exports = router;
