import React, { createContext, useContext, useState, useCallback } from 'react';
import { X } from 'lucide-react';

interface Toast {
  id: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, action?: { label: string; onClick: () => void }, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((
    message: string,
    action?: { label: string; onClick: () => void },
    duration: number = 5000
  ) => {
    const id = Math.random().toString(36).substring(7);
    const newToast: Toast = { id, message, action, duration };
    
    setToasts(prev => [...prev, newToast]);

    // Auto-dismiss after duration
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="bg-card border border-border rounded-[var(--radius)] flex items-center gap-3 px-4 py-3 min-w-[320px] animate-slide-in"
            style={{
              animation: 'slideIn 0.2s ease-out',
              boxShadow: 'var(--elevation-lg)',
              fontFamily: 'var(--font-family)'
            }}
          >
            <p className="text-foreground flex-1" style={{
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-family)'
            }}>
              {toast.message}
            </p>
            
            {toast.action && (
              <button
                onClick={() => {
                  toast.action?.onClick();
                  dismissToast(toast.id);
                }}
                className="text-primary hover:text-primary/80 transition-colors"
                style={{ 
                  fontWeight: 'var(--font-weight-bold)',
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-family)'
                }}
              >
                {toast.action.label}
              </button>
            )}
            
            <button
              onClick={() => dismissToast(toast.id)}
              className="p-1 hover:bg-secondary rounded-[var(--radius)] transition-colors"
              aria-label="Dismiss"
            >
              <X size={14} className="text-muted" />
            </button>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.2s ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
