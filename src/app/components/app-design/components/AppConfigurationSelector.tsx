import { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { MOCK_CONFIGURATIONS } from '../../procedure-editor/configurationsData';
import type { Configuration } from '../../procedure-editor/configurationsData';
import { useRole } from '../../../contexts/RoleContext';

interface AppConfigurationSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (configId: string, configName: string) => void;
}

export function AppConfigurationSelector({ isOpen, onClose, onSelect }: AppConfigurationSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { currentRole } = useRole();

  // Filter: only enabled configs permitted for current role
  const availableConfigs = useMemo(() => {
    return MOCK_CONFIGURATIONS.filter((c) => {
      if (!c.isEnabled) return false;
      if (!c.permittedRoles.includes(currentRole)) return false;
      return true;
    });
  }, [currentRole]);

  // Search filter by name, description, or tags
  const filteredConfigs = useMemo(() => {
    if (!searchQuery.trim()) return availableConfigs;
    const q = searchQuery.toLowerCase();
    return availableConfigs.filter((c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [availableConfigs, searchQuery]);

  const handleOpen = () => {
    if (!selectedId) return;
    const config = availableConfigs.find((c) => c.id === selectedId);
    if (config) {
      onSelect(config.id, config.name);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-[60]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[60] p-4 pointer-events-none">
        <div
          className="pointer-events-auto flex flex-col w-full sm:w-[480px]"
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            backgroundColor: '#FFFFFF',
            border: '1px solid #C2C9DB',
            borderRadius: '10px',
            boxShadow: '0px 4px 14.2px 0px rgba(0,0,0,0.25)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between shrink-0"
            style={{
              padding: '16px 16px 12px 16px',
              borderBottom: '1px solid #E9E9E9',
            }}
          >
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'var(--font-weight-bold)',
                color: '#36415D',
                margin: 0,
              }}
            >
              Select Configuration
            </h3>
            <button
              onClick={onClose}
              className="flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ width: '36px', height: '36px', borderRadius: '8px' }}
              aria-label="Close"
            >
              <X style={{ width: '14px', height: '14px', color: '#36415D' }} />
            </button>
          </div>

          {/* Search */}
          <div className="shrink-0" style={{ padding: '12px 16px 8px 16px' }}>
            <div
              className="flex items-center"
              style={{
                backgroundColor: '#F5F5F5',
                borderRadius: '8px',
                border: '1px solid #C2C9DB',
                padding: '0 10px',
                height: '36px',
              }}
            >
              <Search style={{ width: '14px', height: '14px', color: '#868D9E', flexShrink: 0 }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or tag..."
                className="flex-1 outline-none bg-transparent"
                style={{
                  fontSize: '13px',
                  color: '#36415D',
                  border: 'none',
                  marginLeft: '8px',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="hover:opacity-70"
                >
                  <X style={{ width: '14px', height: '14px', color: '#868D9E' }} />
                </button>
              )}
            </div>
          </div>

          {/* Configuration list */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ padding: '4px 16px 8px 16px' }}
          >
            {filteredConfigs.length === 0 ? (
              <div
                className="flex items-center justify-center"
                style={{
                  padding: '32px 16px',
                  color: '#7F7F7F',
                  fontSize: '13px',
                }}
              >
                {searchQuery ? 'No configurations match your search' : 'No configurations available'}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {filteredConfigs.map((config) => (
                  <ConfigItem
                    key={config.id}
                    config={config}
                    isSelected={selectedId === config.id}
                    onSelect={() => setSelectedId(selectedId === config.id ? null : config.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-end shrink-0"
            style={{
              padding: '12px 16px',
              borderTop: '1px solid #E9E9E9',
              gap: '10px',
            }}
          >
            <button
              onClick={onClose}
              className="hover:bg-gray-100 transition-colors"
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#36415D',
                border: '1px solid #C2C9DB',
                backgroundColor: 'white',
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleOpen}
              disabled={!selectedId}
              className="transition-all"
              style={{
                padding: '8px 24px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 'var(--font-weight-bold)',
                color: 'white',
                backgroundColor: selectedId ? '#2F80ED' : '#C2C9DB',
                border: 'none',
                cursor: selectedId ? 'pointer' : 'not-allowed',
                opacity: selectedId ? 1 : 0.7,
              }}
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ConfigItem({
  config,
  isSelected,
  onSelect,
}: {
  config: Configuration;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left transition-all"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '10px 12px',
        borderRadius: '8px',
        border: isSelected ? '2px solid #8404B3' : '1px solid #E9E9E9',
        backgroundColor: isSelected ? '#F3E8FA' : '#FFFFFF',
        cursor: 'pointer',
      }}
    >
      {/* Radio circle */}
      <div
        className="shrink-0"
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          border: isSelected ? '2px solid #8404B3' : '2px solid #C2C9DB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2px',
        }}
      >
        {isSelected && (
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#8404B3',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="truncate"
            style={{
              fontSize: '14px',
              fontWeight: 'var(--font-weight-bold)',
              color: '#36415D',
            }}
          >
            {config.name}
          </span>
          {config.isDefault && (
            <span
              style={{
                fontSize: '10px',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#8404B3',
                backgroundColor: 'rgba(132,4,179,0.1)',
                padding: '1px 6px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
              }}
            >
              Default
            </span>
          )}
        </div>
        <p
          className="line-clamp-2"
          style={{
            fontSize: '12px',
            color: '#868D9E',
            margin: '2px 0 6px 0',
            lineHeight: '1.4',
          }}
        >
          {config.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap" style={{ gap: '4px' }}>
          {config.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '10px',
                color: '#868D9E',
                backgroundColor: '#F5F5F5',
                padding: '2px 8px',
                borderRadius: '10px',
                border: '1px solid #E9E9E9',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
