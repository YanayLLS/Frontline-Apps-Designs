import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange?: (e: React.MouseEvent) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <div
      onClick={onChange}
      className="w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-all"
      style={{
        borderColor: checked ? 'var(--primary)' : 'var(--border)',
        backgroundColor: checked ? 'var(--primary)' : 'transparent',
      }}
    >
      {checked && (
        <Check className="w-3 h-3" style={{ color: 'var(--primary-foreground)' }} />
      )}
    </div>
  );
}
