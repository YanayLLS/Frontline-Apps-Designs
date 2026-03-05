interface DeleteConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  itemName?: string;
}

export function DeleteConfirmationModal({
  onClose,
  onConfirm,
  title,
  message,
  itemName,
}: DeleteConfirmationModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200]"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-[var(--radius-lg)] p-6 max-w-md mx-4"
        style={{ boxShadow: 'var(--shadow-elevation-lg)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          className="text-foreground mb-2"
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--font-weight-bold)',
            fontFamily: 'var(--font-family)',
          }}
        >
          {title}
        </h3>
        <p
          className="text-muted mb-6"
          style={{
            fontSize: 'var(--text-sm)',
            fontFamily: 'var(--font-family)',
          }}
        >
          {message}
          {itemName && (
            <>
              {' '}
              <strong style={{ color: 'var(--foreground)' }}>{itemName}</strong>
            </>
          )}
        </p>
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-[var(--radius)] transition-colors"
            style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-family)' }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 transition-colors"
            style={{
              backgroundColor: 'var(--destructive)',
              color: 'var(--destructive-foreground)',
              borderRadius: 'var(--radius)',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-family)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
