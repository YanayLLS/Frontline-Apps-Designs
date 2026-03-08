import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Delete, Search } from 'lucide-react';
import { useState, useRef } from 'react';

const dialPad = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['*', '0', '#'],
];

export function AppCallDevicePage() {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '', '', '', '']);
  const [contactSearch, setContactSearch] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && index < 8) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleDial = (digit: string) => {
    const firstEmpty = digits.findIndex(d => d === '');
    if (firstEmpty !== -1) {
      const newDigits = [...digits];
      newDigits[firstEmpty] = digit;
      setDigits(newDigits);
    }
  };

  const handleDelete = () => {
    const lastFilled = digits.reduce((last, d, i) => d !== '' ? i : last, -1);
    if (lastFilled !== -1) {
      const newDigits = [...digits];
      newDigits[lastFilled] = '';
      setDigits(newDigits);
    }
  };

  const handleCall = () => {
    const code = digits.filter(d => d).join('');
    if (code.length > 0) {
      alert(`Calling device: ${code}`);
    }
  };

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
          Call Device
        </h3>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
        <div className="w-full max-w-sm">
          {/* Contact search section */}
          <div className="mb-6">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={contactSearch}
                onChange={(e) => setContactSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg text-sm bg-secondary border-none outline-none text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Sample contact */}
            <div className="flex items-center gap-3 px-3 py-2.5 bg-card border border-border rounded-lg">
              <div
                className="size-9 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                style={{ backgroundColor: '#2F80ED', fontWeight: 'var(--font-weight-bold)' }}
              >
                LR
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-foreground truncate" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                  Luy Robin
                </div>
                <div className="text-xs text-muted">Field Engineer</div>
              </div>
              <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                <Phone className="size-4" />
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-foreground mb-2" style={{ fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--text-h3)' }}>
              Conferences
            </h2>
            <p className="text-sm text-muted">Please enter device ID below</p>
          </div>

          {/* Segmented Input: 3 groups of 3 */}
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

          {/* Call button */}
          <button
            onClick={handleCall}
            className="w-full py-3 bg-primary text-white rounded-[var(--radius-button)] flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mb-8"
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            <Phone className="size-5" />
            Call
          </button>

          {/* Numpad */}
          <div className="grid grid-cols-3 gap-3 max-w-[280px] mx-auto">
            {dialPad.map((row, ri) =>
              row.map((digit) => (
                <button
                  key={digit}
                  onClick={() => handleDial(digit)}
                  className="size-16 sm:size-18 rounded-full bg-card border border-border flex items-center justify-center text-xl text-foreground hover:bg-secondary transition-colors"
                  style={{ fontWeight: 'var(--font-weight-medium)' }}
                >
                  {digit}
                </button>
              ))
            )}
            {/* Bottom row: empty, call, delete */}
            <div />
            <button
              onClick={handleCall}
              className="size-16 sm:size-18 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
            >
              <Phone className="size-6" />
            </button>
            <button
              onClick={handleDelete}
              className="size-16 sm:size-18 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Delete className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
