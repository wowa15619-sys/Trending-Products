import React, { useState, useEffect, useRef } from 'react';
import { startChatSession, sendMessageToChat } from '../services/geminiService';
import { ChatMessage, MessageAuthor } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startChatSession();
    setMessages([
      { author: MessageAuthor.BOT, text: 'مرحباً! أنا "ساعد"، مساعدك في المتجر العالمي. كيف يمكنني خدمتك اليوم؟' }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = { author: MessageAuthor.USER, text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const stream = await sendMessageToChat(userInput);
      let botResponse = '';
      setMessages(prev => [...prev, { author: MessageAuthor.BOT, text: '' }]);
      
      for await (const chunk of stream) {
        botResponse += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = botResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { author: MessageAuthor.BOT, text: 'عذراً، حدث خطأ ما. الرجاء المحاولة مرة أخرى.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        className={`fixed bottom-5 right-5 h-16 w-16 bg-sky-500 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-sky-600 transition-all duration-300 z-50 transform ${isOpen ? 'scale-0' : 'scale-100'}`}
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-robot text-2xl"></i>
      </div>

      <div className={`fixed bottom-0 right-0 sm:bottom-5 sm:right-5 w-full h-full sm:w-[400px] sm:h-[600px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 z-50 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <header className="flex items-center justify-between p-4 bg-slate-800 text-white rounded-t-2xl sm:rounded-t-lg">
          <div className="flex items-center gap-3">
            <i className="fas fa-robot text-xl"></i>
            <h3 className="font-bold text-lg">المساعد الذكي "ساعد"</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
        </header>

        <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-3 ${msg.author === MessageAuthor.USER ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md lg:max-w-xs rounded-2xl px-4 py-2 ${msg.author === MessageAuthor.USER ? 'bg-sky-500 text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-200 text-slate-800 rounded-2xl rounded-bl-none px-4 py-2">
                <i className="fas fa-spinner fa-spin"></i>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 bg-white rounded-b-2xl sm:rounded-b-lg">
          <div className="flex items-center">
            <input 
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 py-2 px-4 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
            />
            <button type="submit" className="ms-3 h-10 w-10 bg-sky-500 text-white rounded-full flex items-center justify-center disabled:bg-slate-400">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
