import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateContentGemini(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const text = await result.response.text();
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}

export async function comparisonContentGemini(text1, text2, text3) {
    const prompt = `Avalie os textos abaixo pelos critério : Criatividade, Clareza, Coerência, Originalidade, Relevância e Gramática

  Nome da IA que gerou o texto : ${text1} ;

  Nome da IA que gerou o texto : ${text2} ;

  Nome da IA que gerou o texto : ${text3} ;

  Retorne a resposta apenas com a ordem de melhor texto, exemplo '1º - Texto da {Nome da IA} ; 2º - Texto da {Nome da IA} ; 3º - Texto da {Nome da IA}'`;

    try {
        const result = await model.generateContent(prompt);
        const text = await result.response.text();
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}


