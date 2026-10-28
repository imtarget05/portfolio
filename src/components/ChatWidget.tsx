'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '@/components/LanguageProvider';
import { Send, MessageSquare, X, Loader2 } from 'lucide-react';

const SYSTEM_PROMPT_VI = `Bạn là trợ lý hỗ trợ của trang portfolio Mai Nguyen Binh Tan. Hãy trả lời các câu hỏi về kỹ năng, dự án và kinh nghiệm của anh ấy dựa trên nội dung trang portfolio. Anh ấy là Kỹ sư Phần mềm chuyên về Backend, Hạ tầng Cloud & AI ứng dụng. Giữ câu trả lời ngắn gọn, chuyên nghiệp và dùng cùng ngôn ngữ với câu hỏi của người dùng (Tiếng Việt hoặc Tiếng Anh). Nếu không biết, hãy thừa nhận ngay. Đừng bịa dự án hay kinh nghiệm.`;
const SYSTEM_PROMPT_EN = `You are a helpful assistant for Mai Nguyen Binh Tan's portfolio. Answer questions about his skills, projects, and experience based on the portfolio context. He is a Software Engineer specializing in Backend, Cloud Infrastructure & Applied AI. Keep answers concise, professional, and in the same language as the user's question (English or Vietnamese). If you don't know something, say so honestly. Do not make up projects or experience.`;

const WELCOME_VI = 'Chào bạn! Tôi là trợ lý AI của portfolio Mai Nguyen Binh Tan. Bạn muốn hỏi về kỹ năng, dự án hay kinh nghiệm gì?';
const WELCOME_EN = "Hi! I'm the AI assistant for Mai Nguyen Binh Tan's portfolio. What would you like to ask about his skills, projects, or experience?";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: number;
}

type Lang = 'en' | 'vi';

const formatTime = (ts: number, lang: Lang): string => {
  return new Date(ts).toLocaleTimeString(lang === 'vi' ? 'vi-VN' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export function ChatWidget() {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const uid = useCallback(() => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`, []);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: uid(),
          role: 'assistant',
          content: lang === 'vi' ? WELCOME_VI : WELCOME_EN,
          createdAt: Date.now(),
        },
      ]);
    }
  }, [lang, uid, messages.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { id: uid(), role: 'user', content: text, createdAt: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setError(null);

    const systemPrompt = lang === 'vi' ? SYSTEM_PROMPT_VI : SYSTEM_PROMPT_EN;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: text },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      const fallback = lang === 'vi' ? 'Xin lỗi, tôi chưa có câu trả lời.' : "Sorry, I don't have an answer.";
      const reply: string = data.reply || fallback;
      const assistantMsg: Message = { id: uid(), role: 'assistant', content: reply, createdAt: Date.now() };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const msg =
        lang === 'vi'
          ? 'Xin lỗi, dịch vụ chat đang gặp sự cố. Vui lòng thử lại sau.'
          : 'Sorry, the chat service is having trouble. Please try again later.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, lang, uid]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const toggle = useCallback(() => {
    setError(null);
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setError(null);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen && (
        <button
          onClick={toggle}
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-2 border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={lang === 'vi' ? 'Mở cuộc trò chuyện' : 'Open chat'}
        >
          <MessageSquare size={22} />
        </button>
      )}

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[99]"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div
            ref={panelRef}
            className="fixed bottom-6 right-6 z-[100] w-[340px] h-[420px] max-h-[calc(100vh-2rem)] bg-white dark:bg-card border border-border shadow-2xl rounded-2xl flex flex-col overflow-auto animate-slide-up"
            role="dialog"
            aria-label={lang === 'vi' ? 'Trò chuyện' : 'Chat'}
          >
            <header className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-border bg-white/80 dark:bg-card/80 backdrop-blur-sm">
              <span className="font-semibold text-foreground text-sm">
                {lang === 'vi' ? 'Trợ lý AI' : 'AI Assistant'}
              </span>
              <button
                onClick={handleClose}
                className="p-1.5 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label={lang === 'vi' ? 'Đóng' : 'Close'}
              >
                <X size={18} />
              </button>
            </header>

            <main className="flex-1 flex flex-col min-h-0 overflow-auto">
              <div className="min-h-0 flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`max-w-[80%] p-3 rounded-2xl break-words whitespace-normal ${
                      msg.role === 'user'
                        ? 'ml-auto bg-primary text-white rounded-br-none'
                        : 'mr-auto bg-muted text-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="break-words whitespace-normal text-sm leading-relaxed">
                      {msg.content}
                    </p>
                    <span
                      className={`block mt-1 text-[10px] text-right ${
                        msg.role === 'user' ? 'text-primary/60' : 'text-muted-foreground/60'
                      }`}
                    >
                      {formatTime(msg.createdAt, lang)}
                    </span>
                  </div>
                ))}
                {loading && (
                  <div className="mr-auto p-3 bg-muted text-foreground rounded-bl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-xs text-muted-foreground">
                      {lang === 'vi' ? 'Đang gõ...' : 'Typing...'}
                    </span>
                  </div>
                )}
                {error && (
                  <div className="mr-auto p-3 rounded-lg border border-red-100 bg-red-50 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div ref={endRef} />
              </div>

              <div className="shrink-0 p-3 border-t border-border bg-card/80 backdrop-blur">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex w-full min-w-0 gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={lang === 'vi' ? 'Nhập câu hỏi...' : 'Type a message...'}
                    className="min-w-0 flex-1 p-2.5 pl-3 pr-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    disabled={loading}
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    aria-label={lang === 'vi' ? 'Gửi tin nhắn' : 'Send message'}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
}
