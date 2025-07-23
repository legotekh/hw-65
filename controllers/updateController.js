const { getDB } = require('../config/db');

exports.updateOne = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    const result = await collection.updateOne(
      req.body.filter,
      req.body.update,
      req.body.options || {}
    );
    res.status(200).json({
      success: true,
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateMany = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    const result = await collection.updateMany(
      req.body.filter,
      req.body.update,
      req.body.options || {}
    );
    res.status(200).json({
      success: true,
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.replaceOne = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    const result = await collection.replaceOne(
      req.body.filter,
      req.body.replacement,
      req.body.options || {}
    );
    res.status(200).json({
      success: true,
      modifiedCount: result.modifiedCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};