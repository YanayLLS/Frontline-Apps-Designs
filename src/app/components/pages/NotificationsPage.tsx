export function NotificationsPage() {
  const notifications = [
    { id: 1, title: 'New comment on your document', time: '5 minutes ago', unread: true },
    { id: 2, title: 'Project Phoenix milestone completed', time: '1 hour ago', unread: true },
    { id: 3, title: 'You were added to Quantum Leap Initiative', time: '3 hours ago', unread: false },
    { id: 4, title: 'Meeting reminder: Team sync in 30 minutes', time: '5 hours ago', unread: false },
  ];

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
