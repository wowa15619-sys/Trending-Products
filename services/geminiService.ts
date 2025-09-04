import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chat: Chat | null = null;

export const startChatSession = () => {
  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: 'أنت مساعد ذكي في متجر إلكتروني اسمه "المتجر العالمي". اسمك "ساعد". كن ودودًا وتحدث باللغة العربية. ساعد المستخدمين في أسئلتهم حول المنتجات والشحن.',
    },
  });
};

export const sendMessageToChat = async (message: string): Promise<AsyncGenerator<GenerateContentResponse>> => {
  if (!chat) {
    startChatSession();
  }
  if (chat) {
    return chat.sendMessageStream({ message });
  }
  throw new Error("Chat session not initialized");
};


export const getStyleRecommendations = async (base64Image: string, mimeType: string): Promise<string> => {
    try {
        const imagePart = {
            inlineData: {
                data: base64Image,
                mimeType: mimeType,
            },
        };

        const textPart = {
            text: `Act as a friendly and enthusiastic fashion stylist for an e-commerce store called 'المتجر العالمي'. Analyze the person in this image. Based on their apparent style, suggest 3 product categories from the following list that would suit them well: الأزياء الرجالية, الأزياء النسائية, الجوالات والأجهزة, الكمبيوتر وملحقاته, الأجهزة المنزلية, الصحة والجمال, مستلزمات الأطفال, الرياضة واللياقة. Provide a brief, positive, and encouraging explanation for each suggestion. Your response must be in Arabic. If the image does not contain a person, politely say so.`,
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [imagePart, textPart] },
        });

        return response.text;
    } catch (error) {
        console.error("Error analyzing image with Gemini:", error);
        throw new Error("فشل تحليل الصورة. يرجى المحاولة مرة أخرى.");
    }
};
