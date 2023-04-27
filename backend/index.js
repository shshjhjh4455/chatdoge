const apiKey = "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";
const { Configuration, OpenAIApi } = require("openai");

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
        { role: "user", content: "I'm good, thanks!" },],
    });
    console.log(completion.data.choices[0].messages);
}

apiCall();