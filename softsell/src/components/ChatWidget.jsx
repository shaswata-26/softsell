import React, { useState } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const response = `Mock AI: Answering your question "${input}".`;
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: response }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-900 border rounded-xl shadow-xl p-4 z-50">
      <div className="flex items-center mb-3">
        <FaRobot className="text-indigo-600 mr-2" />
        <h4 className="font-semibold">SoftSell AI Assistant</h4>
      </div>
      <div className="h-40 overflow-y-auto mb-3 space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.from === 'user' ? 'bg-indigo-100' : 'bg-gray-100 dark:bg-gray-800'}`}>{msg.text}</div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={handleSend} className="bg-indigo-600 text-white p-2 rounded">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
