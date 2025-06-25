$(document).ready(function () {

    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceOut",
        },
    });

    //Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.3",
        autostart: true
    });

    // Siri message animation
    $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true,
        },
    });

    // CHAT TOGGLE FUNCTIONALITY
    $("#ToggleChatBtn").click(function () {
        // Only toggle chat, do not play assistant sound or show SiriWave
        $("#Oval").attr("hidden", true);
        $("#ChatSection").attr("hidden", false);

         const chatbox = document.getElementById('chatbox');
         const promptInput = document.getElementById('prompt');
         const sendBtn = document.getElementById('send-btn');
         const typingIndicator = document.getElementById('typing');

    // Function to add messages to chat
         function addMessageToChat(sender, message) {
             const messageDiv = document.createElement('div');
             messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
             messageDiv.style.marginBottom = '10px';
             messageDiv.style.padding = '8px';
             messageDiv.style.borderRadius = '5px';
             messageDiv.style.backgroundColor = sender === 'You' ? '#2c3e50' : '#1a1a1a';
             chatbox.appendChild(messageDiv);
        
        // Scroll to bottom of chat
             chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Function to show typing indicator
         function showTypingIndicator() {
             typingIndicator.style.display = 'block';
        
        // Hide after 3 seconds if no response
             setTimeout(() => {
                 if (typingIndicator.style.display === 'block') {
                     typingIndicator.style.display = 'none';
                     addMessageToChat('Gemini', "I'm having trouble responding. Please try again later.");
                    }
             }, 3000);
    }

    // Function to hide typing indicator
         function hideTypingIndicator() {
             typingIndicator.style.display = 'none';
    }

    // Function to simulate Gemini response
         function simulateGeminiResponse(prompt) {
        // Show typing indicator while waiting for response
             showTypingIndicator();
        
        // Simulate API delay with timeout
             setTimeout(() => {
                 hideTypingIndicator();
            
            // Create a response based on the user's prompt
                 const responses = [
                     `I understand you're asking about "${prompt}". That's an interesting topic!`,
                     `Thanks for your question about "${prompt}". Here's what I can tell you...`,
                     `Regarding "${prompt}", I found this information for you.`,
                     `I've analyzed your query about "${prompt}" and here's my response.`
                  ];
            
                 const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                 addMessageToChat('Gemini', randomResponse);
                 }, 2000); // 2 second delay to simulate API response
    }

    // Event listener for send button
         sendBtn.addEventListener('click', () => {
             const prompt = promptInput.value.trim();
             if (prompt) {
                 addMessageToChat('You', prompt);
                 promptInput.value = '';
                 simulateGeminiResponse(prompt);
             }
        });

    // Event listener for Enter key
         promptInput.addEventListener('keypress', (e) => {
             if (e.key === 'Enter') {
                 sendBtn.click();
           }
   });
});

    // mic button click event
    $("#MicBtn").click(function () {
        eel.playassistantSound()
        $("#Oval").attr("hidden", true);
        $("#ChatSection").attr("hidden", true);
        $("#SiriWave").attr("hidden", false);
        eel.allCommands()()
    });

});