import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useRef } from 'react';

export function AppVirtualRoomPage() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    // Auto-focus next input
    if (value && index < 8) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleJoin = () => {
    const code = digits.join('');
    if (code.length < 9) return;
    alert(`Joining room: ${code.slice(0, 3)} ${code.slice(3, 6)} ${code.slice(6, 9)}`);
  };

  const code = digits.join('');

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border bg-card flex items-center gap-3">
        <button
          onClick={() => navigate('/app/knowledgebase')}
          className="p-1.5 hover:bg-secondary rounded-lg text-foreground transition-colors"
        >
          <ArrowLeft className="size-5" />
        </button>
        <div>
          <h3 className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h4)' }}>
            Immersive Room
          </h3>
          <p className="text-xs text-muted mt-0.5">Virtual training room</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm bg-card rounded-xl p-6 shadow-elevation-sm border border-border">
          <h2 className="text-center text-foreground mb-2" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h3)' }}>
            Virtual training room
          </h2>
          <p className="text-center text-sm text-muted mb-6">
            Enter room ID to join
          </p>

          {/* Segmented input: 3 groups of 3 */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {/* Group 1 */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digits[i]}
                  onChange={(e) => handleDigitChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="size-11 text-center text-lg rounded-lg border-2 border-dashed border-input bg-card outline-none focus:border-primary focus:border-solid transition-colors"
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                />
              ))}
            </div>

            <span className="text-muted text-lg">-</span>

            {/* Group 2 */}
            <div className="flex gap-1.5">
              {[3, 4, 5].map((i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digits[i]}
                  onChange={(e) => handleDigitChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="size-11 text-center text-lg rounded-lg border-2 border-dashed border-input bg-card outline-none focus:border-primary focus:border-solid transition-colors"
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                />
              ))}
            </div>

            <span className="text-muted text-lg">-</span>

            {/* Group 3 */}
            <div className="flex gap-1.5">
              {[6, 7, 8].map((i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digits[i]}
                  onChange={(e) => handleDigitChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="size-11 text-center text-lg rounded-lg border-2 border-dashed border-input bg-card outline-none focus:border-primary focus:border-solid transition-colors"
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                />
              ))}
            </div>
          </div>

          {/* Join button */}
          <button
            onClick={handleJoin}
            disabled={code.length < 9}
            className="w-full py-3 bg-primary text-white rounded-[var(--radius-button)] flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}
