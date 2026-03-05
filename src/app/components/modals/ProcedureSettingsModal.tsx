import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface ProcedureSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  procedureName: string;
}

export function ProcedureSettingsModal({ isOpen, onClose, procedureName }: ProcedureSettingsModalProps) {
  const [name, setName] = useState(procedureName);
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('30');
  const [difficulty, setDifficulty] = useState('Beginner');
  const [category, setCategory] = useState('Maintenance');
  const [showDifficultyMenu, setShowDifficultyMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  if (!isOpen) return null;

  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  const categories = ['Maintenance', 'Assembly', 'Repair', 'Inspection', 'Training', 'Other'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="border rounded-lg shadow-lg max-w-[560px] w-full mx-4 max-h-[90vh] overflow-auto"
        style={{ 
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--elevation-lg)',
          fontFamily: 'var(--font-family)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b sticky top-0 z-10" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
          <div>
            <h2 className="text-base uppercase mb-1.5" style={{ fontWeight: 'var(--font-weight-bold)', color: 'var(--foreground)' }}>
              Procedure Settings
            </h2>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              Configure settings for this procedure
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Procedure Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
              Procedure Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded border focus:outline-none transition-colors"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 text-sm rounded border focus:outline-none transition-colors resize-none"
              placeholder="Add a description for this procedure..."
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Estimated Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                Est. Time (min)
              </label>
              <input
                type="number"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded border focus:outline-none transition-colors"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
              />
            </div>

            {/* Difficulty */}
            <div className="relative">
              <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
                Difficulty
              </label>
              <button
                onClick={() => setShowDifficultyMenu(!showDifficultyMenu)}
                className="w-full px-3 py-2 text-sm text-left rounded border flex items-center justify-between transition-colors"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                onMouseLeave={(e) => !showDifficultyMenu && (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                {difficulty}
                <ChevronDown className="w-4 h-4" style={{ color: 'var(--muted)' }} />
              </button>
              {showDifficultyMenu && (
                <div 
                  className="absolute top-full mt-1 w-full rounded border z-20 py-1"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    boxShadow: 'var(--elevation-md)'
                  }}
                >
                  {difficulties.map((diff) => (
                    <button
                      key={diff}
                      onClick={() => {
                        setDifficulty(diff);
                        setShowDifficultyMenu(false);
                      }}
                      className="w-full px-3 py-2 text-sm text-left transition-colors"
                      style={{ color: 'var(--foreground)' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category */}
          <div className="relative">
            <label className="block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--muted)' }}>
              Category
            </label>
            <button
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              className="w-full px-3 py-2 text-sm text-left rounded border flex items-center justify-between transition-colors"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseLeave={(e) => !showCategoryMenu && (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {category}
              <ChevronDown className="w-4 h-4" style={{ color: 'var(--muted)' }} />
            </button>
            {showCategoryMenu && (
              <div 
                className="absolute top-full mt-1 w-full rounded border z-20 py-1"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  boxShadow: 'var(--elevation-md)'
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setShowCategoryMenu(false);
                    }}
                    className="w-full px-3 py-2 text-sm text-left transition-colors"
                    style={{ color: 'var(--foreground)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded transition-colors"
            style={{ color: 'var(--foreground)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Save settings logic here
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium rounded transition-colors"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
