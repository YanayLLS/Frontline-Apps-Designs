import { useNavigate } from 'react-router-dom';
import { Search, Phone, Video, MessageSquare, Plus, ChevronDown, Users, PhoneCall, Calendar, MoreVertical, Clock, X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  { id: '1', name: 'Luy Robin', role: 'Field Engineer', initials: 'LR', online: true, color: '#2F80ED' },
  { id: '2', name: 'David Amrosa', role: 'Service Support Expert', initials: 'DA', online: true, color: '#8404B3' },
  { id: '3', name: 'Nika Jerrardo', role: 'Instructor', initials: 'NJ', online: false, color: '#11E874' },
  { id: '4', name: 'Jared Sunn', role: 'Operator', initials: 'JS', online: true, color: '#FF6B35' },
  { id: '5', name: 'Sarah Chen', role: 'Admin', initials: 'SC', online: false, color: '#E91E63' },
  { id: '6', name: 'Marcus Williams', role: 'Field Engineer', initials: 'MW', online: true, color: '#00BCD4' },
  { id: '7', name: 'Elena Rodriguez', role: 'Support Manager', initials: 'ER', online: false, color: '#FF9800' },
  { id: '8', name: 'Tom Anderson', role: 'Operator', initials: 'TA', online: true, color: '#9C27B0' },
  { id: '9', name: 'Lisa Park', role: 'Content Creator', initials: 'LP', online: false, color: '#4CAF50' },
  { id: '10', name: 'James Kim', role: 'Service Support Expert', initials: 'JK', online: true, color: '#F44336' },
];

interface Meeting {
  id: string;
  title: string;
  time: string;
  date: string;
  participants: string[];
  status: 'upcoming' | 'past';
}

const mockMeetings: Meeting[] = [
  { id: 'm1', title: 'Maintenance Review', time: '10:00 AM', date: 'Today', participants: ['LR', 'DA'], status: 'upcoming' },
  { id: 'm2', title: 'Field Support Briefing', time: '2:30 PM', date: 'Today', participants: ['NJ', 'JS', 'SC'], status: 'upcoming' },
  { id: 'm3', title: 'Equipment Troubleshooting', time: '9:00 AM', date: 'Tomorrow', participants: ['MW', 'TA'], status: 'upcoming' },
];

const mockRecentCalls = [
  { id: 'r1', title: 'Quick Support Call', time: '4:15 PM', date: 'Yesterday', duration: '12 min', participants: ['LR'] },
  { id: 'r2', title: 'Team Standup', time: '9:00 AM', date: 'Yesterday', duration: '25 min', participants: ['DA', 'NJ', 'JS'] },
  { id: 'r3', title: 'Device Diagnostics', time: '3:30 PM', date: '2 days ago', duration: '8 min', participants: ['MW'] },
];

const mobileActions = [
  { id: 'start', label: 'Start meeting', icon: Video, color: '#2F80ED', action: 'start' },
  { id: 'join', label: 'Join meeting', icon: Users, color: '#2F80ED', action: 'join' },
  { id: 'call', label: 'Call device', icon: Phone, color: '#2F80ED', action: 'call-device' },
  { id: 'schedule', label: 'Schedule meeting', icon: Calendar, color: '#2F80ED', action: 'schedule' },
];

