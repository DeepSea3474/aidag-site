"use client";

import { useState } from "react";

export default function SoulwareAIChat() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome to SoulwareAI! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "🤖 SoulwareAI is processing your request..." }
      ]);
    }, 500);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SoulwareAI Chatbot</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          maxHeight: "400px",
          overflowY: "auto",
          marginBottom: "1rem"
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.from === "user" ? "right" : "left",
              margin: "0.5rem 0"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                background: msg.from === "user" ? "#0070f3" : "#eee",
                color: msg.from === "user" ? "#fff" : "#000"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "0.5rem 1rem",—

