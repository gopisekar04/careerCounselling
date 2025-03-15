import { GoogleGenerativeAI } from "@google/generative-ai";

// Load API Key from environment variables
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const geminiTool = {
    name: "Gemini AI",
    description: "Generates responses using Google Gemini AI",
    execute: async (context) => {
        const prompt = context.inputs.query;
        if (!prompt) return "No query provided.";

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            const result = await model.generateContent(prompt);
            return result.response.text(); // Return the AI response
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
};

export { geminiTool };
