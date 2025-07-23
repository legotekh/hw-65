const { getDB } = require('../config/db');

exports.insertOne = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    const result = await collection.insertOne(req.body);
    res.status(201).json({
      success: true,
      insertedId: result.insertedId
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.insertMany = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    
    if (!Array.isArray(req.body)) {
      return res.status(400).json({
        success: false,
        error: "Очікується масив документів"
      });
    }
    
    const result = await collection.insertMany(req.body);
    res.status(201).json({
      success: true,
      insertedIds: result.insertedIds
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};