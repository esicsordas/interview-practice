require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || '3001';
const MONGO_URL = process.env.MONGO_URL;
const Question = require('./db/question.model');
const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('I\'m listening!');
});

app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error');
    }
});

app.post('/randomquestion', async (req, res) => {
    try {
        const excludedIds = req.body.ids.map(id => new mongoose.Types.ObjectId(id)) || [];
        const remainingCount = await Question.countDocuments({
            _id: { $nin: excludedIds}
        })
        const [randomquestion = {}] = (await Question.aggregate([
            {$match: {_id: {$nin: excludedIds}}},
            {$sample: {size: 1}}
        ]));
        res.json({
            question: randomquestion,
            remaining: remainingCount,
    });
    } catch(e) {
        console.error(e);
        res.status(500).send('Server error');
    }
})

const main = async () => {
    await mongoose.connect(MONGO_URL + '/interview-preparer')
    app.listen(PORT, () => {
        console.log(`Server running on http:\\localhost:${PORT}`)
    });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
