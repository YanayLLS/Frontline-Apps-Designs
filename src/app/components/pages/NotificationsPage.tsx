import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

export const webNotifications = [
  { id: 1, title: 'New comment on your document', time: '5 minutes ago', unread: true },
  { id: 2, title: 'Project Phoenix milestone completed', time: '1 hour ago', unread: true },
  { id: 3, title: 'You were added to Quantum Leap Initiative', time: '3 hours ago', unread: false },
  { id: 4, title: 'Meeting reminder: Team sync in 30 minutes', time: '5 hours ago', unread: false },
];

function NotificationsSkeleton() {
  return (
    <div className="p-4">
      <div className="mb-4 animate-pulse">
        <div className="h-5 bg-muted/30 rounded w-48 mb-2" />
        <div className="h-3 bg-muted/30 rounded w-64" />
      </div>
      <div className="space-y-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-3 rounded-[var(--radius)] border border-border bg-background animate-pulse">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-muted/30 mt-1 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-muted/30 rounded w-3/4" />
                <div className="h-3 bg-muted/30 rounded w-1/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16">
      <div className="p-5 bg-secondary/50 rounded-full mb-4">
        <Bell size={36} className="text-muted" />
      </div>
      <h3 className="text-base text-foreground mb-1" style={{ fontWeight: 'var(--font-weight-bold)' }}>
        No notifications yet
      </h3>
      <p className="text-sm text-muted text-center max-w-xs">
        When there's new activity on your projects, you'll see it here
      </p>
    </div>
  );
}

export function NotificationsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const notifications = webNotifications;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NotificationsSkeleton />;
  }

  if (notifications.length === 0) {
    return <NotificationsEmptyState />;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-foreground mb-1">Recent Notifications</h3>
        <p className="text-xs text-muted">Stay updated with your latest activity</p>
      </div>

      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-[var(--radius)] border border-border ${
              notification.unread ? 'bg-secondary/20' : 'bg-background'
            } hover:bg-secondary/30 transition-colors cursor-pointer`}
          >
            <div className="flex items-start gap-3">
              {notification.unread && (
                <div className="w-2 h-2 rounded-full bg-primary mt-1 shrink-0" />
              )}
              <div className="flex-1">
                <p className="text-sm text-foreground mb-1">{notification.title}</p>
                <p className="text-xs text-muted">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
