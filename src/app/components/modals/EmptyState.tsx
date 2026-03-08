import { type LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: { label: string; onClick: () => void };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--secondary)' }}
      >
        <Icon size={24} style={{ color: 'var(--muted)' }} />
      </div>
      <h3
        className="mb-1"
        style={{
          color: 'var(--foreground)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize: 'var(--text-base)',
          fontFamily: 'var(--font-family)',
        }}
      >
        {title}
      </h3>
      <p
        className="text-center max-w-xs"
        style={{
          color: 'var(--muted)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-family)',
        }}
      >
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="mt-4 px-4 py-2 rounded-[var(--radius)] transition-colors hover:opacity-90"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-family)',
            fontWeight: 'var(--font-weight-medium)',
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
