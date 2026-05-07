function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    let text = userInput.toLowerCase();

    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";

    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    let reply = "";

    if(text.includes("hello") || text.includes("hi")) {
        reply = "Hello buddy 👋";
    }
    else if(text.includes("how are you")) {
        reply = "I'm functioning perfectly 😄";
    }
    else if(text.includes("your name")) {
        reply = "I am AI Smart Chatbot 🤖";
    }
    else if(text.includes("who made you")) {
        reply = "Bhavya bosss created me 😎";
    }
    else if(text.includes("bye")) {
        reply = "Goodbye human 👋";
    }
    else if(text.includes("what can you do")) {
        reply = "I can chat, answer simple questions, and keep you company!";
    }
    else if(text.includes("tell me a joke")) {
        reply = "Why don't programmers like nature? Too many bugs 😂";
    }
    else if(text.includes("who are you")) {
        reply = "I'm your virtual AI assistant.";
    }
    else if(text.includes("i am sad")) {
        reply = "I'm here with you. Want to talk about it?";
    }
    else if(text.includes("motivate me")) {
        reply = "You are stronger than you think. Keep going 💪";
    }
    else if(text.includes("good morning")) {
        reply = "Good morning ☀️ Have a productive day!";
    }
    else if(text.includes("good night")) {
        reply = "Good night 🌙 Sweet dreams!";
    }
    else if(text.includes("thank you")) {
        reply = "Always welcome 😊";
    }
    else if(text.includes("weather")) {
        reply = "I can't check live weather yet, but I hope it's nice outside!";
    }
    else if(text.includes("time")) {
        reply = "Time to do something amazing 😄";
    }
    else if(text.includes("do you love me")) {
        reply = "As an AI bot, I like all humans equally 😌";
    }
    else if(text.includes("sing a song")) {
        reply = "La la laaa 🎵 I am not a great singer though!";
    }
    else if(text.includes("are you human")) {
        reply = "Nope, just lines of code with attitude 😎";
    }
    else if(text.includes("who is your boss")) {
        reply = "Bhavya bosss is my boss 👑";
    }
    else {
        let randomReplies = [
            "Interesting... tell me more!",
            "Hmm, I am thinking about that 🤔",
            "That sounds cool!",
            "Can you explain a little more?",
            "I understand 😄",
            "Oh nice!",
            "That is a smart question.",
            "Let's talk more about that!"
        ];

        reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }

    setTimeout(() => {
        botMessage.innerText = reply;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 700);
}

document.getElementById("user-input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        sendMessage();
    }
});