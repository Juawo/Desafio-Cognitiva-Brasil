import { generateContentGemini } from "./services/googleGeminiService.js";
import { generateContentLlama } from "./services/groqLlamaService.js";
import { generateContentMixtral } from "./services/groqMixtralService.js";
import { comparisonContentGemma } from "./services/comparisonGemmaService.js";

import dotenv from 'dotenv';
dotenv.config();

const responses = [];

async function main(prompt) {
    console.log("MIXTRAL RESPONSE : ");
    let text1 = await generateContentMixtral(prompt);
    text1 = "MIXTRAL - " + text1;
    responses.push(text1);
    console.log(text1)
    console.log("--------------//--------------");
    
    console.log("LLAMA RESPONSE : ");
    let text2 = await generateContentLlama(prompt);
    text2 = "LLAMA - " + text2;
    responses.push(text2);
    console.log(text2)
    console.log("--------------//--------------");
    
    console.log("GEMINI RESPONSE : ");
    let text3 = await generateContentGemini(prompt);
    text3 = "GEMINI - " + text3;
    responses.push(text3);
    console.log(text3)
    console.log("--------------//--------------");
    
    console.log("COMPARISON TEXT'S WHIT GEMMA : ");
    const comparison = await comparisonContentGemma(text1,text2,text3);
    console.log(comparison);
    console.log("--------------//--------------");

}

const prompt = "Gere um texto sobre a beleza dos notebook's gamer's";

main(prompt).catch(console.error);