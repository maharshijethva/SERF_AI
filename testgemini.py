import google.generativeai as genai
import speech_recognition as sr
import pyttsx3

# Set your Gemini API Key here
API_KEY = "AIzaSyCkYlyQ-5f4hkh0zz6AG-f-gYY3tcbHk6c"

# Configure Gemini
genai.configure(api_key=API_KEY)

# Use Gemini 1.5 Flash model for faster responses
model = genai.GenerativeModel("gemini-2.0-flash")

# Initialize speech recognition and text-to-speech
recognizer = sr.Recognizer()
tts_engine = pyttsx3.init()

def speak(text):
    print(f"AI: {text}")
    tts_engine.say(text)
    tts_engine.runAndWait()

def listen():
    with sr.Microphone() as source:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        print("Recognizing...")
        try:
            return recognizer.recognize_google(audio)
        except sr.UnknownValueError:
            return "Sorry, I couldn't understand that."
        except sr.RequestError:
            return "Could not request results; check your internet connection."

def ask_gemini(prompt):
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Error: {e}"

# Main voice loop
if __name__ == "__main__":
    speak("Hello, I am your AI agent. Say something.")
    while True:
        prompt = listen()
        print(f"You said: {prompt}")
        if "exit" in prompt.lower() or "quit" in prompt.lower():
            speak("Goodbye.")
            break
        reply = ask_gemini(prompt)
        speak(reply)