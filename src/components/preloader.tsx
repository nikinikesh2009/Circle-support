'use client';

import { CircleLogo } from './icons';

export default function Preloader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute h-full w-full animate-pulsar rounded-full bg-primary/50"></div>
        <CircleLogo className="h-10 w-10 animate-pulse text-primary-foreground" />
      </div>
    </div>
  );
}
