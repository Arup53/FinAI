"use client";

import { useEffect, useRef, useState } from "react";
import { Send, User, Bot, Menu } from "lucide-react";
import axios from "axios";

interface Message {
  id: number;
  content: string;
  isUser: boolean;
}

const MainChatUi = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Hello! How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      isUser: true,
    };

    const response = await axios.post(
      "http://localhost:3000/chatRag",
      {
        test: "test",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);

    // Simulate AI response
    const aiResponse: Message = {
      id: messages.length + 2,
      content: `${response.data}`,
      isUser: false,
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
    setLoading(false);
  };

  return (
    <div className="flex  w-[60vw]  bg-gray-100 border border-gray-300">
      {/* Sidebar */}
      {/* <div
        className={`fixed md:static inset-y-0 left-0 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out bg-gray-900 text-white w-64 p-4 z-20`}
      >
        <button className="flex items-center gap-2 w-full p-3 rounded-lg hover:bg-gray-800 transition-colors">
          <MessagesSquare size={20} />
          <span>New Chat</span>
        </button>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">
            Recent chats
          </h2>
          <div className="space-y-2">
            {["Previous Chat 1", "Previous Chat 2"].map((chat, index) => (
              <button
                key={index}
                className="w-full text-left p-2 rounded hover:bg-gray-800 transition-colors"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-[75vh] relative">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b p-4 flex items-center">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto p-4 space-y-6"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-4 ${
                message.isUser ? "bg-white" : "bg-gray-50"
              } p-6 rounded-lg`}
            >
              <div
                className={`p-2 rounded-full ${
                  message.isUser ? "bg-gray-100" : "bg-black text-white"
                }`}
              >
                {message.isUser ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className="flex-1">
                <p className="text-gray-800">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
            <div className="p-2 rounded-full bg-black text-white">
              <Bot size={20} />
            </div>
            <div className="flex-1">
              <p className="text-gray-800">Thinking...</p>
            </div>
          </div>
        )}

        {/* Input Form */}
        <div className="border-t bg-white p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a message..."
              className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-emerald-500 transition-colors disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-xs text-center text-gray-500 mt-2">
            ChatGPT clone for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainChatUi;
