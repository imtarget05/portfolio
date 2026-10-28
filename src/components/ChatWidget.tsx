'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '@/components/LanguageProvider';
import { Send, MessageSquare, X, Loader2, Trash2, Plus, Clock, Menu } from 'lucide-react';

const STORAGE_KEY = 'portfolio_chats';

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

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

type Lang = 'en' | 'vi';

const truncateTitle = (content: string): string => {
  if (content.length <= 30) return content;
  return `${content.slice(0, 30).trimEnd()}…`;
};

const formatTime = (ts: number, lang: Lang): string => {
  return new Date(ts).toLocaleTimeString(lang === 'vi' ? 'vi-VN' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export function ChatWidget() {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const uid = useCallback(() => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`, []);

  const createChat = useCallback(
    (withWelcome: boolean): Chat => {
      const now = Date.now();
      const messages: Message[] = [];
      if (withWelcome) {
        messages.push({
          id: uid(),
          role: 'assistant',
          content: lang === 'vi' ? WELCOME_VI : WELCOME_EN,
          createdAt: now,
        });
      }
      return {
        id: uid(),
        title: messages.length ? truncateTitle(messages[0].content) : lang === 'vi' ? 'Cuộc trò chuyện mới' : 'New chat',
        messages,
        createdAt: now,
        updatedAt: now,
      };
    },
    [lang, uid]
  );

  const persist = useCallback(
    (next: Chat[]) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
    },
    []
  );

  useEffect(() => {
    let saved: Chat[] | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw) as Chat[];
    } catch {
      saved = null;
    }

    if (saved?.length) {
      setChats(saved);
      setActiveChatId(saved[0].id);
      return;
    }

    const chat = createChat(true);
    setChats([chat]);
    setActiveChatId(chat.id);
    persist([chat]);
  }, [createChat, persist]);

  useEffect(() => {
    if (chats.length === 0) {
      const chat = createChat(true);
      setChats([chat]);
      setActiveChatId(chat.id);
      return;
    }
    if (activeChatId && !chats.some((c) => c.id === activeChatId)) {
      setActiveChatId(chats[0].id);
    }
    if (!activeChatId) {
      setActiveChatId(chats[0].id);
    }
  }, [chats, activeChatId, createChat]);

  const activeChat = chats.find((c) => c.id === activeChatId);
  const messages = useMemo(() => activeChat?.messages ?? [], [activeChat]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    persist(chats);
  }, [chats, persist]);

  const handleNewChat = useCallback(() => {
    setError(null);
    setInput('');
    const chat = createChat(true);
    setChats((prev) => {
      const next = [chat, ...prev];
      return next;
    });
    setActiveChatId(chat.id);
    setShowHistory(false);
  }, [createChat]);

  const handleDeleteChat = useCallback(
    (id: string) => {
      setChats((prev) => prev.filter((c) => c.id !== id));
      setShowHistory(false);
    },
    []
  );

  const handleSelectChat = useCallback((id: string) => {
    setError(null);
    setActiveChatId(id);
    setShowHistory(false);
  }, []);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || !activeChatId) return;

    const userMsg: Message = { id: uid(), role: 'user', content: text, createdAt: Date.now() };
    setChats((prev) =>
      prev.map((c) =>
        c.id === activeChatId ? { ...c, messages: [...c.messages, userMsg], updatedAt: Date.now() } : c
      )
    );
    setInput('');
    setLoading(true);
    setError(null);

    const current = chats.find((c) => c.id === activeChatId);
    const systemPrompt = lang === 'vi' ? SYSTEM_PROMPT_VI : SYSTEM_PROMPT_EN;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...(current?.messages ?? []).map((m) => ({ role: m.role, content: m.content })),
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
      setChats((prev) =>
        prev.map((c) =>
          c.id === activeChatId ? { ...c, messages: [...c.messages, assistantMsg], updatedAt: Date.now() } : c
        )
      );
    } catch {
      const msg =
        lang === 'vi'
          ? 'Xin lỗi, dịch vụ chat đang gặp sự cố. Vui lòng thử lại sau.'
          : 'Sorry, the chat service is having trouble. Please try again later.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [input, loading, activeChatId, chats, lang, uid]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const toggle = () => {
    setError(null);
    setIsOpen((prev) => !prev);
  };

  const chatItem = (chat: Chat) => (
    <button
      key={chat.id}
      onClick={() => handleSelectChat(chat.id)}
      className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg text-left transition-colors ${
        activeChatId === chat.id
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-muted/50'
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="truncate font-medium text-foreground">{chat.title}</div>
        <div className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock size={10} className="shrink-0" />
          <span>{formatTime(chat.createdAt, lang)}</span>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteChat(chat.id);
        }}
        className="p-1 shrink-0 text-muted-foreground rounded hover:text-destructive hover:bg-red-50/60 transition-colors"
        aria-label={`Xoá cuộc trò chuyện ${chat.title}`}
      >
        <Trash2 size={14} />
      </button>
    </button>
  );

  const newChatButton = () => (
    <button
      onClick={handleNewChat}
      className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
    >
      <Plus size={16} />
      {lang === 'vi' ? 'Cuộc trò chuyện mới' : 'New chat'}
    </button>
  );

  const historyList = () => (
    <ul className="overflow-y-auto p-1 space-y-1">
      {chats.map((chat) => (
        <li key={chat.id}>{chatItem(chat)}</li>
      ))}
      {chats.length === 0 && (
        <div className="p-3 text-xs text-muted-foreground">
          {lang === 'vi' ? 'Chưa có cuộc trò chuyện' : 'No chats yet'}
        </div>
      )}
    </ul>
  );

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button
          onClick={toggle}
          className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-2 border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={lang === 'vi' ? 'Mở cuộc trò chuyện' : 'Open chat'}
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <>
          <div className="fixed inset-0 bg-black/40 z-[99]" onClick={toggle} aria-hidden="true" />
          <div
            className="fixed bottom-6 right-6 w-full md:w-96 h-[600px] bg-white dark:bg-card border border-border rounded-2xl shadow-2xl flex flex-col z-[100] outline-none"
            tabIndex={-1}
          >
            <div className="p-4 border-b border-border bg-white/80 dark:bg-card/80 backdrop-blur-sm flex items-center justify-between">
              <h3 className="font-semibold text-foreground">
                {lang === 'vi' ? 'Trợ lý AI' : 'AI Assistant'}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowHistory(true)}
                  className="md:hidden p-1.5 text-muted-foreground hover:text-primary rounded transition-colors"
                  aria-label={lang === 'vi' ? 'Lịch sử' : 'History'}
                >
                  <Menu size={20} />
                </button>
                <button
                  onClick={toggle}
                  className="p-1.5 text-muted-foreground hover:text-primary rounded transition-colors"
                  aria-label={lang === 'vi' ? 'Đóng' : 'Close'}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex min-w-0">
              <aside className="hidden md:flex md:w-72 flex-col border-r border-border bg-secondary/50">
                <div className="p-3 border-b border-border">{newChatButton()}</div>
                {historyList()}
              </aside>
              <main className="flex-1 flex flex-col min-w-0 relative">
                {showHistory && (
                  <div className="absolute inset-0 z-10 bg-white dark:bg-card border-r border-border flex flex-col">
                    <div className="p-4 border-b border-border flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">
                        {lang === 'vi' ? 'Lịch sử' : 'History'}
                      </h3>
                      <button
                        onClick={() => setShowHistory(false)}
                        className="p-1.5 text-muted-foreground hover:text-primary rounded transition-colors"
                        aria-label={lang === 'vi' ? 'Đóng' : 'Close'}
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <div className="p-3">{newChatButton()}</div>
                    {historyList()}
                  </div>
                )}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`max-w-[85%] p-3 rounded-xl overflow-wrap break-word whitespace-normal word-break normal ${
                        msg.role === 'user'
                          ? 'ml-auto bg-primary text-white rounded-tr-none'
                          : 'mr-auto bg-muted text-foreground rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm leading-relaxed overflow-wrap break-word word-break normal whitespace-normal">{msg.content}</p>
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
                    <div className="mr-auto p-3 bg-muted text-foreground rounded-tl-none flex items-center gap-2">
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
                <div className="p-3 border-t border-border bg-card/80 backdrop-blur">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={lang === 'vi' ? 'Nhập câu hỏi...' : 'Type a message...'}
                      className="flex-1 p-2.5 pl-10 pr-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
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
          </div>
        </>
      )}
    </div>
  );
}
