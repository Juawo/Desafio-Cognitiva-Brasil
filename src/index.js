import { generateContentGemini } from "./services/googleGeminiService.js";
import { generateContentLlama } from "./services/groqLlamaService.js";
import { generateContentMixtral } from "./services/groqMixtralService.js";

import dotenv from 'dotenv';
dotenv.config();

async function main(prompt) {
    console.log("MIXTRAL RESPONSE : ");
    await generateContentMixtral(prompt);
    console.log("--------------//--------------");
    
    console.log("LLAMA RESPONSE : ");
    await generateContentLlama(prompt);
    console.log("--------------//--------------");
    
    console.log("GEMINI RESPONSE : ");
    await generateContentGemini(prompt);
    console.log("--------------//--------------");
}

const prompt = "Gere um texto sobre a beleza dos jogos plataforma";

main(prompt).catch(console.error);