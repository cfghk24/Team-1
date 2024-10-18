import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { assets } from "../assets/assets";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is an AI response!", sender: "ai" },
        ]);
      }, 1000);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="w-80 h-96 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={toggleChat}
            >
              <img src={assets.cross_icon} className="w-6" alt="" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mb-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-grow border border-gray-300 rounded px-2 py-1"
            />
            <button
              className="ml-2 text-blue-500 hover:text-blue-700"
              onClick={handleSendMessage}
            >
              <FiSend size={24} />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
          onClick={toggleChat}
        >
          Chat with AI
        </button>
      )}
    </div>
  );
};

export default Chatbot;
