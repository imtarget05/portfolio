'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '@/components/LanguageProvider';
import { Send, MessageSquare, X, Loader2, Trash2 } from 'lucide-react';

const SYSTEM_PROMPT_VI = `Bạn là trợ lý hỗ trợ của trang portfolio Mai Nguyen Binh Tan. Hãy trả lời các câu hỏi về kỹ năng, dự án và kinh nghiệm của anh ấy dựa trên nội dung trang portfolio. Anh ấy là Kỹ sư Phần mềm chuyên về Backend, Hạ tầng Cloud & AI ứng dụng. Giữ câu trả lời ngắn gọn, chuyên nghiệp và dùng cùng ngôn ngữ với câu hỏi của người dùng (Tiếng Việt hoặc Tiếng Anh). Nếu không biết, hãy thừa nhận ngay. Đừng bịa dự án hay kinh nghiệm.`;
const SYSTEM_PROMPT_EN = `You are a helpful assistant for Mai Nguyen Binh Tan's portfolio. Answer questions about his skills, projects, and experience based on the portfolio context. He is a Software Engineer specializing in Backend, Cloud Infrastructure & Applied AI. Keep answers concise, professional, and in the same language as the user's question (English or Vietnamese). If you don't know something, say so honestly. Do not make up projects or experience.`;

const WELCOME_VI = 'Chào bạn! Tôi là trợ lý AI của portfolio Mai Nguyen Binh Tan. Bạn muốn hỏi về kỹ năng, dự án hay kinh nghiệm gì?';
const WELCOME_EN = "Hi! I'm the AI assistant for Mai Nguyen Binh Tan's portfolio. What would you like to ask about his skills, projects, or experience?";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

interface ChatSession {
  id: string;
  title: string;
  user_id: string | null;
  created_at: string;
  updated_at: string;
}

interface SessionWithMessages extends ChatSession {
  messages: Message[];
}

type Lang = 'en' | 'vi';

const formatTime = (ts: string, lang: Lang): string => {
  return new Date(ts).toLocaleTimeString(lang === 'vi' ? 'vi-VN' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const generateTitle = (firstMessage: string): string => {
  const trimmed = firstMessage.trim().slice(0, 40);
  return trimmed.length < firstMessage.trim().length ? `${trimmed}…` : trimmed;
};

export function ChatWidget() {
  const { lang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const uid = useCallback(() => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`, []);

  const fetchSessions = useCallback(async () => {
    try {
      const response = await fetch('/api/chat/history');
      if (!response.ok) throw new Error('Failed to fetch sessions');
      const data = await response.json();
      setSessions(data.sessions || []);
      if (data.sessions?.length > 0 && !activeSessionId) {
        setActiveSessionId(data.sessions[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch sessions:', err);
      setError(lang === 'vi' ? 'Không thể tải lịch sử trò chuyện' : 'Failed to load chat history');
    }
  }, [lang, activeSessionId]);

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const fetchSessionMessages = useCallback(async (sessionId: string) => {
    try {
      const response = await fetch(`/api/chat/history/${sessionId}`);
      if (!response.ok) throw new Error('Failed to fetch session');
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (err) {
      console.error('Failed to fetch messages:', err);
      setError(lang === 'vi' ? 'Không thể tải tin nhắn' : 'Failed to load messages');
    }
  }, [lang]);

  useEffect(() => {
    if (activeSessionId) {
      fetchSessionMessages(activeSessionId);
    } else {
      setMessages([]);
    }
  }, [activeSessionId, fetchSessionMessages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const createNewSession = useCallback(async () => {
    try {
      const title = lang === 'vi' ? 'Cuộc trò chuyện mới' : 'New Conversation';
      const response = await fetch('/api/chat/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) throw new Error('Failed to create session');
      const data = await response.json();
      setSessions((prev) => [data.session, ...prev]);
      setActiveSessionId(data.session.id);
      setMessages([]);
    } catch (err) {
      console.error('Failed to create session:', err);
      setError(lang === 'vi' ? 'Không thể tạo cuộc trò chuyện mới' : 'Failed to create new conversation');
    }
  }, [lang]);

  const deleteSession = useCallback(async (sessionId: string) => {
    try {
      const response = await fetch(`/api/chat/history/${sessionId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete session');
      setSessions((prev) => {
        const next = prev.filter((s) => s.id !== sessionId);
        if (activeSessionId === sessionId) {
          setActiveSessionId(next[0]?.id ?? null);
        }
        return next;
      });
    } catch (err) {
      console.error('Failed to delete session:', err);
      setError(lang === 'vi' ? 'Không thể xóa cuộc trò chuyện' : 'Failed to delete conversation');
    }
  }, [activeSessionId, lang]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || !activeSessionId) return;

    const userMsg: Message = { id: uid(), role: 'user', content: text, createdAt: new Date().toISOString() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setError(null);

    const systemPrompt = lang === 'vi' ? SYSTEM_PROMPT_VI : SYSTEM_PROMPT_EN;

    try {
      await fetch(`/api/chat/history/${activeSessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'user', content: text }),
      });

      const history = messages.map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...history,
            { role: 'user', content: text },
          ],
          lang,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      const fallback = lang === 'vi' ? 'Xin lỗi, tôi chưa có câu trả lời.' : "Sorry, I don't have an answer.";
      const reply: string = data.reply || fallback;
      const assistantMsg: Message = { id: uid(), role: 'assistant', content: reply, createdAt: new Date().toISOString() };

      await fetch(`/api/chat/history/${activeSessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'assistant', content: reply }),
      });

      setMessages((prev) => [...prev, assistantMsg]);
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, title: s.title === (lang === 'vi' ? 'Cuộc trò chuyện mới' : 'New Conversation') ? generateTitle(text) : s.title, updated_at: new Date().toISOString() }
            : s
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
  }, [input, loading, activeSessionId, messages, lang, uid]);

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
    if (!isOpen && sessions.length === 0) {
      createNewSession();
    }
  }, [isOpen, sessions.length, createNewSession]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setError(null);
  }, []);

  const handleSessionClick = useCallback((sessionId: string) => {
    setActiveSessionId(sessionId);
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
              <div className="flex items-center gap-1">
                <button
                  onClick={createNewSession}
                  className="p-1.5 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={lang === 'vi' ? 'Cuộc trò chuyện mới' : 'New conversation'}
                  title={lang === 'vi' ? 'Mới' : 'New'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 text-muted-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={lang === 'vi' ? 'Đóng' : 'Close'}
                >
                  <X size={18} />
                </button>
              </div>
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
                    disabled={loading || !activeSessionId}
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim() || !activeSessionId}
                    className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    aria-label={lang === 'vi' ? 'Gửi tin nhắn' : 'Send message'}
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </main>

            {sessions.length > 0 && (
              <div className="shrink-0 border-t border-border bg-white/50 dark:bg-card/50 backdrop-blur-sm max-h-48 overflow-y-auto">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {lang === 'vi' ? 'Lịch sử' : 'History'}
                </div>
                <ul className="px-2 pb-2 space-y-1">
                  {sessions
                    .slice()
                    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                    .map((session) => (
                      <li key={session.id}>
                        <div className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg">
                          <button
                            onClick={() => handleSessionClick(session.id)}
                            className={`flex-1 text-left text-xs truncate transition-colors ${
                              session.id === activeSessionId
                                ? 'text-primary'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                            aria-current={session.id === activeSessionId ? 'true' : 'false'}
                          >
                            {session.title}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteSession(session.id);
                            }}
                            className="p-1 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                            aria-label={lang === 'vi' ? 'Xóa cuộc trò chuyện' : 'Delete conversation'}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
