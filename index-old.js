
import express from 'express';
import { getGreetings, addGreeting } from './db';./db.js'


const app = express();
const PORT = process.env.PORT || 3008;

//get all greetings

app.get('/api/greetings', async (req, res) => {
    const greetings = await getGreetings();
    console.log(greetings);
    res.json( {
        greetings
    })
});

//create route to add greeting

app.listen(PORT, () => `started on port ${PORT}`)

app.post('/api/greeting', (req, res) => {
    const greeting = req.body.greeting;
    const language = req.body.language;
})

console.log('start');
