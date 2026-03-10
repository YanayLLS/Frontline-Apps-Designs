import { X } from 'lucide-react';
import { useEffect } from 'react';

interface MediaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    type: string;
    mediaType?: 'image' | 'video' | 'document';
    thumbnail?: string;
    url?: string;
  };
}

export function MediaViewerModal({ isOpen, onClose, item }: MediaViewerModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-viewer-title"
        className="relative max-w-5xl max-h-[90vh] w-full mx-4 bg-card rounded-[var(--radius)] overflow-hidden"
        style={{
          boxShadow: 'var(--elevation-lg)',
          fontFamily: 'var(--font-family)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-4 py-4 border-b border-border"
        >
          <h2
            id="media-viewer-title"
            className="text-foreground"
            style={{
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-bold)',
              fontFamily: 'var(--font-family)'
            }}
          >
            {item.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-[var(--radius)] hover:bg-secondary transition-colors text-muted hover:text-foreground"
            aria-label="Close media viewer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div 
          className="flex items-center justify-center bg-secondary/30 p-6"
          style={{ 
            minHeight: '400px'
          }}
        >
          {item.mediaType === 'video' && item.url ? (
            <video 
              src={item.url} 
              controls 
              className="max-w-full max-h-[70vh] rounded-[var(--radius)]"
              style={{ boxShadow: 'var(--elevation-md)' }}
            />
          ) : item.mediaType === 'image' && (item.url || item.thumbnail) ? (
            <img 
              src={item.url || item.thumbnail} 
              alt={item.name}
              className="max-w-full max-h-[70vh] rounded-[var(--radius)] object-contain"
              style={{ boxShadow: 'var(--elevation-md)' }}
            />
          ) : (
            <div className="text-center">
              <p 
                className="text-muted" 
                style={{ 
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-family)'
                }}
              >
                Preview not available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
