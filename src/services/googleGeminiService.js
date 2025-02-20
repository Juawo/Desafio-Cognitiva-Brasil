const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

function generateContent(prompt) {
    return model.generateContent(prompt);
}