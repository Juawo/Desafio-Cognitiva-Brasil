import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateContentMixtral(prompt) {
  const chatCompletion = await getGroqChatCompletion(prompt);
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function comparisonContentMixtral(text1, text2, text3) {
  const prompt = `Avalie os textos abaixo pelos critério : Criatividade, Clareza, Coerência, Originalidade, Relevância e Gramática

  Nome da IA que gerou o texto : ${text1} ;

  Nome da IA que gerou o texto : ${text2} ;

  Nome da IA que gerou o texto : ${text3} ;

  Retorne a resposta apenas com a ordem de melhor texto, exemplo '1º - Texto da {Nome da IA} ; 2º - Texto da {Nome da IA} ; 3º - Texto da {Nome da IA}'`;
  
  const chatCompletion = await getGroqChatCompletion(prompt);
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "mixtral-8x7b-32768",
  });
}
