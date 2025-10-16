'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MessageSquare } from 'lucide-react';
import ChatWindow from './chat-window';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            className="h-16 w-16 rounded-full shadow-lg"
            aria-label="Open support chat"
          >
            <MessageSquare className="h-8 w-8" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className="w-[calc(100vw-32px)] sm:w-96 h-[60vh] p-0 rounded-xl shadow-2xl mr-2 mb-2"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <ChatWindow closeChat={() => setIsOpen(false)} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
