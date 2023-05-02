require('dotenv').config();

const apiKey = process.env.API_KEY;
const { Configuration, OpenAIApi } = require("openai");

const express = require('express')
const app = express()

let corsOptions =

    app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})
app.listen(3000)

const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function apiCall() {
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "hello" },
        { role: "user", content: "Hi, how are you?" },
        { role: "assistant", content: "I'm good, how are you?" },
        { role: "user", content: "I'm good, thanks!" },
        ],
    });
    console.log(completion.data.choices[0].messages);
}

apiCall();