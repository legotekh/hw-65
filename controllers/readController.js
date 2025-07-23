const { getDB } = require('../config/db');
const JSONStream = require('JSONStream');


exports.streamDocuments = (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    
    const filter = req.query.filter ? JSON.parse(req.query.filter) : {};
    const projection = req.query.projection ? JSON.parse(req.query.projection) : {};
    const sort = req.query.sort ? JSON.parse(req.query.sort) : {};
    const batchSize = parseInt(req.query.batchSize) || 100;

    const cursor = collection.find(filter)
      .project(projection)
      .sort(sort)
      .batchSize(batchSize);

    res.setHeader('Content-Type', 'application/json');
    cursor.stream()
      .pipe(JSONStream.stringify())
      .pipe(res)
      .on('error', (err) => {
        console.error('Stream error:', err);
        if (!res.headersSent) {
          res.status(500).json({ success: false, error: err.message });
        }
      });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.aggregateData = async (req, res) => {
  try {
    const db = getDB();
    const collection = db.collection(req.params.collection);
    
    const pipeline = req.body.pipeline || [];
    const options = req.body.options || {};
    
    const cursor = collection.aggregate(pipeline, options);
    const results = await cursor.toArray();
    
    res.status(200).json({
      success: true,
      data: results
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};