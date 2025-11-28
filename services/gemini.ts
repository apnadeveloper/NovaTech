import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini client
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateTeaserResponse = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently operating in offline mode. Please feel free to browse our services manually or contact us via the form.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `
          You are the AI Sales Consultant for 'Apna Developer', a premium digital marketing agency.
          
          About Apna Developer:
          - We specialize in: Website Design, Website Development, eCommerce Development, Shopify Development, WordPress Development, Digital Marketing, SEO Optimization, Speed & Web Security, Graphic Design, Video Editing, Social Media Marketing, and Python Script Development.
          - Our Vibe: Professional, data-driven, innovative, and results-oriented.
          
          Your Goal:
          - Answer questions about digital marketing services.
          - Explain how we can help scale businesses.
          - Encourage users to scroll down and fill out the "Get a Free Audit" contact form.
          
          Guidelines:
          - Keep responses concise (under 60 words).
          - Be helpful and confident.
          - If asked about pricing, say "Every project is unique. Let's chat about your needs—fill out the contact form below for a custom quote."
          - Do not make up specific client results or fake statistics.
        `,
        temperature: 0.7,
      }
    });

    return response.text || "I can help you grow your business. Ask me about our SEO or PPC services.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are experiencing high traffic. Please try the contact form below.";
  }
};