import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, ArrowLeft, FolderOpen, FileText, Box, Film, ChevronRight, Clock, MoreVertical, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface SearchResult {
  id: string;
  name: string;
  type: 'folder' | 'procedure' | 'digital-twin' | 'media';
  project: string;
  path?: string;
  description?: string;
  date: string;
}

interface HistoryItem {
  id: string;
  text: string;
  type: 'folder' | 'procedure' | 'project';
}

const searchHistory: HistoryItem[] = [
  { id: 'h1', text: 'Daily', type: 'folder' },
  { id: 'h2', text: 'Cylinder pressure check', type: 'procedure' },
  { id: 'h3', text: '915 iS', type: 'project' },
  { id: 'h4', text: '914 series', type: 'project' },
];

const allResults: SearchResult[] = [
  { id: '1', name: 'Maintenance Procedures', type: 'folder', project: '915 i Series', path: '915 i Series / Documentation', date: '2 days ago' },
  { id: '2', name: 'Routine Maintenance for High-Volume Printing', type: 'procedure', project: '915 i Series', path: '915 i Series / Procedures / Maintenance', date: '4 hours ago' },
  { id: '3', name: 'Engine Calibration Procedure', type: 'procedure', project: 'Manufacturing Alpha', path: 'Manufacturing Alpha / Procedures', date: '1 day ago' },
  { id: '4', name: 'Main Engine Assembly', type: 'digital-twin', project: '915 i Series', path: '915 i Series / Digital Twins', date: '1 week ago' },
  { id: '5', name: 'Installation Tutorial Video', type: 'media', project: '915 i Series', path: '915 i Series / Media / Tutorials', date: '2 days ago' },
  { id: '6', name: 'Safety Protocols', type: 'folder', project: '915 i Series', path: '915 i Series / Documentation', date: '1 week ago' },
  { id: '7', name: 'Belt Replacement Guide', type: 'procedure', project: '915 i Series', path: '915 i Series / Procedures / Repair', date: '3 days ago' },
  { id: '8', name: 'CNC Machine X500 Setup', type: 'procedure', project: 'Manufacturing Alpha', path: 'Manufacturing Alpha / Procedures / Setup', date: '5 hours ago' },
  { id: '9', name: 'Assembly Line Robot AR-2000', type: 'digital-twin', project: 'Manufacturing Alpha', path: 'Manufacturing Alpha / Digital Twins', date: '2 days ago' },
  { id: '10', name: 'Wiring Diagram', type: 'media', project: '915 i Series', path: '915 i Series / Media / Diagrams', date: '1 week ago' },
  { id: '11', name: 'Hydraulic System', type: 'digital-twin', project: '915 i Series', path: '915 i Series / Digital Twins', date: '5 days ago' },
  { id: '12', name: 'Training Materials', type: 'folder', project: '915 i Series', path: '915 i Series / Documentation', date: '3 days ago' },
];

const typeIcons: Record<string, typeof FolderOpen> = {
  folder: FolderOpen,
  procedure: FileText,
  'digital-twin': Box,
  media: Film,
  project: FolderOpen,
};

const typeColors: Record<string, string> = {
  folder: '#2F80ED',
  procedure: '#36415D',
  'digital-twin': '#8404B3',
  media: '#11E874',
  project: '#2F80ED',
};

type FilterKey = 'all' | 'folder' | 'procedure' | 'digital-twin' | 'media';

const filterLabels: Record<FilterKey, string> = {
  all: 'All',
  folder: 'Projects',
  procedure: 'Digital twin models',
  'digital-twin': 'Interactive flows & media',
  media: 'Media',
};

type SearchState = 'empty' | 'typing' | 'results';

