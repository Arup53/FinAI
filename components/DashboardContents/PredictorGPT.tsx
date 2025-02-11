"use client";

import axios from "axios";
import { Button } from "../ui/button";
import { useState } from "react";

const PredictorGPT = () => {
  // Array to hold all messages (both user and assistant)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to send the user's message and fetch the assistant's response
  const handleSend = async () => {
    if (!input.trim()) return; // ignore empty messages

    // Append the user's message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Clear input and show loading state
    setInput("");
    setLoading(true);

    try {
      // Post the message to your backend API
      const res = await axios.post(
        "http://localhost:3000/user",
        { input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Append the assistant's reply to the chat
      const assistantMessage = {
        sender: "assistant",
        text: res.data.result.output,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        sender: "assistant",
        text: "Error fetching response.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Get AI Market Insight</h2>

      {/* Chat Window */}
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.messageRow,
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                ...styles.messageBubble,
                background: msg.sender === "user" ? "#007aff" : "#e5e5ea",
                color: msg.sender === "user" ? "#fff" : "#000",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={styles.loading}>
            <p>Loading...</p>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={styles.inputField}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
  },
  chatWindow: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    height: "400px",
    overflowY: "auto",
    background: "#f9f9f9",
    marginBottom: "1rem",
  },
  messageRow: {
    display: "flex",
    marginBottom: "0.5rem",
  },
  messageBubble: {
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    maxWidth: "80%",
    wordWrap: "break-word",
  },
  loading: {
    textAlign: "center",
    marginTop: "1rem",
  },
  inputContainer: {
    display: "flex",
  },
  inputField: {
    flex: 1,
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "0.5rem",
  },
  sendButton: {
    padding: "0.75rem 1.5rem",
    background: "#007aff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default PredictorGPT;
