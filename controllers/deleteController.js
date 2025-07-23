const { getDB } = require('../config/db');

exports.deleteOne = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    const result = await collection.deleteOne(
      req.body.filter,
      req.body.options || {}
    );
    res.status(200).json({
      success: true,
      deletedCount: result.deletedCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteMany = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    const result = await collection.deleteMany(
      req.body.filter,
      req.body.options || {}
    );
    res.status(200).json({
      success: true,
      deletedCount: result.deletedCount
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};