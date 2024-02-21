const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());

require('dotenv').config();

const client = new MongoClient(process.env.STORE_DB, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/products', async (req, res) => {
    try {
        const db = client.db('OnlineStoreDB');
        const collection = db.collection('Products');
        const products = await collection.find().toArray();

        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `Server error: ${err}` });
    }
});

app.get('/api/products/search', async (req, res) => {
    try {
        const query = req.query.q;
        const db = client.db('OnlineStoreDB');
        const collection = db.collection('Products');
        const products = await collection.find({ name: { $regex: query, $options: 'i' } }).toArray();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: `Server error: ${err}` });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