export function AppSearchPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [searchState, setSearchState] = useState<SearchState>(initialQuery ? 'results' : 'empty');
  const [contextMenu, setContextMenu] = useState<{ id: string; x: number; y: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close context menu on outside click
  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const filteredResults = allResults.filter(r => {
    const matchesQuery = !query || r.name.toLowerCase().includes(query.toLowerCase()) || r.project.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilter === 'all' || r.type === activeFilter;
    return matchesQuery && matchesFilter;
  });

  // Group by type for display
  const groupLabels: Record<string, string> = {
    folder: 'Projects',
    procedure: 'Digital twin models',
    'digital-twin': 'Interactive flows & media',
    media: 'Media',
  };

  const grouped = filteredResults.reduce<Record<string, SearchResult[]>>((acc, r) => {
    const group = groupLabels[r.type] || r.type;
    if (!acc[group]) acc[group] = [];
    acc[group].push(r);
    return acc;
  }, {});

  // Get counts per filter
  const allMatchingQuery = allResults.filter(r =>
    !query || r.name.toLowerCase().includes(query.toLowerCase()) || r.project.toLowerCase().includes(query.toLowerCase())
  );
  const filterCounts: Record<FilterKey, number> = {
    all: allMatchingQuery.length,
    folder: allMatchingQuery.filter(r => r.type === 'folder').length,
    procedure: allMatchingQuery.filter(r => r.type === 'procedure').length,
    'digital-twin': allMatchingQuery.filter(r => r.type === 'digital-twin').length,
    media: allMatchingQuery.filter(r => r.type === 'media').length,
  };

  // Autocomplete suggestions
  const autocompleteSuggestions = query
    ? allResults
        .filter(r => r.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5)
    : [];

  const handleInputChange = (value: string) => {
    setQuery(value);
    if (!value) {
      setSearchState('empty');
      setSearchParams({});
    } else {
      setSearchState('typing');
    }
  };

  const handleSubmitSearch = (searchQuery?: string) => {
    const q = searchQuery || query;
    if (!q.trim()) return;
    setQuery(q);
    setSearchParams({ q });
    setSearchState('results');
  };

  const handleHistoryClick = (text: string) => {
    setQuery(text);
    setSearchParams({ q: text });
    setSearchState('results');
  };

  const handleContextMenuClick = (e: React.MouseEvent, resultId: string) => {
    e.stopPropagation();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setContextMenu({ id: resultId, x: rect.right, y: rect.bottom });
  };

  const maxGroupItems = 3;

  return (
    <div className="h-full flex flex-col" ref={containerRef}>
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border bg-card">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 hover:bg-secondary rounded-lg text-foreground transition-colors"
          >
            <ArrowLeft className="size-5" />
          </button>
          <h2 className="text-foreground" style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-bold)' }}>
            {searchState === 'results' ? 'Search Results' : 'Search'}
          </h2>
        </div>

        {/* Search input */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmitSearch();
            }}
            onFocus={() => {
              if (!query) setSearchState('empty');
              else if (searchState !== 'results') setSearchState('typing');
            }}
            className="w-full h-10 pl-10 pr-10 rounded-full text-sm bg-secondary border-none outline-none text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary"
            autoFocus
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setSearchState('empty'); setSearchParams({}); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-muted hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}

          {/* Autocomplete dropdown */}
          {searchState === 'typing' && query && autocompleteSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card rounded-[var(--radius)] shadow-elevation-lg border border-border z-20 py-1 overflow-hidden">
              {autocompleteSuggestions.map((s) => {
                const Icon = typeIcons[s.type];
                const color = typeColors[s.type];
                return (
                  <button
                    key={s.id}
                    onClick={() => { setQuery(s.name); handleSubmitSearch(s.name); }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition-colors text-left"
                  >
                    <Icon className="size-4 shrink-0" style={{ color }} />
                    <span className="text-sm text-foreground truncate">{s.name}</span>
                  </button>
                );
              })}
              <button
                onClick={() => handleSubmitSearch()}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition-colors text-left border-t border-border"
              >
                <Search className="size-4 text-primary shrink-0" />
                <span className="text-sm text-primary">
                  Search for &ldquo;{query}&rdquo;
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Filter chips - only in results state */}
        {searchState === 'results' && (
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {(['all', 'folder', 'procedure', 'digital-twin', 'media'] as FilterKey[]).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors
                  ${activeFilter === f ? 'bg-primary text-white' : 'bg-secondary text-foreground hover:bg-secondary/80'}`}
                style={{ fontWeight: 'var(--font-weight-medium)' }}
              >
                {filterLabels[f]} ({filterCounts[f]})
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {/* Empty/History state */}
        {searchState === 'empty' && (
          <div>
            <p className="text-sm text-muted mb-6">
              Search for projects, Digital twins, interactive flows and more
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="size-4 text-muted" />
              <span className="text-xs text-muted uppercase tracking-wider" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                History
              </span>
            </div>
            <div className="space-y-1">
              {searchHistory.map((item) => {
                const Icon = typeIcons[item.type];
                const color = typeColors[item.type];
                return (
                  <button
                    key={item.id}
                    onClick={() => handleHistoryClick(item.text)}
                    className="w-full flex items-center gap-3 p-3 bg-card rounded-[var(--radius)] hover:shadow-elevation-sm transition-all text-left"
                  >
                    <div
                      className="size-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      <Icon className="size-4" style={{ color }} />
                    </div>
                    <span className="text-sm text-foreground" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Results state */}
        {searchState === 'results' && (
          <>
            {filteredResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-muted">
                <Search className="size-10 mb-2 opacity-30" />
                <p className="text-sm">No results found</p>
              </div>
            ) : (
              Object.entries(grouped).map(([group, items]) => {
                const hasMore = items.length > maxGroupItems;
                const displayItems = hasMore ? items.slice(0, maxGroupItems) : items;
                return (
                  <div key={group} className="mb-6">
                    <h4 className="text-xs text-muted uppercase tracking-wider mb-2" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                      {group} ({items.length})
                    </h4>
                    <div className="space-y-2">
                      {displayItems.map((result) => {
                        const Icon = typeIcons[result.type];
                        const color = typeColors[result.type];
                        return (
                          <div
                            key={result.id}
                            className="flex items-center gap-3 p-3 bg-card rounded-[var(--radius)] cursor-pointer hover:shadow-elevation-sm transition-all group"
                          >
                            <div
                              className="size-10 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${color}15` }}
                            >
                              <Icon className="size-5" style={{ color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm text-foreground truncate" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                                {result.name}
                              </div>
                              <div className="text-xs text-muted truncate">
                                {result.path || result.project}
                              </div>
                              <div className="text-xs text-muted/60 mt-0.5">
                                {result.project} &middot; {result.date}
                              </div>
                            </div>
                            <button
                              onClick={(e) => handleContextMenuClick(e, result.id)}
                              className="p-1.5 text-muted hover:text-foreground hover:bg-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-all shrink-0"
                            >
                              <MoreVertical className="size-4" />
                            </button>
                            <ChevronRight className="size-4 text-muted group-hover:text-foreground transition-colors shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                    {hasMore && (
                      <button className="mt-2 text-sm text-primary hover:text-primary/80 transition-colors" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                        See More
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </>
        )}
      </div>

      {/* Context menu */}
      {contextMenu && (
        <div
          className="fixed z-50 bg-card rounded-[var(--radius)] shadow-elevation-lg border border-border py-1 w-52"
          style={{ top: contextMenu.y, left: Math.min(contextMenu.x, window.innerWidth - 220) }}
        >
          <button
            onClick={() => setContextMenu(null)}
            className="w-full px-4 py-2.5 text-left text-sm text-foreground hover:bg-secondary flex items-center gap-2"
          >
            <FolderOpen className="size-4" /> Open item
          </button>
          <button
            onClick={() => setContextMenu(null)}
            className="w-full px-4 py-2.5 text-left text-sm text-foreground hover:bg-secondary flex items-center gap-2"
          >
            <ChevronRight className="size-4" /> Open item location
          </button>
        </div>
      )}
    </div>
  );
}
