import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';

export function AppMeetingJoinPage() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [status, setStatus] = useState<'default' | 'loading' | 'error'>('default');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
    setStatus('default');

    // Auto-focus next input
    if (value && index < 5) {
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
    if (code.length < 6) return;

    setStatus('loading');
    // Simulate validation
    setTimeout(() => {
      setStatus('error');
    }, 1500);
  };

  const code = digits.join('');

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border bg-card flex items-center gap-3">
        <button
          onClick={() => navigate('/app/remote-support')}
          className="p-1.5 hover:bg-secondary rounded-lg text-foreground transition-colors"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h3 className="text-foreground" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h4)' }}>
          Join Meeting
        </h3>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Device ID */}
        <div className="mb-6 text-center">
          <span className="text-xs text-muted uppercase tracking-widest" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
            MY DEVICE ID
          </span>
          <p className="text-foreground text-lg mt-1" style={{ fontWeight: 'var(--font-weight-bold)', letterSpacing: '3px' }}>
            902 950 988
          </p>
        </div>

        {/* Illustration placeholder */}
        <div
          className="w-full max-w-sm h-40 rounded-xl mb-8 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #2F80ED 0%, #8404B3 100%)' }}
        >
          <span className="text-white/60 text-sm">Meeting Illustration</span>
        </div>

        {/* Join card */}
        <div className="w-full max-w-sm bg-card rounded-xl p-6 shadow-elevation-sm border border-border">
          <h2 className="text-center text-foreground mb-6" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h4)' }}>
            Enter meeting password
          </h2>

          {/* Segmented input: 2 groups of 3 */}
          <div className="flex items-center justify-center gap-3 mb-6">
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
                  className={`size-12 text-center text-lg rounded-lg outline-none transition-colors
                    ${status === 'error' ? 'border-2 border-destructive bg-destructive/5' : 'border-2 border-dashed border-input bg-card focus:border-primary focus:border-solid'}`}
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
                  className={`size-12 text-center text-lg rounded-lg outline-none transition-colors
                    ${status === 'error' ? 'border-2 border-destructive bg-destructive/5' : 'border-2 border-dashed border-input bg-card focus:border-primary focus:border-solid'}`}
                  style={{ fontWeight: 'var(--font-weight-bold)' }}
                />
              ))}
            </div>
          </div>

          {/* Error message */}
          {status === 'error' && (
            <p className="text-center text-sm text-destructive mb-4" style={{ fontWeight: 'var(--font-weight-medium)' }}>
              Invalid meeting password
            </p>
          )}

          {/* Join button */}
          <button
            onClick={handleJoin}
            disabled={code.length < 6 || status === 'loading'}
            className="w-full py-3 bg-primary text-white rounded-[var(--radius-button)] flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Joining...
              </>
            ) : (
              'JOIN'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
