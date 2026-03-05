export enum ContextMenuType {
  CANVAS_ROOT = 'canvas',
  CONNECTION_CREATE = 'connection',
  NODE = 'node',
}

interface ContextMenuProps {
  x: number;
  y: number;
  type: ContextMenuType;
  onClose: () => void;
  onAction: (action: string) => void;
  nodeData?: any;
}

export function ContextMenu({ x, y, type, onClose, onAction, nodeData }: ContextMenuProps) {
  if (type === ContextMenuType.NODE && nodeData) {
    return (
      <div 
        className="fixed z-[100] rounded-lg border shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-w-[320px]"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--elevation-lg)',
          fontFamily: 'var(--font-family)',
        }}
      >
        <div className="py-2">
          <div className="px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
            <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>
              {nodeData.title || 'Node Details'}
            </div>
            {nodeData.description && (
              <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                {nodeData.description}
              </div>
            )}
          </div>

          {/* Media Section */}
          {nodeData.media && nodeData.media.length > 0 && (
            <div className="px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                Attached Media ({nodeData.media.length})
              </div>
              <div className="flex flex-col gap-1.5 max-h-[150px] overflow-y-auto custom-scrollbar">
                {nodeData.media.map((mediaId: string, idx: number) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-2 py-1.5 rounded text-xs border" 
                    style={{ 
                      backgroundColor: 'var(--secondary)', 
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)' 
                    }}
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="flex-1 truncate">{mediaId.split('-').pop() || `Media ${idx + 1}`}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Checklist Section */}
          {nodeData.checklist && nodeData.checklist.length > 0 && (
            <div className="px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                Checklist ({nodeData.checklist.filter((i: any) => i.done).length}/{nodeData.checklist.length})
              </div>
              <div className="flex flex-col gap-1 max-h-[120px] overflow-y-auto custom-scrollbar">
                {nodeData.checklist.map((item: any) => (
                  <div key={item.id} className="flex items-center gap-2 text-xs">
                    <div className={`w-3 h-3 rounded border flex items-center justify-center ${item.done ? 'bg-emerald-500 border-emerald-500' : ''}`} style={{ borderColor: item.done ? '#10b981' : 'var(--border)' }}>
                      {item.done && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    <span style={{ color: item.done ? 'var(--muted)' : 'var(--foreground)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Options Section */}
          {nodeData.options && nodeData.options.length > 0 && (
            <div className="px-4 py-2 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                Options ({nodeData.options.length})
              </div>
              <div className="flex flex-col gap-1">
                {nodeData.options.map((option: any, idx: number) => (
                  <div key={option.id} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--foreground)' }}>
                    {idx + 1}. {option.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="py-1">
            <button
              onClick={() => onAction('delete')}
              className="w-full text-left px-4 py-2 text-sm transition-colors"
              style={{ color: 'var(--destructive)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Delete Node
            </button>
            <button
              onClick={() => onAction('duplicate')}
              className="w-full text-left px-4 py-2 text-sm transition-colors"
              style={{ color: 'var(--foreground)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Duplicate Node
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed z-[100] rounded-lg border shadow-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--elevation-lg)',
        fontFamily: 'var(--font-family)',
      }}
    >
      <div className="py-1 min-w-[200px]">
        <button
          onClick={() => onAction('create-step')}
          className="w-full text-left px-4 py-2 text-sm transition-colors"
          style={{
            color: 'var(--foreground)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <div className="font-medium">Create Step</div>
          <div className="text-xs" style={{ color: 'var(--muted)' }}>
            Add a new configurable step
          </div>
        </button>
        
        {type === ContextMenuType.CANVAS_ROOT && (
          <>
            <div className="border-t my-1" style={{ borderColor: 'var(--border)' }} />
            <button
              onClick={() => onAction('auto-arrange')}
              className="w-full text-left px-4 py-2 text-sm transition-colors"
              style={{
                color: 'var(--foreground)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div className="font-medium">Auto Arrange</div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>
                Organize nodes automatically
              </div>
            </button>
          </>
        )}
        
        {type === ContextMenuType.CONNECTION_CREATE && (
          <div className="border-t my-1" style={{ borderColor: 'var(--border)' }}>
            <div className="px-4 py-1 text-xs" style={{ color: 'var(--muted)' }}>
              This will be connected automatically
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
