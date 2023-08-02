
import express from 'express';
import { getGreetings, addGreeting } from './db.js'


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3009;

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

app.post('/api/greetings', async (req, res) => {
    console.log(req.body)
    const greeting = req.body.greeting;
    const language = req.body.language;

    await addGreeting(language, greeting)
//
    res.json({
        status: 'success',
        message: `Added a greeting for ${language},`
    })
})



console.log('start');
