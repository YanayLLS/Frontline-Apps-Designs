import { Check, Minus } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.MouseEvent<HTMLDivElement>) => void;
  indeterminate?: boolean;
  disabled?: boolean;
}

export function Checkbox({ checked, onChange, indeterminate, disabled }: CheckboxProps) {
  const isActive = checked || indeterminate;

  return (
    <div
      onClick={disabled ? undefined : onChange}
      className="w-4 h-4 rounded border-2 flex items-center justify-center transition-all"
      style={{
        borderColor: isActive ? 'var(--primary)' : 'var(--border)',
        backgroundColor: isActive ? 'var(--primary)' : 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {indeterminate ? (
        <Minus className="w-3 h-3" style={{ color: 'var(--primary-foreground)' }} />
      ) : checked ? (
        <Check className="w-3 h-3" style={{ color: 'var(--primary-foreground)' }} />
      ) : null}
    </div>
  );
}
