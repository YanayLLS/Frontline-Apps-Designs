import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

const allParticipants = [
  { id: '1', name: 'Luy Robin', role: 'Field Engineer', avatar: 'LR', color: '#2F80ED', added: true },
  { id: '2', name: 'David Amrosa', role: 'Service Support Expert', avatar: 'DA', color: '#8404B3', added: true },
  { id: '3', name: 'Nika Jerrardo', role: 'Instructor', avatar: 'NJ', color: '#11E874', added: true },
  { id: '4', name: 'Jared Sunn', role: 'Operator', avatar: 'JS', color: '#FF6B35', added: false },
  { id: '5', name: 'Sarah Chen', role: 'Admin', avatar: 'SC', color: '#E91E63', added: false },
  { id: '6', name: 'Marcus Williams', role: 'Field Engineer', avatar: 'MW', color: '#00BCD4', added: false },
];

export function AppScheduleMeetingPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('Remote Support Meeting');
  const [startDate, setStartDate] = useState('2026-03-08');
  const [startTime, setStartTime] = useState('10:00');
  const [endDate, setEndDate] = useState('2026-03-08');
  const [endTime, setEndTime] = useState('11:00');
  const [timezone] = useState('Atlantic Standard Time (AST) - UTC +13:37');
  const [participantSearch, setParticipantSearch] = useState('');
  const [participants, setParticipants] = useState(allParticipants);

  const toggleParticipant = (id: string) => {
    setParticipants(prev =>
      prev.map(p => p.id === id ? { ...p, added: !p.added } : p)
    );
  };

  const filteredParticipants = participants.filter(p =>
    p.name.toLowerCase().includes(participantSearch.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border bg-card flex items-center gap-3">
        <button
          onClick={() => navigate('/app/remote-support')}
          className="p-1.5 hover:bg-secondary rounded-lg text-foreground transition-colors"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h3 className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h4)' }}>
          Schedule Remote Support Meeting
        </h3>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="w-full max-w-2xl mx-auto space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm text-foreground mb-1.5" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              Add title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-11 px-4 rounded-lg text-sm bg-card border-2 border-input outline-none text-foreground placeholder:text-muted focus:border-primary transition-colors"
              style={{ fontWeight: 'var(--font-weight-medium)' }}
            />
          </div>

          {/* Date and Time */}
          <div>
            <label className="block text-sm text-foreground mb-1.5" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              Date and Time
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-11 px-3 rounded-lg text-sm bg-card border-2 border-input outline-none text-foreground focus:border-primary transition-colors"
              />
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="h-11 px-3 rounded-lg text-sm bg-card border-2 border-input outline-none text-foreground focus:border-primary transition-colors"
              />
              <span className="text-sm text-muted px-1">to</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="h-11 px-3 rounded-lg text-sm bg-card border-2 border-input outline-none text-foreground focus:border-primary transition-colors"
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="h-11 px-3 rounded-lg text-sm bg-card border-2 border-input outline-none text-foreground focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm text-foreground mb-1.5" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              Timezone
            </label>
            <div className="relative">
              <select
                value={timezone}
                className="w-full h-11 px-4 rounded-lg text-sm bg-card border-2 border-input outline-none text-foreground focus:border-primary transition-colors appearance-none pr-10 cursor-pointer"
              >
                <option>Atlantic Standard Time (AST) - UTC +13:37</option>
                <option>Eastern Standard Time (EST) - UTC -05:00</option>
                <option>Pacific Standard Time (PST) - UTC -08:00</option>
                <option>Central European Time (CET) - UTC +01:00</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
          </div>

          {/* Participants */}
          <div>
            <label className="block text-sm text-foreground mb-1.5" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              Participants
            </label>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
              <input
                type="text"
                placeholder="Search users..."
                value={participantSearch}
                onChange={(e) => setParticipantSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg text-sm bg-secondary border-none outline-none text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="bg-card border border-border rounded-lg divide-y divide-border overflow-hidden">
              {filteredParticipants.map((p) => (
                <div key={p.id} className="flex items-center gap-3 px-4 py-3">
                  <div
                    className="size-9 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                    style={{ backgroundColor: p.color, fontWeight: 'var(--font-weight-bold)' }}
                  >
                    {p.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-foreground truncate" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                      {p.name}
                    </div>
                    <div className="text-xs text-muted truncate">{p.role}</div>
                  </div>
                  <button
                    onClick={() => toggleParticipant(p.id)}
                    className={`text-xs shrink-0 ${p.added ? 'text-destructive hover:text-destructive/80' : 'text-primary hover:text-primary/80'}`}
                    style={{ fontWeight: 'var(--font-weight-medium)' }}
                  >
                    {p.added ? 'Remove from meeting' : '+ Add to meeting'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Share link */}
          <button className="flex items-center gap-1.5 text-sm text-primary hover:underline">
            <LinkIcon className="size-4" />
            Share link
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-6 border-t border-border bg-card flex items-center justify-end gap-3">
        <button
          onClick={() => navigate('/app/remote-support')}
          className="px-6 py-2.5 bg-destructive text-white rounded-[var(--radius-button)] text-sm hover:bg-destructive/90 transition-colors"
          style={{ fontWeight: 'var(--font-weight-semibold)' }}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2.5 bg-primary text-white rounded-[var(--radius-button)] text-sm hover:bg-primary/90 transition-colors"
          style={{ fontWeight: 'var(--font-weight-semibold)' }}
        >
          Schedule Meeting
        </button>
      </div>
    </div>
  );
}
