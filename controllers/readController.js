const { getDB } = require('../config/db');

exports.findDocuments = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    
    // Параметри з запиту
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};
    const projection = req.query.projection ? JSON.parse(req.query.projection) : {};
    const sort = req.query.sort ? JSON.parse(req.query.sort) : {};
    const skip = parseInt(req.query.skip) || 0;
    const limit = parseInt(req.query.limit) || 10;

    const cursor = collection.find(filter)
      .project(projection)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const results = await cursor.toArray();
    const count = await collection.countDocuments(filter);
    
    res.status(200).json({
      success: true,
      data: results,
      pagination: {
        total: count,
        skip,
        limit,
        hasMore: skip + limit < count
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};