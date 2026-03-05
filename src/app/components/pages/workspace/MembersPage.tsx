import { useState } from 'react';
import { Search, Plus, Mail, MoreVertical, Crown, Shield, User as UserIcon, Trash2 } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Member';
  avatar?: string;
  lastActive: string;
  status: 'active' | 'invited';
}

const mockMembers: Member[] = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Owner', lastActive: 'Online now', status: 'active' },
  { id: '2', name: 'Michael Chen', email: 'michael.c@company.com', role: 'Admin', lastActive: '2 hours ago', status: 'active' },
  { id: '3', name: 'Emily Rodriguez', email: 'emily.r@company.com', role: 'Member', lastActive: '1 day ago', status: 'active' },
  { id: '4', name: 'David Kim', email: 'david.k@company.com', role: 'Member', lastActive: '3 days ago', status: 'active' },
  { id: '5', name: 'Lisa Anderson', email: 'lisa.a@company.com', role: 'Admin', lastActive: 'Online now', status: 'active' },
  { id: '6', name: 'james.wilson@company.com', email: 'james.wilson@company.com', role: 'Member', lastActive: 'Invited', status: 'invited' },
];

export function MembersPage() {
  const [members] = useState<Member[]>(mockMembers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<Set<string>>(new Set());
  const [showInviteModal, setShowInviteModal] = useState(false);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    if (role === 'Owner') return <Crown size={14} className="text-accent" />;
    if (role === 'Admin') return <Shield size={14} className="text-primary" />;
    return <UserIcon size={14} className="text-muted" />;
  };

  const getRoleColor = (role: string) => {
    if (role === 'Owner') return 'text-accent bg-accent/10';
    if (role === 'Admin') return 'text-primary bg-primary/10';
    return 'text-muted bg-muted/10';
  };

  return (
    <div className="flex flex-col h-full bg-background" style={{ fontFamily: 'var(--font-family)' }}>
      {/* Header */}
      <div className="border-b border-border bg-card px-6 py-4">
        <h1 className="text-foreground mb-1" style={{
          fontSize: 'var(--text-h2)',
          fontWeight: 'var(--font-weight-bold)',
          fontFamily: 'var(--font-family)'
        }}>
          Members
        </h1>
        <p className="text-muted" style={{
          fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-family)'
        }}>
          Manage workspace members and their permissions
        </p>
      </div>

      {/* Actions Bar */}
      <div className="border-b border-border bg-card px-6 py-3 flex items-center gap-3">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground placeholder:text-muted"
            style={{
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-family)'
            }}
          />
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius)] hover:bg-primary/90 transition-colors"
          style={{
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-bold)',
            fontFamily: 'var(--font-family)'
          }}
        >
          <Mail size={16} />
          <span>Invite Members</span>
        </button>
      </div>

      {/* Members List */}
      <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
        <div className="space-y-2">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card border border-border rounded-[var(--radius)] p-4 hover:border-primary/50 transition-colors"
              style={{ boxShadow: 'var(--elevation-sm)' }}
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground" style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontFamily: 'var(--font-family)'
                }}>
                  {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-foreground" style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontFamily: 'var(--font-family)'
                    }}>
                      {member.name}
                    </h3>
                    {member.status === 'invited' && (
                      <span className="px-2 py-0.5 bg-muted/20 text-muted rounded-[var(--radius)]" style={{
                        fontSize: 'var(--text-sm)',
                        fontFamily: 'var(--font-family)'
                      }}>
                        Pending
                      </span>
                    )}
                  </div>
                  <p className="text-muted" style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-family)'
                  }}>
                    {member.email}
                  </p>
                </div>

                {/* Role */}
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius)] ${getRoleColor(member.role)}`}>
                    {getRoleIcon(member.role)}
                    <span style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontFamily: 'var(--font-family)'
                    }}>
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Last Active */}
                <div className="w-32 text-right">
                  <p className="text-muted" style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-family)'
                  }}>
                    {member.lastActive}
                  </p>
                </div>

                {/* Actions */}
                <button className="p-2 hover:bg-secondary rounded-[var(--radius)] transition-colors">
                  <MoreVertical size={18} className="text-muted" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50" onClick={() => setShowInviteModal(false)}>
          <div className="bg-card border border-border rounded-[var(--radius)] w-full max-w-md m-4" style={{ boxShadow: 'var(--elevation-lg)' }} onClick={(e) => e.stopPropagation()}>
            <div className="border-b border-border px-6 py-4">
              <h2 className="text-foreground" style={{
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)',
                fontFamily: 'var(--font-family)'
              }}>
                Invite Members
              </h2>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-foreground mb-2" style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontFamily: 'var(--font-family)'
                }}>
                  Email addresses
                </label>
                <textarea
                  placeholder="Enter email addresses separated by commas..."
                  rows={4}
                  className="w-full px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground placeholder:text-muted resize-none"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-family)'
                  }}
                />
              </div>
              <div>
                <label className="block text-foreground mb-2" style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontFamily: 'var(--font-family)'
                }}>
                  Role
                </label>
                <select className="w-full px-3 py-2 bg-input-background border border-border rounded-[var(--radius)] text-foreground" style={{
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-family)'
                }}>
                  <option>Member</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            <div className="border-t border-border px-6 py-4 flex items-center justify-end gap-3">
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 text-foreground hover:bg-secondary rounded-[var(--radius)] transition-colors"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontFamily: 'var(--font-family)'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowInviteModal(false)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius)] hover:bg-primary/90 transition-colors"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontFamily: 'var(--font-family)'
                }}
              >
                Send Invites
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
