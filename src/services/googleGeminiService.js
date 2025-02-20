import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateContentGemini(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const text = await result.response.text();
        console.log(text);
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}