export function AppRemoteSupportPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'agenda' | 'recent'>('agenda');
  const [showNewSessionMenu, setShowNewSessionMenu] = useState(false);
  const [showCallDeviceModal, setShowCallDeviceModal] = useState(false);
  const [showJoinMeetingModal, setShowJoinMeetingModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [meetingCode, setMeetingCode] = useState('');
  const [meetingPassword, setMeetingPassword] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [scheduledConfirm, setScheduledConfirm] = useState(false);

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyMeetingId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleStartMeeting = () => {
    setShowNewSessionMenu(false);
    // In a real app this would start a video call
    alert('Starting instant meeting...');
  };

  const handleScheduleMeeting = () => {
    if (meetingTitle && meetingDate && meetingTime) {
      setScheduledConfirm(true);
      setTimeout(() => {
        setShowScheduleModal(false);
        setScheduledConfirm(false);
        setMeetingTitle('');
        setMeetingDate('');
        setMeetingTime('');
      }, 1500);
    }
  };

  const handleCallDevice = () => {
    if (deviceId.trim()) {
      setShowCallDeviceModal(false);
      alert(`Calling device: ${deviceId}`);
      setDeviceId('');
    }
  };

  const handleJoinMeeting = () => {
    if (meetingCode.trim()) {
      setShowJoinMeetingModal(false);
      alert(`Joining meeting: ${meetingCode}`);
      setMeetingCode('');
      setMeetingPassword('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* ===== MOBILE VIEW (below lg): 4 action buttons ===== */}
      <div className="lg:hidden flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="p-4 sm:p-6 border-b border-border bg-card">
          <h2 className="text-primary" style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-weight-bold)' }}>
            Remote Support
          </h2>
          <p className="text-sm text-muted mt-0.5">
            Connect, troubleshoot, and collaborate remotely.
          </p>
        </div>

        {/* 4 action buttons grid */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="grid grid-cols-2 gap-6 max-w-xs w-full mb-8">
            {mobileActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    if (action.action === 'start') handleStartMeeting();
                    else if (action.action === 'join') setShowJoinMeetingModal(true);
                    else if (action.action === 'call-device') setShowCallDeviceModal(true);
                    else if (action.action === 'schedule') setShowScheduleModal(true);
                  }}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="size-20 rounded-full flex items-center justify-center text-white shadow-elevation-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: action.color }}
                  >
                    <Icon className="size-8" />
                  </div>
                  <span className="text-sm text-foreground text-center" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP VIEW (lg+): meetings + contact actions ===== */}
      <div className="hidden lg:flex flex-col h-full">
        {/* Header with tabs and actions */}
        <div className="bg-card border-b border-border shrink-0">
          <div className="flex items-center justify-between px-6" style={{ height: '56px' }}>
            {/* Tabs */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('agenda')}
                className={`flex items-center gap-2 pb-0.5 border-b-2 transition-colors ${
                  activeTab === 'agenda' ? 'border-primary text-foreground' : 'border-transparent text-muted hover:text-foreground'
                }`}
              >
                <Calendar className="size-4" />
                <span style={{ fontSize: '14px', fontWeight: activeTab === 'agenda' ? 'var(--font-weight-bold)' : 'normal' }}>
                  Agenda
                </span>
              </button>
              <button
                onClick={() => setActiveTab('recent')}
                className={`flex items-center gap-2 pb-0.5 border-b-2 transition-colors ${
                  activeTab === 'recent' ? 'border-primary text-foreground' : 'border-transparent text-muted hover:text-foreground'
                }`}
              >
                <Clock className="size-4" />
                <span style={{ fontSize: '14px', fontWeight: activeTab === 'recent' ? 'var(--font-weight-bold)' : 'normal' }}>
                  Recent Calls
                </span>
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCallDeviceModal(true)}
                className="px-3 py-2 bg-card border border-border text-foreground rounded-[var(--radius)] hover:bg-secondary transition-colors flex items-center gap-2 text-sm"
                style={{ fontWeight: 'var(--font-weight-bold)' }}
              >
                <Phone className="size-3.5" />
                Call Device
              </button>
              <button
                onClick={() => setShowJoinMeetingModal(true)}
                className="px-3 py-2 bg-card border border-border text-foreground rounded-[var(--radius)] hover:bg-secondary transition-colors flex items-center gap-2 text-sm"
                style={{ fontWeight: 'var(--font-weight-bold)' }}
              >
                <Video className="size-3.5" />
                Join Meeting
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowNewSessionMenu(!showNewSessionMenu)}
                  className="px-3 py-2 bg-primary text-white rounded-[var(--radius)] hover:opacity-90 transition-opacity flex items-center gap-2 text-sm"
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                >
                  <Plus className="size-3.5" />
                  Create Meeting
                </button>
                {showNewSessionMenu && (
                  <div className="absolute top-full mt-2 right-0 w-56 bg-card rounded-[var(--radius)] shadow-elevation-lg border border-border z-10 py-1">
                    <button
                      onClick={handleStartMeeting}
                      className="w-full px-4 py-2.5 text-left text-sm text-foreground hover:bg-secondary flex items-center gap-2"
                    >
                      <PhoneCall className="size-4" /> Start instant meeting
                    </button>
                    <button
                      onClick={() => { setShowScheduleModal(true); setShowNewSessionMenu(false); }}
                      className="w-full px-4 py-2.5 text-left text-sm text-foreground hover:bg-secondary flex items-center gap-2"
                    >
                      <Calendar className="size-4" /> Schedule for later
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'agenda' ? (
            /* ---- AGENDA TAB ---- */
            <div className="p-6">
              {mockMeetings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-muted">
                  <Calendar className="size-12 mb-4 opacity-30" />
                  <p className="text-sm">No upcoming meetings</p>
                  <button
                    onClick={() => setShowScheduleModal(true)}
                    className="mt-3 text-sm text-primary hover:underline"
                  >
                    Schedule a meeting
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {mockMeetings.map((meeting) => (
                    <div
                      key={meeting.id}
                      className="bg-card rounded-[var(--radius)] border border-border p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 style={{ fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>
                            {meeting.title}
                          </h4>
                          <p style={{ fontSize: '12px', color: '#7F7F7F', marginTop: '2px' }}>
                            {meeting.date} at {meeting.time}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyMeetingId(meeting.id)}
                            className="p-1.5 text-muted hover:text-foreground hover:bg-secondary rounded transition-colors"
                            title="Copy meeting ID"
                          >
                            {copiedId === meeting.id ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
                          </button>
                          <button
                            className="px-3 py-1.5 bg-primary text-white rounded-[var(--radius-button)] hover:opacity-90 transition-opacity text-xs"
                            style={{ fontWeight: 'var(--font-weight-bold)' }}
                          >
                            Join
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {meeting.participants.map((p, i) => (
                          <div
                            key={i}
                            className="size-6 rounded-full flex items-center justify-center text-white"
                            style={{ fontSize: '8px', fontWeight: 'bold', backgroundColor: contacts[i % contacts.length]?.color || '#2F80ED', marginLeft: i > 0 ? '-4px' : '0' }}
                          >
                            {p}
                          </div>
                        ))}
                        <span style={{ fontSize: '11px', color: '#7F7F7F', marginLeft: '6px' }}>
                          {meeting.participants.length} participant{meeting.participants.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* ---- RECENT CALLS TAB ---- */
            <div className="p-6">
              {mockRecentCalls.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-muted">
                  <Clock className="size-12 mb-4 opacity-30" />
                  <p className="text-sm">No recent calls</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {mockRecentCalls.map((call) => (
                    <div
                      key={call.id}
                      className="bg-card rounded-[var(--radius)] border border-border p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 style={{ fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>
                            {call.title}
                          </h4>
                          <p style={{ fontSize: '12px', color: '#7F7F7F', marginTop: '2px' }}>
                            {call.date} at {call.time} · {call.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {call.participants.map((p, i) => (
                            <div
                              key={i}
                              className="size-6 rounded-full flex items-center justify-center text-white"
                              style={{ fontSize: '8px', fontWeight: 'bold', backgroundColor: contacts[i % contacts.length]?.color || '#2F80ED', marginLeft: i > 0 ? '-4px' : '0' }}
                            >
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ===== CALL DEVICE MODAL ===== */}
      {showCallDeviceModal && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setShowCallDeviceModal(false)} />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <div
              className="pointer-events-auto bg-card rounded-[var(--radius)] shadow-elevation-lg border border-border"
              style={{ width: '400px', maxWidth: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 style={{ fontSize: '16px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>Call Device</h3>
                <button onClick={() => setShowCallDeviceModal(false)} className="p-1 hover:bg-secondary rounded transition-colors">
                  <X className="size-4" style={{ color: '#36415D' }} />
                </button>
              </div>
              <div className="p-4">
                <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                  Device ID
                </label>
                <input
                  type="text"
                  value={deviceId}
                  onChange={(e) => setDeviceId(e.target.value)}
                  placeholder="Enter device ID..."
                  className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none text-foreground placeholder:text-muted focus:border-primary"
                  style={{ borderColor: '#C2C9DB' }}
                />
                <p style={{ fontSize: '11px', color: '#7F7F7F', marginTop: '6px' }}>
                  Enter the ID of the device you want to call.
                </p>
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <button
                  onClick={() => setShowCallDeviceModal(false)}
                  className="px-4 py-2 text-sm text-foreground bg-secondary rounded-[var(--radius-button)] hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCallDevice}
                  className="px-4 py-2 text-sm text-white bg-primary rounded-[var(--radius-button)] hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                >
                  <Phone className="size-3.5" />
                  Call
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== JOIN MEETING MODAL ===== */}
      {showJoinMeetingModal && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setShowJoinMeetingModal(false)} />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <div
              className="pointer-events-auto bg-card rounded-[var(--radius)] shadow-elevation-lg border border-border"
              style={{ width: '400px', maxWidth: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 style={{ fontSize: '16px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>Join Meeting</h3>
                <button onClick={() => setShowJoinMeetingModal(false)} className="p-1 hover:bg-secondary rounded transition-colors">
                  <X className="size-4" style={{ color: '#36415D' }} />
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                    Meeting Code
                  </label>
                  <input
                    type="text"
                    value={meetingCode}
                    onChange={(e) => setMeetingCode(e.target.value)}
                    placeholder="Enter meeting code..."
                    className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none text-foreground placeholder:text-muted focus:border-primary"
                    style={{ borderColor: '#C2C9DB' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                    Password (optional)
                  </label>
                  <input
                    type="password"
                    value={meetingPassword}
                    onChange={(e) => setMeetingPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none text-foreground placeholder:text-muted focus:border-primary"
                    style={{ borderColor: '#C2C9DB' }}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-border">
                <button
                  onClick={() => setShowJoinMeetingModal(false)}
                  className="px-4 py-2 text-sm text-foreground bg-secondary rounded-[var(--radius-button)] hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleJoinMeeting}
                  className="px-4 py-2 text-sm text-white bg-primary rounded-[var(--radius-button)] hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                >
                  <Video className="size-3.5" />
                  Join
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== SCHEDULE MEETING MODAL ===== */}
      {showScheduleModal && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setShowScheduleModal(false)} />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <div
              className="pointer-events-auto bg-card rounded-[var(--radius)] shadow-elevation-lg border border-border"
              style={{ width: '440px', maxWidth: '100%' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 style={{ fontSize: '16px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>Schedule Meeting</h3>
                <button onClick={() => setShowScheduleModal(false)} className="p-1 hover:bg-secondary rounded transition-colors">
                  <X className="size-4" style={{ color: '#36415D' }} />
                </button>
              </div>
              {scheduledConfirm ? (
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <Check className="size-6 text-accent" />
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>
                    Meeting scheduled!
                  </p>
                  <p style={{ fontSize: '12px', color: '#7F7F7F', marginTop: '4px' }}>
                    Invitations will be sent to participants.
                  </p>
                </div>
              ) : (
                <>
                  <div className="p-4 space-y-4">
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                        Meeting Title
                      </label>
                      <input
                        type="text"
                        value={meetingTitle}
                        onChange={(e) => setMeetingTitle(e.target.value)}
                        placeholder="Enter meeting title..."
                        className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none text-foreground placeholder:text-muted focus:border-primary"
                        style={{ borderColor: '#C2C9DB' }}
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                          Date
                        </label>
                        <input
                          type="date"
                          value={meetingDate}
                          onChange={(e) => setMeetingDate(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none text-foreground focus:border-primary"
                          style={{ borderColor: '#C2C9DB' }}
                        />
                      </div>
                      <div className="flex-1">
                        <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                          Time
                        </label>
                        <input
                          type="time"
                          value={meetingTime}
                          onChange={(e) => setMeetingTime(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none text-foreground focus:border-primary"
                          style={{ borderColor: '#C2C9DB' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', display: 'block', marginBottom: '6px' }}>
                        Invite People
                      </label>
                      <div className="flex flex-wrap gap-1.5 p-2 rounded-lg border" style={{ borderColor: '#C2C9DB', minHeight: '40px' }}>
                        <input
                          type="text"
                          placeholder="Search contacts..."
                          className="flex-1 min-w-[120px] text-sm border-none outline-none text-foreground placeholder:text-muted"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 p-4 border-t border-border">
                    <button
                      onClick={() => setShowScheduleModal(false)}
                      className="px-4 py-2 text-sm text-foreground bg-secondary rounded-[var(--radius-button)] hover:bg-secondary/80 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleScheduleMeeting}
                      className="px-4 py-2 text-sm text-white bg-primary rounded-[var(--radius-button)] hover:opacity-90 transition-opacity flex items-center gap-2"
                      style={{ fontWeight: 'var(--font-weight-bold)' }}
                    >
                      <Calendar className="size-3.5" />
                      Schedule
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
