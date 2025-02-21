import { generateContentGemini, comparisonContentGemini } from "./services/googleGeminiService.js";
import { generateContentLlama, comparisonContentLlama } from "./services/groqLlamaService.js";
import { generateContentMixtral, comparisonContentMixtral } from "./services/groqMixtralService.js";
import { comparisonContent } from "./services/comparisonService.js";

import dotenv from 'dotenv';
dotenv.config();

const responses = [];
const comparisons = [];

async function main(prompt) {
    console.log("MIXTRAL RESPONSE : ");
    let text1 = await generateContentMixtral(prompt);
    text1 = "MIXTRAL - " + text1;
    responses.push(text1);
    // console.log(text1)
    console.log("--------------//--------------");
    
    console.log("LLAMA RESPONSE : ");
    let text2 = await generateContentLlama(prompt);
    text2 = "LLAMA - " + text2;
    responses.push(text2);
    // console.log(text2)
    console.log("--------------//--------------");
    
    console.log("GEMINI RESPONSE : ");
    let text3 = await generateContentGemini(prompt);
    text3 = "GEMINI - " + text3;
    responses.push(text3);
    // console.log(text3)
    console.log("--------------//--------------");
    
    console.log("COMPARISON TEXT'S : ");
    const comparison = await comparisonContent(responses[0], responses[1], responses[2]);
    console.log(comparison);
    console.log("--------------//--------------");
    
    console.log("COMPARISON TEXT'S WHIT MIXTRAL : ");
    const comparisonMixtral = await comparisonContentMixtral(responses[0], responses[1], responses[2]);
    comparisons.push(comparisonMixtral);
    console.log(comparisonMixtral);
    console.log("--------------//--------------");

    console.log("COMPARISON TEXT'S WHIT LLAMA : ");
    const comparisonLlama = await comparisonContentLlama(responses[0], responses[1], responses[2]);
    comparisons.push(comparisonLlama);
    console.log(comparisonLlama);
    console.log("--------------//--------------");

    console.log("COMPARISON TEXT'S WHIT GEMINI : ");
    const comparisonGemini = await comparisonContentGemini(responses[0], responses[1], responses[2]);
    comparisons.push(comparisonGemini);
    console.log(comparisonGemini);
    console.log("--------------//--------------");

}

const prompt = "Gere um texto sobre o tema : 'A beleza da franquia The Legend Of Zelda'";

main(prompt).catch(console.error);