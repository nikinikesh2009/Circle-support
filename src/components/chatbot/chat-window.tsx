'use client';

import { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, Loader, Bot, User, X } from 'lucide-react';

import { askAI } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { CircleLogo } from '../icons';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  closeChat: () => void;
}

const quickSuggestions = [
  "What are Circles?",
  "How do I join a Circle?",
  "How are new Circles created?",
];

export default function ChatWindow({ closeChat }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: "Hello! I'm the Circle AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>, question?: string) => {
    e?.preventDefault();
    const userMessage = question || input;
    if (!userMessage.trim()) return;

    setIsLoading(true);
    setInput('');
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), role: 'user', content: userMessage },
    ];
    setMessages(newMessages);

    // Pass only the relevant parts of the history
    const historyForAI = messages.map(({ role, content }) => ({ role, content }));

    const aiResponse = await askAI(userMessage, historyForAI);

    setMessages([
      ...newMessages,
      { id: (Date.now() + 1).toString(), role: 'assistant', content: aiResponse },
    ]);
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b p-4 bg-card rounded-t-xl">
        <div className="flex items-center gap-3">
          <CircleLogo className="h-7 w-7 text-primary" />
          <h3 className="text-lg font-semibold">AI Support</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={closeChat} aria-label="Close chat">
          <X className="h-5 w-5" />
        </Button>
      </header>
      
      <ScrollArea className="flex-1" ref={scrollAreaRef}>
        <div className="p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[80%] rounded-xl px-4 py-2.5 text-sm',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                )}
              >
                {message.content}
              </div>
               {message.role === 'user' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
               <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              <div className="bg-muted rounded-xl px-4 py-3 flex items-center">
                <Loader className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {messages.length <= 1 && (
        <div className="p-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">Or try a quick suggestion:</p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map(q => (
              <Button key={q} variant="outline" size="sm" onClick={() => handleSubmit(undefined, q)}>{q}</Button>
            ))}
          </div>
        </div>
      )}

      <div className="border-t p-4 bg-card rounded-b-xl">
        <form onSubmit={handleSubmit} className="relative">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask a question..."
            className="pr-12"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
            disabled={isLoading || !input.trim()}
          >
            <CornerDownLeft className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
