import { createContext, useContext, useState, ReactNode } from 'react';

export interface ActiveCall {
  callId: string;
  meetingTitle: string;
  startTime: Date;
  participantCount: number;
  isAudioEnabled: boolean;
  isVideoEnabled: boolean;
}

interface ActiveCallContextType {
  activeCall: ActiveCall | null;
  setActiveCall: (call: ActiveCall | null) => void;
  updateCallState: (updates: Partial<ActiveCall>) => void;
  isCallMinimized: boolean;
  setIsCallMinimized: (minimized: boolean) => void;
}

const ActiveCallContext = createContext<ActiveCallContextType | undefined>(undefined);

export function ActiveCallProvider({ children }: { children: ReactNode }) {
  const [activeCall, setActiveCall] = useState<ActiveCall | null>(null);
  const [isCallMinimized, setIsCallMinimized] = useState(false);

  const updateCallState = (updates: Partial<ActiveCall>) => {
    setActiveCall(prev => prev ? { ...prev, ...updates } : null);
  };

  return (
    <ActiveCallContext.Provider value={{ 
      activeCall, 
      setActiveCall, 
      updateCallState,
      isCallMinimized,
      setIsCallMinimized
    }}>
      {children}
    </ActiveCallContext.Provider>
  );
}

export function useActiveCall() {
  const context = useContext(ActiveCallContext);
  if (context === undefined) {
    throw new Error('useActiveCall must be used within an ActiveCallProvider');
  }
  return context;
}
