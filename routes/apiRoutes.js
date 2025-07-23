const express = require('express');
const router = express.Router();
const {
  insertOne,
  insertMany
} = require('../controllers/createController');
const {
  findDocuments,
  streamDocuments,     // Додано
  aggregateData       // Додано
} = require('../controllers/readController');
const {
  updateOne,
  updateMany,
  replaceOne
} = require('../controllers/updateController');
const {
  deleteOne,
  deleteMany
} = require('../controllers/deleteController');

// Create
router.post('/:collection/insertOne', insertOne);
router.post('/:collection/insertMany', insertMany);

// Read
router.get('/:collection/find', findDocuments);
router.get('/:collection/stream', streamDocuments);    
router.post('/:collection/aggregate', aggregateData);   

// Update
router.put('/:collection/updateOne', updateOne);
router.put('/:collection/updateMany', updateMany);
router.put('/:collection/replaceOne', replaceOne);

// Delete
router.delete('/:collection/deleteOne', deleteOne);
router.delete('/:collection/deleteMany', deleteMany);

module.exports = router;