import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bug, X, RotateCcw, ChevronRight, ChevronDown, Search } from 'lucide-react';

interface PageLink {
  label: string;
  path: string;
  children?: PageLink[];
}

const appPages: PageLink[] = [
  { label: 'Projects', path: '/app/knowledgebase' },
  {
    label: 'Project Knowledge Base',
    path: '/app/project/915-i-series/kb',
    children: [
      { label: 'Folder: Procedures', path: '/app/project/915-i-series/folder/f1' },
      { label: 'Folder: Protocols', path: '/app/project/915-i-series/folder/f2' },
      { label: 'Folder: Training', path: '/app/project/915-i-series/folder/f3' },
    ],
  },
  {
    label: 'Project Knowledge Base 2',
    path: '/app/project/manufacturing-alpha/kb',
  },
  { label: 'Remote Support', path: '/app/remote-support' },
  { label: 'Call Device', path: '/app/call-device' },
  { label: 'Schedule Meeting', path: '/app/schedule-meeting' },
  { label: 'Join Meeting', path: '/app/join-meeting' },
  { label: 'AI Chat', path: '/app/ai-chat' },
  { label: 'Procedure Editor', path: '/app/procedure-editor/p1' },
  { label: '3D Viewer', path: '/app/3d-viewer' },
  { label: 'Immersive Room', path: '/app/immersive' },
  { label: 'Notifications', path: '/app/notifications' },
  { label: 'Search', path: '/app/search' },
];

const webPages: PageLink[] = [
  { label: 'Home', path: '/web/home' },
  { label: 'Notifications', path: '/web/notifications' },
  { label: 'Remote Support', path: '/web/remote-support' },
  { label: 'AI Studio', path: '/web/ai-studio' },
  { label: 'Archive', path: '/web/archive' },
  {
    label: 'Project',
    path: '/web/project/project-phoenix/knowledgebase',
    children: [
      { label: 'Analytics', path: '/web/project/project-phoenix/analytics' },
      { label: 'Activity Log', path: '/web/project/project-phoenix/activity' },
    ],
  },
  {
    label: 'Workspace Settings',
    path: '/web/workspace/members',
    children: [
      { label: 'Groups', path: '/web/workspace/groups' },
      { label: 'Design', path: '/web/workspace/design' },
      { label: 'Remote Support', path: '/web/workspace/remote-support' },
      { label: 'Sub-Workspaces', path: '/web/workspace/subworkspaces' },
      { label: 'Pay Per Click', path: '/web/workspace/pay-per-click' },
      { label: 'SSO', path: '/web/workspace/sso' },
      { label: 'QR Codes', path: '/web/workspace/qr-codes' },
      { label: 'Integrations', path: '/web/workspace/integrations' },
    ],
  },
];

