require('dotenv').config();
const express = require('express');
const app = express();
const { connectDB } = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api', require('./routes/apiRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`);
});