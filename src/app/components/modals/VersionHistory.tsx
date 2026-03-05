import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, MoreHorizontal, RotateCcw, Eye, FileText } from 'lucide-react';

interface Version {
  version: string;
  publishDate: string;
  publishedBy: string;
  publishedByInitials: string;
  publishedByColor: string;
}

interface VersionHistoryProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
  versions: Version[];
}

export function VersionHistory({
  isExpanded,
  onToggleExpand,
  versions,
}: VersionHistoryProps) {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRollback = (index: number) => {
    console.log('Rollback to version:', versions[index].version);
    setActiveMenu(null);
  };

  const handlePreview = (index: number) => {
    console.log('Preview version:', versions[index].version);
    setActiveMenu(null);
  };

  const handleViewChanges = (index: number) => {
    console.log('View changes for version:', versions[index].version);
    setActiveMenu(null);
  };

  return (
    <div className="bg-card border border-border rounded-[var(--radius)]">
      {/* Header */}
      <button
        onClick={onToggleExpand}
        className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-secondary/50 transition-colors"
      >
        {isExpanded ? (
          <ChevronDown size={12} className="text-muted" />
        ) : (
          <ChevronRight size={12} className="text-muted" />
        )}
        <span className="text-sm text-foreground" style={{ fontWeight: 'var(--font-weight-bold)' }}>
          Version History
        </span>
      </button>

      {/* Content */}
      {isExpanded && (
        <div className="px-3 pb-3">
          {/* Column Headers */}
          <div className="flex items-center gap-1.5 px-1.5 pb-2 text-xs text-muted">
            <div className="w-14 shrink-0">Version</div>
            <div className="flex-1 min-w-0">Publish Date</div>
            <div className="w-12 shrink-0">By</div>
            <div className="w-4 shrink-0" /> {/* For menu button */}
          </div>

          {/* Version List */}
          <div className="space-y-0.5">
            {versions.map((version, index) => (
              <div
                key={index}
                className="group flex items-center gap-1.5 px-1.5 py-1 hover:bg-secondary/50 rounded-[var(--radius)] transition-colors"
              >
                <div className="w-14 shrink-0 text-xs text-foreground">
                  {version.version}
                </div>
                <div className="flex-1 min-w-0 text-xs text-foreground truncate">
                  {version.publishDate}
                </div>
                <div className="w-12 shrink-0 flex items-center">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white"
                    style={{ 
                      backgroundColor: version.publishedByColor,
                      fontWeight: 'var(--font-weight-bold)' 
                    }}
                  >
                    {version.publishedByInitials}
                  </div>
                </div>
                <div className="w-4 shrink-0 relative" ref={activeMenu === index ? menuRef : null}>
                  <button
                    onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                    className="opacity-0 group-hover:opacity-100 hover:bg-secondary p-0.5 rounded transition-all"
                  >
                    <MoreHorizontal size={14} className="text-muted -rotate-90" />
                  </button>

                  {/* Context Menu */}
                  {activeMenu === index && (
                    <div
                      className="absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-[var(--radius)] shadow-lg z-20 overflow-hidden"
                      style={{ boxShadow: 'var(--elevation-sm)' }}
                    >
                      <button
                        onClick={() => handleRollback(index)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        <RotateCcw size={16} className="text-muted" />
                        <span>Rollback to this version</span>
                      </button>
                      <button
                        onClick={() => handlePreview(index)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        <Eye size={16} className="text-muted" />
                        <span>Preview</span>
                      </button>
                      <button
                        onClick={() => handleViewChanges(index)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-colors"
                      >
                        <FileText size={16} className="text-muted" />
                        <span>View changes</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
