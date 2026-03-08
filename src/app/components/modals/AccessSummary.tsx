interface AccessSummaryProps {
  projectCount?: number;
  folderCount?: number;
  itemCount?: number;
}

export function AccessSummary({ projectCount, folderCount, itemCount }: AccessSummaryProps) {
  const parts: string[] = [];

  if (projectCount && projectCount > 0) {
    parts.push(`${projectCount} project${projectCount !== 1 ? 's' : ''}`);
  }
  if (folderCount && folderCount > 0) {
    parts.push(`${folderCount} folder${folderCount !== 1 ? 's' : ''}`);
  }
  if (itemCount && itemCount > 0) {
    parts.push(`${itemCount} item${itemCount !== 1 ? 's' : ''}`);
  }

  return (
    <span
      style={{
        color: 'var(--muted)',
        fontFamily: 'var(--font-family)',
        fontSize: 'var(--text-xs)',
      }}
    >
      {parts.length > 0 ? parts.join(', ') : 'No access'}
    </span>
  );
}
