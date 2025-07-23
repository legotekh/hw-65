const express = require('express');
const router = express.Router();
const {
  insertOne,
  insertMany
} = require('../controllers/createController');
const {
  findDocuments
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

router.post('/:collection/insertOne', insertOne);
router.post('/:collection/insertMany', insertMany);

router.get('/:collection/find', findDocuments);

router.put('/:collection/updateOne', updateOne);
router.put('/:collection/updateMany', updateMany);
router.put('/:collection/replaceOne', replaceOne);

router.delete('/:collection/deleteOne', deleteOne);
router.delete('/:collection/deleteMany', deleteMany);

module.exports = router;