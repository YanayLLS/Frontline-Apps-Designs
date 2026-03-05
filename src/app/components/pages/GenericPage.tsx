interface GenericPageProps {
  title: string;
  description: string;
}

export function GenericPage({ title, description }: GenericPageProps) {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-foreground mb-1">{title}</h3>
        <p className="text-xs text-muted">{description}</p>
      </div>

      <div className="p-8 bg-background border border-border rounded-[var(--radius)] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-muted" fill="none" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 8H16M8 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-sm text-foreground mb-2" style={{ fontWeight: 'var(--font-weight-bold)' }}>
          {title}
        </p>
        <p className="text-xs text-muted max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
