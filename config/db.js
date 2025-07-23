const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Підключено до MongoDB Atlas');
  } catch (err) {
    console.error('Помилка підключення:', err);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) throw new Error('База даних не ініціалізована');
  return db;
};

module.exports = { connectDB, getDB };