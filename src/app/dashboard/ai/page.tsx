'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const suggestedQuestions = [
  "What's the best strategy for my investment goals?",
  "How do monthly payouts work?",
  "Explain the risk levels of each strategy",
  "How can I maximize my returns?",
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm your Quantroy AI Assistant powered by Gemini. I can help you understand our investment strategies, answer questions about your portfolio, and provide personalized recommendations. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        default: "Based on your query, I'd recommend exploring our Pro Strategy which offers a balanced approach with ~66% monthly target returns. It's ideal for investors looking for consistent growth with moderate risk. Would you like me to explain more about how it works?",
        strategy: "We offer four main strategies:\n\n1. **Starter** ($500 min) - Perfect for beginners, moderate risk\n2. **Pro** ($5,000 min) - Our most popular, balanced growth\n3. **Elite** ($50,000 min) - Advanced opportunities, higher potential\n4. **VIP** ($500,000+ min) - Institutional grade, fully customized\n\nEach strategy targets ~66% monthly returns with monthly payouts directly to your wallet.",
        payout: "Monthly payouts work automatically:\n\n1. Your returns are calculated at the end of each month\n2. Profits are sent directly to your registered crypto wallet\n3. Typically processed within 24-48 hours of month end\n4. You can track all payouts in your dashboard\n\nNo action required from you - it's fully automated!",
        risk: "Here's how our risk levels work:\n\n• **Moderate** (Starter) - Diversified top-10 crypto portfolio\n• **Moderate-High** (Pro) - Active trading with DeFi integration\n• **High** (Elite) - Early access to new opportunities\n• **Custom** (VIP) - Tailored to your risk tolerance\n\nAll strategies use stop-losses and position limits to manage downside risk.",
      };

      const lowerInput = input.toLowerCase();
      let response = responses.default;
      
      if (lowerInput.includes('strategy') || lowerInput.includes('plan')) {
        response = responses.strategy;
      } else if (lowerInput.includes('payout') || lowerInput.includes('payment')) {
        response = responses.payout;
      } else if (lowerInput.includes('risk')) {
        response = responses.risk;
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        role: 'assistant',
        content: response,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Sparkles className="text-emerald-400" /> AI Assistant
        </h1>
        <p className="text-gray-400">Powered by Gemini AI</p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 card flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
              )}
              <div
                className={`max-w-[70%] p-4 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-md'
                    : 'bg-emerald-900/30 text-gray-200 rounded-bl-md'
                }`}
              >
                <p className="whitespace-pre-line text-sm">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-emerald-900/30 p-4 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 2 && (
          <div className="px-6 pb-4">
            <p className="text-gray-400 text-sm mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="px-3 py-2 rounded-lg bg-emerald-900/20 text-emerald-400 text-sm hover:bg-emerald-900/40 transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-emerald-900/30">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about investing..."
              className="input flex-1"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="btn-primary px-4 disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
