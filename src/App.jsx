import React, { useState, useEffect } from "react";

import { FaRobot } from "react-icons/fa";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "user" }];
      const response = { text: "Hello! I'm a chatbot. How can I assist you today?", sender: "bot" };
      newMessages.push(response);
      setMessages(newMessages);
      setInput("");
    }
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold flex items-center">
            <FaRobot className="mr-2 text-blue-500" />
            Chatbot
          </h1>
        </div>
        <div className="h-64 overflow-y-auto mb-4 p-2 bg-white rounded">
          {messages.map((message, index) => (
            <div key={index} className={`p-2 rounded my-1 ${message.sender === "user" ? "bg-blue-200 ml-auto" : "bg-green-200"}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input type="text" className="input input-bordered flex-1" placeholder="Type your message..." value={input} onChange={handleInputChange} onKeyPress={(event) => event.key === "Enter" && handleSend()} />
          <button className="btn btn-primary ml-2" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
