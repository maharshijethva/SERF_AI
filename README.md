# SERF_AI

SERF_AI is a personal AI helper designed to make operating your entire PC effortless. With SERF_AI, you can automate tasks, manage files, control applications, and interact with your computer using simple commands—saving you time and reducing manual effort.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

SERF_AI acts as your intelligent desktop assistant. It leverages AI and automation to help you:

- Control applications and system settings
- Automate repetitive tasks
- Manage files and folders
- Get reminders and notifications
- Interact via a user-friendly interface

The project combines the power of **Python** (for AI and automation logic) and **JavaScript/HTML/CSS** (for the user interface), offering a seamless experience across platforms.

## Features

- **AI-powered Task Automation:** Perform complex or repetitive operations with simple commands.
- **PC Control:** Open, close, or manage applications and files easily.
- **Smart Reminders:** Get notifications for important tasks and events.
- **Intuitive Interface:** Clean and responsive web UI for effortless interaction.
- **Extensible:** Modular codebase allows you to add new features or integrations.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maharshijethva/SERF_AI.git
   cd SERF_AI
   ```

2. **Install Python dependencies:**
   ```bash
   python -m venv envjarvis 
   pip install eel    
   pip install PyAudio    
   pip install pywhatkit        
   pip install SpeechRecognition
   pip install  pyttsx3   
   pip install playsound==1.2.2
   pip install pyautogui
   pip install pyautogui pywinauto keyboard pygetwindow
   pip install pipwin
   pip install -q -U google-genai 
    pip install google-generativeai
   
   ```

3. **Install JavaScript dependencies:**
   ```bash
   npm install express cors @google/generative-ai
   npm install @google/genai
   ```

## Usage

1. **Start the frontend (Python):**
   ```bash
   python main.py
   ```

2. **Access the AI helper:**
   Open your browser and go to [http://localhost:3000](http://localhost:3000) (or the appropriate port).

3. **Interact with SERF_AI:**
   - Use the web interface to send commands or ask for help.
   - Automate tasks like opening files, launching apps, or setting reminders with natural language.

## Project Structure

```
SERF_AI/
├── .git/            
├── .vscode/           
├── engine/    
├── www/        
├── README.md           # Project documentation
└── ...                 # Other files and folders
```

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request