export function DebugMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Shift+F to toggle debug menu with search focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'F') {
        e.preventDefault();
        setIsOpen(prev => {
          const next = !prev;
          if (next) {
            setTimeout(() => searchInputRef.current?.focus(), 50);
          }
          return next;
        });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentPath = location.pathname;
  const isApp = currentPath.startsWith('/app');
  const isWeb = currentPath.startsWith('/web');
  const isXR = currentPath.startsWith('/xr');

  const toggleSection = (path: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const getFirstMatch = (pages: PageLink[], query: string): PageLink | null => {
    if (!query) return null;
    const q = query.toLowerCase();
    for (const page of pages) {
      if (page.label.toLowerCase().includes(q) || page.path.toLowerCase().includes(q)) return page;
      if (page.children) {
        const child = getFirstMatch(page.children, query);
        if (child) return child;
      }
    }
    return null;
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery) {
      const allPages = [...appPages, ...webPages];
      const match = getFirstMatch(allPages, searchQuery);
      if (match) {
        handleNavigate(match.path);
        setSearchQuery('');
      }
    }
  };

  const filterPages = (pages: PageLink[], query: string): PageLink[] => {
    if (!query) return pages;
    const q = query.toLowerCase();
    return pages.reduce<PageLink[]>((acc, page) => {
      const matchesSelf = page.label.toLowerCase().includes(q) || page.path.toLowerCase().includes(q);
      const filteredChildren = page.children ? filterPages(page.children, query) : [];
      if (matchesSelf || filteredChildren.length > 0) {
        acc.push({ ...page, children: filteredChildren.length > 0 ? filteredChildren : page.children });
      }
      return acc;
    }, []);
  };

  const renderPageList = (pages: PageLink[], indent = 0) => {
    return pages.map((page) => {
      const isActive = currentPath === page.path;
      const isExpanded = expandedSections.has(page.path);
      const hasChildren = page.children && page.children.length > 0;

      return (
        <div key={page.path}>
          <div
            className="flex items-center gap-1 cursor-pointer hover:bg-black/5 rounded transition-colors"
            style={{ paddingLeft: `${8 + indent * 12}px`, paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px' }}
          >
            {hasChildren && (
              <button
                onClick={(e) => { e.stopPropagation(); toggleSection(page.path); }}
                className="shrink-0 p-0.5"
              >
                {isExpanded ? (
                  <ChevronDown style={{ width: '12px', height: '12px', color: '#868D9E' }} />
                ) : (
                  <ChevronRight style={{ width: '12px', height: '12px', color: '#868D9E' }} />
                )}
              </button>
            )}
            {!hasChildren && <div style={{ width: '16px' }} />}
            <button
              onClick={() => handleNavigate(page.path)}
              className="flex-1 text-left truncate"
              style={{
                fontSize: '11px',
                color: isActive ? '#2F80ED' : '#36415D',
                fontWeight: isActive ? 'bold' : 'normal',
              }}
            >
              {page.label}
            </button>
          </div>
          {hasChildren && isExpanded && renderPageList(page.children!, indent + 1)}
        </div>
      );
    });
  };

  return createPortal(
    <>
      {/* Debug toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[9999] flex items-center justify-center transition-all hover:scale-110"
        style={{
          bottom: '16px',
          right: '16px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: isOpen ? '#FF1F1F' : '#36415D',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          border: '2px solid rgba(255,255,255,0.2)',
        }}
        title="Debug Menu"
      >
        {isOpen ? (
          <X style={{ width: '16px', height: '16px', color: 'white' }} />
        ) : (
          <Bug style={{ width: '16px', height: '16px', color: 'white' }} />
        )}
      </button>

      {/* Debug panel */}
      {isOpen && (
        <div
          className="fixed z-[9998] flex flex-col overflow-hidden"
          style={{
            bottom: '60px',
            right: '16px',
            width: '260px',
            maxHeight: '70vh',
            backgroundColor: '#FFFFFF',
            border: '1px solid #C2C9DB',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between shrink-0"
            style={{ padding: '10px 12px', borderBottom: '1px solid #E9E9E9' }}
          >
            <div className="flex items-center gap-2">
              <Bug style={{ width: '14px', height: '14px', color: '#2F80ED' }} />
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#36415D' }}>
                Debug Menu
              </span>
            </div>
            <button
              onClick={() => handleNavigate('/')}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-red-50 transition-colors"
              style={{ fontSize: '10px', color: '#FF1F1F', border: '1px solid #FF1F1F33', borderRadius: '6px' }}
              title="Restart — go to product selector"
            >
              <RotateCcw style={{ width: '10px', height: '10px' }} />
              Restart
            </button>
          </div>

          {/* Current route */}
          <div
            className="shrink-0"
            style={{ padding: '6px 12px', borderBottom: '1px solid #E9E9E9', backgroundColor: '#F5F5F5' }}
          >
            <div style={{ fontSize: '9px', color: '#868D9E', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
              Current Route
            </div>
            <div style={{ fontSize: '11px', color: '#2F80ED', fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {currentPath}
            </div>
          </div>

          {/* Platform tabs */}
          <div
            className="flex shrink-0"
            style={{ borderBottom: '1px solid #E9E9E9' }}
          >
            {[
              { label: 'Selector', path: '/', active: !isApp && !isWeb && !isXR },
              { label: 'App', path: '/app/knowledgebase', active: isApp },
              { label: 'Web', path: '/web/home', active: isWeb },
              { label: 'XR', path: '/xr', active: isXR },
            ].map((tab) => (
              <button
                key={tab.label}
                onClick={() => handleNavigate(tab.path)}
                className="flex-1 py-1.5 text-center transition-colors hover:bg-black/5"
                style={{
                  fontSize: '10px',
                  fontWeight: tab.active ? 'bold' : 'normal',
                  color: tab.active ? '#2F80ED' : '#868D9E',
                  borderBottom: tab.active ? '2px solid #2F80ED' : '2px solid transparent',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="shrink-0" style={{ padding: '6px 8px', borderBottom: '1px solid #E9E9E9' }}>
            <div className="flex items-center gap-1.5 rounded" style={{ padding: '4px 6px', border: '1px solid #C2C9DB', backgroundColor: '#F5F5F5' }}>
              <Search style={{ width: '12px', height: '12px', color: '#868D9E', flexShrink: 0 }} />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search pages..."
                className="flex-1 bg-transparent outline-none border-none"
                style={{ fontSize: '11px', color: '#36415D' }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="shrink-0">
                  <X style={{ width: '10px', height: '10px', color: '#868D9E' }} />
                </button>
              )}
            </div>
          </div>

          {/* Page list */}
          <div className="flex-1 overflow-y-auto" style={{ padding: '6px 4px' }}>
            {isApp && (
              <>
                <div style={{ fontSize: '9px', color: '#868D9E', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '4px 8px', marginBottom: '2px' }}>
                  App Pages
                </div>
                {renderPageList(filterPages(appPages, searchQuery))}
              </>
            )}
            {isWeb && (
              <>
                <div style={{ fontSize: '9px', color: '#868D9E', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '4px 8px', marginBottom: '2px' }}>
                  Web Pages
                </div>
                {renderPageList(filterPages(webPages, searchQuery))}
              </>
            )}
            {!isApp && !isWeb && (
              <>
                <div style={{ fontSize: '9px', color: '#868D9E', textTransform: 'uppercase', letterSpacing: '0.5px', padding: '4px 8px', marginBottom: '4px' }}>
                  Platforms
                </div>
                <div
                  className="cursor-pointer hover:bg-black/5 rounded transition-colors"
                  style={{ padding: '4px 8px' }}
                >
                  <button onClick={() => handleNavigate('/app/knowledgebase')} style={{ fontSize: '11px', color: '#36415D' }}>
                    Open App Design
                  </button>
                </div>
                <div
                  className="cursor-pointer hover:bg-black/5 rounded transition-colors"
                  style={{ padding: '4px 8px' }}
                >
                  <button onClick={() => handleNavigate('/web/home')} style={{ fontSize: '11px', color: '#36415D' }}>
                    Open Web Design
                  </button>
                </div>
                <div
                  className="cursor-pointer hover:bg-black/5 rounded transition-colors"
                  style={{ padding: '4px 8px' }}
                >
                  <button onClick={() => handleNavigate('/xr')} style={{ fontSize: '11px', color: '#36415D' }}>
                    Open XR Design
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div
            className="shrink-0 flex items-center justify-center"
            style={{ padding: '6px', borderTop: '1px solid #E9E9E9', backgroundColor: '#F5F5F5' }}
          >
            <span style={{ fontSize: '9px', color: '#868D9E' }}>
              Debug · Mockup Design
            </span>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
