// Chatbot.jsx

import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value;
    if (userInput.trim() !== '') {
      setMessages([...messages, { author: 'user', text: userInput }]);
      // Process user input and generate bot response
      const botResponse = generateBotResponse(userInput);
      setMessages([...messages, { author: 'bot', text: botResponse }]);
      // Clear input field after submission
      e.target.elements.userInput.value = '';
    }
  };

  const generateBotResponse = (userInput) => {
    // Pre-defined responses based on keywords
    const responses = {
      'women empowerment': "Women empowerment is crucial for societal progress.",
      'gender equality': "Gender equality is a fundamental human right.",
      'women rights': "Protecting and promoting women's rights is essential for a fair and just society.",
      // Add more keyword-response pairs as needed
      'default': "I'm a chatbot programmed to answer questions related to women empowerment!",
    };

    // Check if any keyword matches the user input
    const keywords = Object.keys(responses);
    for (let i = 0; i < keywords.length; i++) {
      if (userInput.toLowerCase().includes(keywords[i])) {
        return responses[keywords[i]];
      }
    }

    // If no keyword matches, return the default response
    return responses['default'];
  };

  return (
    <>
    <div
        className="chatbot-button"
        onClick={toggleChatbot}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <i className="fas fa-comments">:)</i>
      </div>
    <div className="chatbot-container" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="chatbot">
        <div className="chatbot-header">
            Chatbot
            <button className="close-button" onClick={toggleChatbot}>
              <i className="fas fa-times">x</i>
            </button>
            </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.author}`}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="chatbot-form" onSubmit={handleMessageSubmit}>
          <input type="text" name="userInput" placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Chatbot;
