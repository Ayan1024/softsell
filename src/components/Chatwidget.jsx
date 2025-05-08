import React, { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import styled from "styled-components";


const suggestedQuestions = [
  "How do I sell my license?",
  "Is this service secure?",
  "How long does it take to get paid?",
];

const Chatwidget = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setChat((prev) => [...prev, { question: userMessage, answer: "..." }]);
    setInput("");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
  contents: [
    {
      role: "user",
      parts: [
        {
          text: `You are a helpful assistant for a license resale website called SoftSell. Answer user questions briefly and clearly. Only respond in 2–3 short sentences.\n\nUser: ${userMessage}`,
        },
      ],
    },
  ],
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 150,
  },
  safetySettings: [
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_NONE",
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_NONE",
    },
  ],
}),
        });

      const data = await response.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response.";

      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].answer = reply;
        return updated;
      });
    } catch (err) {
      console.error(err);
      setChat((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].answer =
          "Oops! Something went wrong. Please try again later.";
        return updated;
      });
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
  <StyledWrapper className="fixed bottom-6 right-6 z-50">
    <button className="chatBtn" onClick={() => setOpen(true)} aria-label="Open Chat">
      <svg height="1.6em" fill="white" xmlSpace="preserve" viewBox="0 0 1000 1000" y="0px" x="0px" version="1.1">
        <path d="M881.1,720.5H434.7L173.3,941V720.5h-54.4C58.8,720.5,10,671.1,10,610.2v-441C10,108.4,58.8,59,118.9,59h762.2C941.2,59,990,108.4,990,169.3v441C990,671.1,941.2,720.5,881.1,720.5L881.1,720.5z M935.6,169.3c0-30.4-24.4-55.2-54.5-55.2H118.9c-30.1,0-54.5,24.7-54.5,55.2v441c0,30.4,24.4,55.1,54.5,55.1h54.4h54.4v110.3l163.3-110.2H500h381.1c30.1,0,54.5-24.7,54.5-55.1V169.3L935.6,169.3z M717.8,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.5,24.7,54.5,55.2C772.2,420.2,747.8,444.8,717.8,444.8L717.8,444.8z M500,444.8c-30.1,0-54.4-24.7-54.4-55.1c0-30.4,24.3-55.2,54.4-55.2c30.1,0,54.4,24.7,54.4,55.2C554.4,420.2,530.1,444.8,500,444.8L500,444.8z M282.2,444.8c-30.1,0-54.5-24.7-54.5-55.1c0-30.4,24.4-55.2,54.5-55.2c30.1,0,54.4,24.7,54.4,55.2C336.7,420.2,312.3,444.8,282.2,444.8L282.2,444.8z" />
      </svg>
      <span className="tooltip">Chat</span>
    </button>
  </StyledWrapper>
)}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 max-w-[90vw] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
            <span className="font-bold">SoftSell Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close Chat">
              <FaTimes />
            </button>
          </div>

          {/* Chat History */}
          <div className="p-4 h-60 overflow-y-auto space-y-4 text-sm">
            {chat.map((c, i) => (
              <div key={i}>
                <p className="font-medium text-black dark:text-white">
                  You: {c.question}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Bot: {c.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Example Prompts */}
          <ul className="flex flex-wrap gap-2 text-xs">
            {suggestedQuestions.map((q, i) => (
              <li
                key={i}
                onClick={() => setInput(q)}
                className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {q}
              </li>
            ))}
          </ul>

          {/* Input Box */}
          <div className="flex items-center border-t border-gray-200 dark:border-gray-700 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-white outline-none"
              placeholder="Ask something..."
            />
            <button
              onClick={handleSend}
              className="ml-2 text-sm bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};
const StyledWrapper = styled.div`
  .chatBtn {
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    padding-top: 3px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.164);
    position: relative;
    background-size: 280%;
    background-image: linear-gradient(
      325deg,
      hsla(217, 100%, 56%, 1) 0%,
      hsla(194, 100%, 69%, 1) 55%,
      hsla(217, 100%, 56%, 1) 90%
    );
    color: hsla(360, 100%, 100%, 1);
    transition: 0.8s;
  }

  .tooltip {
    position: absolute;
    top: -40px;
    opacity: 0;
    background-color: hsla(217, 100%, 56%, 1);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.5s;
    pointer-events: none;
    letter-spacing: 0.5px;
  }

  .chatBtn:hover .tooltip {
    opacity: 1;
    transition-duration: 0.5s;
  }

  .chatBtn:hover {
    background-position: right top;
    transition-duration: 0.8s;
  }

  .chatBtn:is(:focus, :focus-visible, :active) {
    outline: none;
    box-shadow:
      0 0 0 3px hsla(360, 100%, 100%, 1),
      0 0 0 6px hsla(217, 100%, 56%, 1);
  }
`;


export default Chatwidget;
