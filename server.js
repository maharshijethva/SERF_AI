const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// Use your actual API key here
const genAI = new GoogleGenerativeAI("AIzaSyCkYlyQ-5f4hkh0zz6AG-f-gYY3tcbHk6c");

app.post('/api/gemini', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = req.body.prompt;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({ reply: text });
  } catch (error) {
    console.error('Gemini error:', error);
    res.status(500).json({ error: 'Failed to get response from Gemini' });
  }
});

app.listen(port, () => {
  console.log(`Gemini API server running at http://localhost:${port}`);
});