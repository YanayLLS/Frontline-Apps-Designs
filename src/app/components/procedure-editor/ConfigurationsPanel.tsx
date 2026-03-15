import { X, Search, Plus, MoreVertical, Copy, Trash2, ChevronDown, ChevronRight, Upload, Download, Shield, Sliders, GripVertical, Pencil, PlusSquare, MinusSquare, Eye, Link2 } from 'lucide-react';
import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { MOCK_CONFIGURATIONS, type Configuration } from './configurationsData';
import { ROLES, type UserRole } from '../../contexts/RoleContext';

interface ConfigurationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// ── Toast Component ─────────────────────────────────────────────────

function Toast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 3000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] pointer-events-auto"
    >
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-lg shadow-elevation-lg border border-border bg-card"
        style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#36415D' }}
      >
        <span>{message}</span>
        <button onClick={onDismiss} className="hover:opacity-70 transition-opacity" style={{ color: '#868D9E' }}>
          <X className="size-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

// ── Confirm Dialog ──────────────────────────────────────────────────

function ConfirmDialog({
  title,
  message,
  confirmLabel,
  confirmColor,
  onConfirm,
  onCancel,
}: {
  title: string;
  message: string;
  confirmLabel: string;
  confirmColor: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-card rounded-lg shadow-elevation-lg border border-border w-[calc(100vw-48px)] max-w-[380px]"
        style={{ padding: '24px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ fontFamily: 'var(--font-family)', fontSize: '15px', fontWeight: 600, color: '#36415D', marginBottom: '8px' }}>
          {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#868D9E', marginBottom: '20px', lineHeight: 1.5 }}>
          {message}
        </p>
        <div className="flex justify-end" style={{ gap: '8px' }}>
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-button hover:bg-foreground/5 transition-colors min-h-[44px]"
            style={{ fontFamily: 'var(--font-family)', fontSize: '13px', fontWeight: 500, color: '#36415D', border: '1px solid #C2C9DB' }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-button text-white hover:opacity-90 transition-opacity min-h-[44px]"
            style={{ fontFamily: 'var(--font-family)', fontSize: '13px', fontWeight: 600, backgroundColor: confirmColor }}
          >
            {confirmLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Configuration List Item ─────────────────────────────────────────

interface ConfigItemProps {
  config: Configuration;
  isActive: boolean;
  isChecked: boolean;
  onSelect: () => void;
  onToggleEnabled: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onRename: (name: string) => void;
  onStartInlineRename: () => void;
  onToggleChecked: () => void;
  onCopyLink: () => void;
}

function ConfigItem({ config, isActive, isChecked, onSelect, onToggleEnabled, onDuplicate, onDelete, onRename, onStartInlineRename, onToggleChecked, onCopyLink }: ConfigItemProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(config.name);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside([menuRef, menuBtnRef], () => setShowMenu(false), showMenu);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const commitRename = () => {
    const trimmed = editName.trim();
    if (trimmed && trimmed !== config.name) {
      onRename(trimmed);
    } else {
      setEditName(config.name);
    }
    setIsEditing(false);
  };

  return (
    <div
      className={`group cursor-pointer transition-colors ${isActive ? '' : 'hover:bg-[#E9E9E9]/60'}`}
      data-demo={`config-item-${config.id}`}
      data-config-default={config.isDefault ? 'true' : undefined}
      data-config-readonly={config.isReadOnly ? 'true' : undefined}
      style={{
        padding: '10px 12px',
        borderRadius: 'var(--radius-button)',
        backgroundColor: isActive ? '#D9E0F0' : undefined,
        borderLeft: isActive ? '3px solid #8404B3' : '3px solid transparent',
      }}
      onClick={onSelect}
    >
      <div className="flex items-center" style={{ gap: '8px' }}>
        {/* Drag handle (visual only) for non-default configs */}
        {!config.isDefault && (
          <GripVertical
            className="flex-shrink-0 cursor-grab"
            style={{ width: '14px', height: '14px', color: '#C2C9DB' }}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        {/* Multi-select checkbox for non-default configs */}
        {!config.isDefault && (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => {
              e.stopPropagation();
              onToggleChecked();
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0 accent-[#8404B3]"
            style={{ width: '14px', height: '14px', cursor: 'pointer' }}
          />
        )}

        {/* Active indicator */}
        <div
          className="flex-shrink-0 rounded-full"
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: config.isEnabled ? (isActive ? '#8404B3' : '#11E874') : '#7F7F7F',
            border: isActive ? '2px solid rgba(132,4,179,0.3)' : undefined,
          }}
        />

        {/* Name / inline edit */}
        <div className="flex-1 min-w-0">
          {isEditing && !config.isReadOnly ? (
            <input
              ref={inputRef}
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onBlur={commitRename}
              onKeyDown={(e) => {
                if (e.key === 'Enter') commitRename();
                if (e.key === 'Escape') { setEditName(config.name); setIsEditing(false); }
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white border outline-none px-2 py-0.5"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '13px',
                color: '#36415D',
                borderColor: '#2E80ED',
                borderRadius: '4px',
              }}
            />
          ) : (
            <span
              className="truncate block"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '13px',
                fontWeight: isActive ? 600 : 500,
                color: config.isEnabled ? '#36415D' : '#7F7F7F',
              }}
              onDoubleClick={(e) => {
                if (!config.isReadOnly) {
                  e.stopPropagation();
                  setIsEditing(true);
                }
              }}
            >
              {config.name}
            </span>
          )}
        </div>

        {/* Badges */}
        {config.isDefault && (
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '10px',
              fontWeight: 600,
              color: '#8404B3',
              backgroundColor: 'rgba(132,4,179,0.1)',
              padding: '2px 6px',
              borderRadius: '99px',
              lineHeight: '14px',
            }}
          >
            DEFAULT
          </span>
        )}

        {config.isReadOnly && (
          <span
            className="flex-shrink-0"
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '10px',
              fontWeight: 500,
              color: '#868D9E',
              backgroundColor: 'rgba(134,141,158,0.1)',
              padding: '2px 6px',
              borderRadius: '99px',
              lineHeight: '14px',
            }}
          >
            READ-ONLY
          </span>
        )}

        {/* Enable/disable toggle */}
        {!config.isDefault && (
          <button
            className="flex-shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              onToggleEnabled();
            }}
            title={config.isEnabled ? 'Disable configuration' : 'Enable configuration'}
          >
            <div
              className="relative rounded-full transition-colors"
              style={{
                width: '32px',
                height: '18px',
                backgroundColor: config.isEnabled ? '#8404B3' : '#C2C9DB',
              }}
            >
              <div
                className="absolute top-[2px] rounded-full bg-white transition-all"
                style={{
                  width: '14px',
                  height: '14px',
                  left: config.isEnabled ? '16px' : '2px',
                }}
              />
            </div>
          </button>
        )}

        {/* Three-dot menu */}
        {!config.isReadOnly && (
          <div className="relative flex-shrink-0">
            <button
              ref={menuBtnRef}
              data-demo="config-menu-btn"
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-foreground/10 min-h-[36px] min-w-[36px] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
            >
              <MoreVertical className="size-3.5" style={{ color: '#868D9E' }} />
            </button>
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  ref={menuRef}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-elevation-lg z-[100]"
                  style={{ minWidth: '140px' }}
                >
                  <div style={{ padding: '4px' }}>
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-foreground/5 transition-colors text-left min-h-[36px]"
                      style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#36415D' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMenu(false);
                        setIsEditing(true);
                        onStartInlineRename();
                      }}
                    >
                      <Pencil className="size-3.5" style={{ color: '#868D9E' }} />
                      Rename
                    </button>
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-foreground/5 transition-colors text-left min-h-[36px]"
                      style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#36415D' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onDuplicate();
                        setShowMenu(false);
                      }}
                    >
                      <Copy className="size-3.5" style={{ color: '#868D9E' }} />
                      Duplicate
                    </button>
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-foreground/5 transition-colors text-left min-h-[36px]"
                      style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#36415D' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMenu(false);
                        onCopyLink();
                      }}
                    >
                      <Link2 className="size-3.5" style={{ color: '#868D9E' }} />
                      Copy Link
                    </button>
                    <div style={{ height: '1px', backgroundColor: '#E9E9E9', margin: '2px 8px' }} />
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-[#FF1F1F]/10 transition-colors text-left min-h-[36px]"
                      style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#FF1F1F' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                        setShowMenu(false);
                      }}
                    >
                      <Trash2 className="size-3.5" />
                      Delete
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Tags */}
      {config.tags.length > 0 && (
        <div className="flex flex-wrap mt-1.5" style={{ gap: '4px', paddingLeft: '16px' }}>
          {config.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '10px',
                fontWeight: 500,
                color: '#868D9E',
                backgroundColor: '#E9E9E9',
                padding: '1px 6px',
                borderRadius: '99px',
                lineHeight: '16px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Detail Section ──────────────────────────────────────────────────

interface DetailSectionProps {
  config: Configuration;
  onUpdate: (updates: Partial<Configuration>) => void;
  onShowToast: (message: string) => void;
}

function DetailSection({ config, onUpdate, onShowToast }: DetailSectionProps) {
  const [showPermissions, setShowPermissions] = useState(false);
  const [tagInput, setTagInput] = useState('');
  // GAP 9 (FR17-18): Add/Remove parts hidden by default until parts selected in 3D
  const [hasSelectedParts, setHasSelectedParts] = useState(false);

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !config.tags.includes(tag)) {
      onUpdate({ tags: [...config.tags, tag] });
    }
    setTagInput('');
  };

  const handleRemoveTag = (tag: string) => {
    onUpdate({ tags: config.tags.filter((t) => t !== tag) });
  };

  const handleToggleRole = (role: UserRole) => {
    if (config.permittedRoles.includes(role)) {
      const newRoles = config.permittedRoles.filter((r) => r !== role);
      onUpdate({ permittedRoles: newRoles });
      if (newRoles.length === 0) {
        onShowToast('No roles selected \u2014 this configuration will be invisible to all users.');
      }
    } else {
      onUpdate({ permittedRoles: [...config.permittedRoles, role] });
    }
  };

  const roleEntries = Object.values(ROLES);

  return (
    <div data-demo="configurations-detail" style={{ padding: '0 16px 16px' }}>
      <div
        className="border-t"
        style={{ borderColor: '#C2C9DB', paddingTop: '12px' }}
      >
        {/* Section Title */}
        <div className="flex items-center mb-3" style={{ gap: '6px' }}>
          <Sliders className="size-3.5" style={{ color: '#8404B3' }} />
          <span style={{ fontFamily: 'var(--font-family)', fontSize: '12px', fontWeight: 600, color: '#8404B3', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Configuration Details
          </span>
        </div>

        {/* Name */}
        <label
          style={{ fontFamily: 'var(--font-family)', fontSize: '11px', fontWeight: 600, color: '#868D9E', display: 'block', marginBottom: '4px' }}
        >
          Name
        </label>
        <input
          value={config.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          disabled={config.isReadOnly}
          className="w-full bg-white border outline-none mb-3 min-h-[36px]"
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: '13px',
            color: config.isReadOnly ? '#7F7F7F' : '#36415D',
            borderColor: '#C2C9DB',
            borderRadius: '6px',
            padding: '6px 10px',
          }}
        />

        {/* Description */}
        <label
          style={{ fontFamily: 'var(--font-family)', fontSize: '11px', fontWeight: 600, color: '#868D9E', display: 'block', marginBottom: '4px' }}
        >
          Description
        </label>
        <textarea
          value={config.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          disabled={config.isReadOnly}
          rows={3}
          className="w-full bg-white border outline-none mb-3 resize-none"
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: '13px',
            color: config.isReadOnly ? '#7F7F7F' : '#36415D',
            borderColor: '#C2C9DB',
            borderRadius: '6px',
            padding: '6px 10px',
            lineHeight: 1.4,
          }}
        />

        {/* Tags */}
        <label
          style={{ fontFamily: 'var(--font-family)', fontSize: '11px', fontWeight: 600, color: '#868D9E', display: 'block', marginBottom: '4px' }}
        >
          Tags
        </label>
        <div className="flex flex-wrap mb-1.5" style={{ gap: '4px' }}>
          {config.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '11px',
                fontWeight: 500,
                color: '#36415D',
                backgroundColor: '#E9E9E9',
                padding: '2px 4px 2px 8px',
                borderRadius: '99px',
                lineHeight: '18px',
                gap: '2px',
              }}
            >
              {tag}
              {!config.isReadOnly && (
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:opacity-70 transition-opacity p-0.5"
                  style={{ color: '#868D9E' }}
                >
                  <X className="size-2.5" />
                </button>
              )}
            </span>
          ))}
        </div>
        {!config.isReadOnly && (
          <div data-demo="configurations-tags" className="flex mb-3" style={{ gap: '4px' }}>
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddTag();
              }}
              placeholder="Add tag..."
              data-demo="configurations-tag-input"
              className="flex-1 bg-white border outline-none min-h-[32px]"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '12px',
                color: '#36415D',
                borderColor: '#C2C9DB',
                borderRadius: '6px',
                padding: '4px 8px',
              }}
            />
            <button
              onClick={handleAddTag}
              className="px-3 rounded-button hover:opacity-90 transition-opacity min-h-[32px]"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '12px',
                fontWeight: 500,
                color: 'white',
                backgroundColor: '#2F80ED',
              }}
            >
              Add
            </button>
          </div>
        )}

        {/* Set from View button */}
        {!config.isReadOnly && (
          <button
            data-demo="configurations-set-from-view"
            className="w-full flex items-center justify-center gap-2 rounded-button mb-3 hover:opacity-90 transition-opacity min-h-[40px]"
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '13px',
              fontWeight: 600,
              color: 'white',
              backgroundColor: '#8404B3',
              padding: '8px 16px',
            }}
            onClick={() => {
              // Mock: in a real implementation, this captures the current 3D view state
              onShowToast('Configuration updated from current view');
            }}
          >
            <Sliders className="size-3.5" />
            Set from View
          </button>
        )}

        {/* Add/Remove selected parts — GAP 9 (FR17-18): hidden until parts selected */}
        {!config.isReadOnly && (
          <div className="mb-3" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {hasSelectedParts ? (
              <div className="flex" style={{ gap: '6px' }}>
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-button hover:opacity-90 transition-opacity min-h-[36px] border"
                  style={{
                    fontFamily: 'var(--font-family)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#36415D',
                    borderColor: '#C2C9DB',
                    padding: '6px 10px',
                  }}
                  onClick={() => onShowToast('Selected parts added to configuration')}
                >
                  <PlusSquare className="size-3.5" style={{ color: '#868D9E' }} />
                  Add Selected Parts
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-button hover:opacity-90 transition-opacity min-h-[36px] border"
                  style={{
                    fontFamily: 'var(--font-family)',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#36415D',
                    borderColor: '#C2C9DB',
                    padding: '6px 10px',
                  }}
                  onClick={() => onShowToast('Selected parts removed from configuration')}
                >
                  <MinusSquare className="size-3.5" style={{ color: '#868D9E' }} />
                  Remove Selected Parts
                </button>
              </div>
            ) : (
              <div
                className="flex items-center rounded-lg"
                style={{
                  padding: '8px 10px',
                  backgroundColor: '#F5F5F5',
                  border: '1px dashed #C2C9DB',
                  gap: '8px',
                }}
              >
                <Eye className="size-3.5 shrink-0" style={{ color: '#868D9E' }} />
                <span style={{ fontFamily: 'var(--font-family)', fontSize: '11px', color: '#868D9E', flex: 1 }}>
                  Select parts in the 3D view to add or remove them from this configuration.
                </span>
              </div>
            )}
            {/* Demo toggle for part selection simulation */}
            <button
              onClick={() => setHasSelectedParts((v) => !v)}
              className="flex items-center justify-center gap-1 rounded-button hover:opacity-80 transition-opacity"
              style={{
                fontFamily: 'var(--font-family)',
                fontSize: '10px',
                color: '#868D9E',
                background: 'none',
                border: '1px dashed #C2C9DB',
                padding: '3px 8px',
                cursor: 'pointer',
              }}
            >
              {hasSelectedParts ? 'Clear part selection (demo)' : 'Simulate part selection (demo)'}
            </button>
          </div>
        )}

        {/* Captured parts summary */}
        {Object.keys(config.partStates).length > 0 && (
          <div
            className="mb-3 rounded-lg"
            style={{
              padding: '8px 10px',
              backgroundColor: 'rgba(132, 4, 179, 0.06)',
              border: '1px solid rgba(132, 4, 179, 0.15)',
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Eye className="size-3" style={{ color: '#8404B3' }} />
              <span style={{ fontFamily: 'var(--font-family)', fontSize: '11px', fontWeight: 700, color: '#8404B3' }}>
                Scene State Captured
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-family)', fontSize: '11px', color: '#868D9E' }}>
              {Object.values(config.partStates).filter(Boolean).length} parts visible, {Object.values(config.partStates).filter(v => !v).length} hidden
            </span>
          </div>
        )}

        {/* Enable/Disable toggle */}
        {!config.isDefault && (
          <div className="flex items-center justify-between mb-3">
            <span style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#36415D' }}>
              Enabled
            </span>
            <button
              onClick={() => onUpdate({ isEnabled: !config.isEnabled })}
              className="min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <div
                className="relative rounded-full transition-colors"
                style={{
                  width: '36px',
                  height: '20px',
                  backgroundColor: config.isEnabled ? '#8404B3' : '#C2C9DB',
                }}
              >
                <div
                  className="absolute top-[2px] rounded-full bg-white transition-all"
                  style={{
                    width: '16px',
                    height: '16px',
                    left: config.isEnabled ? '18px' : '2px',
                  }}
                />
              </div>
            </button>
          </div>
        )}

        {/* Last Updated */}
        <p style={{ fontFamily: 'var(--font-family)', fontSize: '11px', color: '#868D9E', marginBottom: '12px' }}>
          Last updated: {new Date(config.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
        </p>

        {/* Permissions (expandable) */}
        <div
          data-demo="configurations-permissions"
          className="border rounded-lg overflow-hidden"
          style={{ borderColor: '#C2C9DB' }}
        >
          <button
            data-demo="configurations-permissions-btn"
            className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-[#E9E9E9]/50 transition-colors min-h-[40px]"
            onClick={() => setShowPermissions(!showPermissions)}
          >
            <div className="flex items-center" style={{ gap: '6px' }}>
              <Shield className="size-3.5" style={{ color: '#8404B3' }} />
              <span style={{ fontFamily: 'var(--font-family)', fontSize: '13px', fontWeight: 500, color: '#36415D' }}>
                Permissions
              </span>
              <span style={{ fontFamily: 'var(--font-family)', fontSize: '11px', color: '#868D9E' }}>
                ({config.permittedRoles.length} roles)
              </span>
            </div>
            {showPermissions ? (
              <ChevronDown className="size-3.5" style={{ color: '#868D9E' }} />
            ) : (
              <ChevronRight className="size-3.5" style={{ color: '#868D9E' }} />
            )}
          </button>
          <AnimatePresence>
            {showPermissions && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="overflow-hidden"
              >
                <div
                  className="border-t"
                  style={{ borderColor: '#C2C9DB', padding: '8px 12px' }}
                >
                  {roleEntries.map((role) => (
                    <label
                      key={role.id}
                      className="flex items-center gap-2 py-1.5 cursor-pointer min-h-[32px]"
                    >
                      <input
                        type="checkbox"
                        checked={config.permittedRoles.includes(role.id)}
                        onChange={() => handleToggleRole(role.id)}
                        disabled={config.isReadOnly}
                        className="accent-[#8404B3] w-4 h-4"
                      />
                      <span style={{ fontFamily: 'var(--font-family)', fontSize: '12px', color: config.isReadOnly ? '#7F7F7F' : '#36415D' }}>
                        {role.label}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ── Main Panel Component ────────────────────────────────────────────

export function ConfigurationsPanel({ isOpen, onClose }: ConfigurationsPanelProps) {
  const [configurations, setConfigurations] = useState<Configuration[]>(MOCK_CONFIGURATIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>('config-default');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{
    title: string;
    message: string;
    confirmLabel: string;
    confirmColor: string;
    onConfirm: () => void;
  } | null>(null);
  const [importConfirmPending, setImportConfirmPending] = useState(false);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  const selectedConfig = configurations.find((c) => c.id === selectedId) ?? null;

  // Filter by search query (name and tags)
  const filteredConfigs = configurations.filter((config) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      config.name.toLowerCase().includes(q) ||
      config.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const handleCreateConfiguration = useCallback(() => {
    // Find a unique name (auto-increment "Configuration N")
    let counter = 1;
    while (configurations.some((c) => c.name === `Configuration ${counter}`)) counter++;
    const baseName = `Configuration ${counter}`;

    // Capture the current 3D scene's part visibility as the initial state
    // (In a real app this would read from the 3D iframe; here we simulate a snapshot)
    const capturedPartStates: Record<string, boolean> = {
      'EngineBlock': true,
      'Alternator': true,
      'FuelSystem': true,
      'CoolantAssembly': true,
      'ExhaustManifold': true,
      'ControlPanel': true,
      'OilFilter': true,
      'AirFilter': true,
      'BeltDrive': true,
      'FuelTank': true,
    };

    const newConfig: Configuration = {
      id: `config-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: baseName,
      description: '',
      tags: [],
      isEnabled: true,
      isDefault: false,
      isReadOnly: false,
      lastUpdated: new Date().toISOString(),
      sortOrder: configurations.length,
      permittedRoles: ['content-creator', 'admin'],
      partStates: capturedPartStates,
    };
    setConfigurations((prev) => [...prev, newConfig]);
    // Auto-activate — you're now "in" this config
    setSelectedId(newConfig.id);
    setToastMessage('Configuration created — current scene state captured');
  }, [configurations]);

  const handleDuplicate = useCallback((configId: string) => {
    const source = configurations.find((c) => c.id === configId);
    if (!source) return;
    const duplicate: Configuration = {
      ...source,
      id: `config-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: `${source.name} (Copy)`,
      isDefault: false,
      isReadOnly: false,
      lastUpdated: new Date().toISOString(),
      sortOrder: configurations.length,
    };
    setConfigurations((prev) => [...prev, duplicate]);
    setSelectedId(duplicate.id);
    setToastMessage(`Duplicated "${source.name}"`);
  }, [configurations]);

  const handleDelete = useCallback((configId: string) => {
    const config = configurations.find((c) => c.id === configId);
    if (!config || config.isDefault || config.isReadOnly) return;
    setConfirmDialog({
      title: 'Delete Configuration',
      message: `Are you sure you want to delete "${config.name}"?`,
      confirmLabel: 'Delete',
      confirmColor: '#FF1F1F',
      onConfirm: () => {
        setConfigurations((prev) => prev.filter((c) => c.id !== configId));
        if (selectedId === configId) setSelectedId('config-default');
        setConfirmDialog(null);
        setToastMessage(`Deleted "${config.name}"`);
      },
    });
  }, [configurations, selectedId]);

  const handleToggleEnabled = useCallback((configId: string) => {
    setConfigurations((prev) =>
      prev.map((c) => (c.id === configId ? { ...c, isEnabled: !c.isEnabled, lastUpdated: new Date().toISOString() } : c))
    );
  }, []);

  const handleRename = useCallback((configId: string, name: string) => {
    // Duplicate name validation (Fix 6)
    const duplicate = configurations.find((c) => c.id !== configId && c.name === name);
    if (duplicate) {
      setToastMessage('A configuration with this name already exists');
      return;
    }
    setConfigurations((prev) =>
      prev.map((c) => (c.id === configId ? { ...c, name, lastUpdated: new Date().toISOString() } : c))
    );
  }, [configurations]);

  const handleUpdateSelected = useCallback((updates: Partial<Configuration>) => {
    if (!selectedId) return;
    // Duplicate name validation when renaming from detail section (Fix 6)
    if (updates.name !== undefined) {
      const duplicate = configurations.find((c) => c.id !== selectedId && c.name === updates.name);
      if (duplicate) {
        setToastMessage('A configuration with this name already exists');
        return;
      }
    }
    setConfigurations((prev) =>
      prev.map((c) =>
        c.id === selectedId ? { ...c, ...updates, lastUpdated: new Date().toISOString() } : c
      )
    );
  }, [selectedId, configurations]);

  const handleImport = useCallback(() => {
    // Simulate import flow
    setImportConfirmPending(true);
    setConfirmDialog({
      title: 'Import Configurations',
      message: 'Some configurations in the imported file don\'t exist in this digital twin. Regenerate missing configurations from the import data?',
      confirmLabel: 'Regenerate',
      confirmColor: '#2F80ED',
      onConfirm: () => {
        // Actually add a mock imported config (Fix 7)
        const importedConfig: Configuration = {
          id: `config-imported-${Date.now()}`,
          name: 'Imported Configuration',
          description: 'Configuration imported from external file. Contains custom part visibility states and regional settings.',
          tags: ['imported', 'external'],
          isEnabled: true,
          isDefault: false,
          isReadOnly: false,
          lastUpdated: new Date().toISOString(),
          sortOrder: configurations.length,
          permittedRoles: ['field-service-engineer', 'content-creator', 'admin'],
          partStates: {
            'CoolantAssembly': true,
            'PremiumExhaust': false,
            'AuxPowerModule': true,
          },
        };
        setConfigurations((prev) => [...prev, importedConfig]);
        setSelectedId(importedConfig.id);
        setConfirmDialog(null);
        setImportConfirmPending(false);
        setToastMessage('Configurations imported successfully');
      },
    });
  }, [configurations.length]);

  const handleExport = useCallback(() => {
    setToastMessage('Configurations exported to file');
  }, []);

  // Bulk operations (Fix 4)
  const handleBulkDelete = useCallback(() => {
    if (checkedIds.size === 0) return;
    const names = configurations.filter((c) => checkedIds.has(c.id)).map((c) => c.name);
    setConfirmDialog({
      title: 'Delete Selected Configurations',
      message: `Are you sure you want to delete ${checkedIds.size} configuration${checkedIds.size > 1 ? 's' : ''}?`,
      confirmLabel: 'Delete',
      confirmColor: '#FF1F1F',
      onConfirm: () => {
        setConfigurations((prev) => prev.filter((c) => !checkedIds.has(c.id)));
        if (selectedId && checkedIds.has(selectedId)) setSelectedId('config-default');
        setCheckedIds(new Set());
        setConfirmDialog(null);
        setToastMessage(`Deleted ${names.length} configuration${names.length > 1 ? 's' : ''}`);
      },
    });
  }, [checkedIds, configurations, selectedId]);

  const handleBulkToggleEnabled = useCallback(() => {
    if (checkedIds.size === 0) return;
    // If all checked are enabled, disable them. Otherwise enable them.
    const checkedConfigs = configurations.filter((c) => checkedIds.has(c.id));
    const allEnabled = checkedConfigs.every((c) => c.isEnabled);
    setConfigurations((prev) =>
      prev.map((c) =>
        checkedIds.has(c.id) ? { ...c, isEnabled: !allEnabled, lastUpdated: new Date().toISOString() } : c
      )
    );
    setToastMessage(allEnabled ? `Disabled ${checkedIds.size} configurations` : `Enabled ${checkedIds.size} configurations`);
    setCheckedIds(new Set());
  }, [checkedIds, configurations]);

  // Close handler with toast for active non-default config (Fix 14)
  const handleClose = useCallback(() => {
    if (selectedId && selectedId !== 'config-default') {
      const sc = configurations.find((c) => c.id === selectedId);
      if (sc && !sc.isDefault) {
        setToastMessage('Configuration state saved. View reset to default.');
      }
    }
    onClose();
  }, [onClose, selectedId, configurations]);

  return (
    <>
      {/* Backdrop (Fix 13) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] sm:block"
            style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-[360px] z-[61] flex flex-col p-2 sm:p-3"
          >
            <div
              className="bg-card shadow-[0px_2px_9px_0px_rgba(0,0,0,0.55)] flex flex-col h-full"
              style={{ borderRadius: 'var(--radius)' }}
            >
              {/* Header */}
              <div
                data-demo="configurations-header"
                className="flex items-center justify-between border-b"
                style={{
                  padding: '14px 16px',
                  borderColor: '#C2C9DB',
                  borderTopLeftRadius: 'var(--radius)',
                  borderTopRightRadius: 'var(--radius)',
                }}
              >
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <Sliders className="size-4" style={{ color: '#8404B3' }} />
                  <p style={{ fontFamily: 'var(--font-family)', fontSize: '15px', fontWeight: 600, color: '#36415D' }}>
                    Configurations
                  </p>
                  <span
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: '11px',
                      color: '#868D9E',
                      backgroundColor: '#E9E9E9',
                      padding: '1px 7px',
                      borderRadius: '99px',
                      lineHeight: '16px',
                    }}
                  >
                    {configurations.length}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="hover:bg-foreground/5 transition-colors rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
                  style={{ color: '#868D9E' }}
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Search */}
              <div data-demo="configurations-search" style={{ padding: '8px 16px' }}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5" style={{ color: '#868D9E' }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or tag..."
                    data-demo="configurations-search-input"
                    className="w-full bg-white border outline-none min-h-[40px]"
                    style={{
                      borderRadius: '8px',
                      padding: '8px 12px 8px 32px',
                      fontFamily: 'var(--font-family)',
                      fontSize: '13px',
                      color: '#36415D',
                      borderColor: '#C2C9DB',
                    }}
                  />
                </div>
              </div>

              {/* Create Button */}
              <div style={{ padding: '4px 16px 8px' }}>
                <button
                  onClick={handleCreateConfiguration}
                  data-demo="configurations-create"
                  className="w-full flex items-center justify-center gap-2 rounded-button hover:opacity-90 transition-opacity min-h-[40px]"
                  style={{
                    fontFamily: 'var(--font-family)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'white',
                    backgroundColor: '#2F80ED',
                    padding: '8px 16px',
                  }}
                >
                  <Plus className="size-4" />
                  Create Configuration
                </button>
              </div>

              {/* Configuration List */}
              <div
                data-demo="configurations-list"
                className="flex-1 overflow-y-auto"
                style={{ padding: '0 8px' }}
              >
                {filteredConfigs.length > 0 ? (
                  filteredConfigs.map((config) => (
                    <ConfigItem
                      key={config.id}
                      config={config}
                      isActive={selectedId === config.id}
                      isChecked={checkedIds.has(config.id)}
                      onSelect={() => {
                        // GAP 1 (FR24): Auto-capture toast on config switch
                        if (selectedId && selectedId !== config.id && selectedId !== 'config-default') {
                          const prev = configurations.find((c) => c.id === selectedId);
                          if (prev && !prev.isDefault && !prev.isReadOnly) {
                            setToastMessage('Previous configuration state saved');
                          }
                        }
                        setSelectedId(config.id);
                      }}
                      onToggleEnabled={() => handleToggleEnabled(config.id)}
                      onDuplicate={() => handleDuplicate(config.id)}
                      onDelete={() => handleDelete(config.id)}
                      onRename={(name) => handleRename(config.id, name)}
                      onStartInlineRename={() => setSelectedId(config.id)}
                      onCopyLink={() => {
                        navigator.clipboard?.writeText(`${window.location.origin}/app/3d-viewer?config=${encodeURIComponent(config.name)}`);
                        setToastMessage('Link copied to clipboard');
                      }}
                      onToggleChecked={() => {
                        setCheckedIds((prev) => {
                          const next = new Set(prev);
                          if (next.has(config.id)) next.delete(config.id);
                          else next.add(config.id);
                          return next;
                        });
                      }}
                    />
                  ))
                ) : (
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{ padding: '32px 16px', gap: '8px' }}
                  >
                    <Sliders className="size-8" style={{ color: '#C2C9DB' }} />
                    <p style={{ fontFamily: 'var(--font-family)', fontSize: '13px', color: '#868D9E', textAlign: 'center' }}>
                      {searchQuery ? 'No configurations match your search' : 'No configurations yet'}
                    </p>
                  </div>
                )}
              </div>

              {/* Bulk Action Bar (Fix 4) */}
              {checkedIds.size >= 2 && (
                <div
                  className="flex items-center justify-between border-t"
                  style={{
                    borderColor: '#C2C9DB',
                    padding: '8px 16px',
                    backgroundColor: '#F5F5F5',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-family)', fontSize: '12px', fontWeight: 500, color: '#36415D' }}>
                    {checkedIds.size} selected
                  </span>
                  <div className="flex" style={{ gap: '6px' }}>
                    <button
                      onClick={handleBulkToggleEnabled}
                      className="flex items-center gap-1.5 rounded-button border hover:bg-white transition-colors min-h-[32px]"
                      style={{
                        fontFamily: 'var(--font-family)',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#36415D',
                        borderColor: '#C2C9DB',
                        padding: '4px 10px',
                      }}
                    >
                      Enable/Disable
                    </button>
                    <button
                      onClick={handleBulkDelete}
                      className="flex items-center gap-1.5 rounded-button hover:opacity-90 transition-opacity min-h-[32px]"
                      style={{
                        fontFamily: 'var(--font-family)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'white',
                        backgroundColor: '#FF1F1F',
                        padding: '4px 10px',
                      }}
                    >
                      <Trash2 className="size-3" />
                      Delete Selected
                    </button>
                  </div>
                </div>
              )}

              {/* Detail Section (when a non-default config is selected) */}
              {selectedConfig && (
                <div className="overflow-y-auto" style={{ maxHeight: '45%' }}>
                  <DetailSection
                    config={selectedConfig}
                    onUpdate={handleUpdateSelected}
                    onShowToast={setToastMessage}
                  />
                </div>
              )}

              {/* Footer: Import / Export (GAP 8 — FR33: label as Excel) */}
              <div
                data-demo="configurations-footer"
                className="border-t flex flex-col"
                style={{
                  borderColor: '#C2C9DB',
                  padding: '10px 16px',
                  gap: '6px',
                  borderBottomLeftRadius: 'var(--radius)',
                  borderBottomRightRadius: 'var(--radius)',
                }}
              >
                <div className="flex" style={{ gap: '8px' }}>
                  <button
                    onClick={handleImport}
                    data-demo="configurations-import"
                    className="flex-1 flex items-center justify-center gap-2 rounded-button border hover:bg-[#E9E9E9]/60 transition-colors min-h-[36px]"
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#36415D',
                      borderColor: '#C2C9DB',
                      padding: '6px 12px',
                    }}
                  >
                    <Upload className="size-3.5" style={{ color: '#868D9E' }} />
                    Import Excel
                  </button>
                  <button
                    onClick={handleExport}
                    data-demo="configurations-export"
                    className="flex-1 flex items-center justify-center gap-2 rounded-button border hover:bg-[#E9E9E9]/60 transition-colors min-h-[36px]"
                    style={{
                      fontFamily: 'var(--font-family)',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#36415D',
                      borderColor: '#C2C9DB',
                      padding: '6px 12px',
                    }}
                  >
                    <Download className="size-3.5" style={{ color: '#868D9E' }} />
                    Export Excel
                  </button>
                </div>
                <p style={{ fontFamily: 'var(--font-family)', fontSize: '10px', color: '#868D9E', textAlign: 'center', margin: 0 }}>
                  Export parts catalog with configuration visibility columns
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />
        )}
      </AnimatePresence>

      {/* Confirm Dialog */}
      <AnimatePresence>
        {confirmDialog && (
          <ConfirmDialog
            title={confirmDialog.title}
            message={confirmDialog.message}
            confirmLabel={confirmDialog.confirmLabel}
            confirmColor={confirmDialog.confirmColor}
            onConfirm={confirmDialog.onConfirm}
            onCancel={() => {
              setConfirmDialog(null);
              setImportConfirmPending(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
