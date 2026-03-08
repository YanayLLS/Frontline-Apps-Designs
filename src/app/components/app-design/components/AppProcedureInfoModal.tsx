import { useState } from 'react';
import { X, Globe, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProcedureInfo {
  id: string;
  projectId: string;
  name: string;
  type: 'procedure' | 'digital-twin';
  steps?: number;
  lastUpdated: string;
  version?: string;
  description?: string;
  thumbnail?: string;
  digitalTwinName?: string;
  configurationName?: string;
  modeName?: string;
}

interface AppProcedureInfoModalProps {
  procedure: ProcedureInfo;
  onClose: () => void;
  isContentCreator?: boolean;
}

export function AppProcedureInfoModal({ procedure, onClose, isContentCreator = true }: AppProcedureInfoModalProps) {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('English');

  const handleRunIn3D = () => {
    onClose();
    if (procedure.type === 'procedure') {
      // Procedure items open the procedure editor UI (3D scene + procedure step overlay)
      navigate(`/app/procedure-editor/${procedure.id}`);
    } else {
      // Digital twin items open the 3D viewer embedded in app
      navigate('/app/3d-viewer');
    }
  };

  const handleSettings = () => {
    // Open the web KB item modal (procedure editor with settings) in a new tab
    window.open(`/web/project/project-phoenix/knowledgebase?open=${procedure.id}`, '_blank');
  };

  const handleEdit = () => {
    // Open the procedure editor UI
    onClose();
    navigate(`/app/procedure-editor/${procedure.id}`);
  };

  const handleRunIn2D = () => {
    onClose();
    navigate('/app/3d-viewer');
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        <div
          className="pointer-events-auto flex flex-col items-center overflow-y-auto"
          style={{
            width: '548px',
            maxWidth: '100%',
            maxHeight: '90vh',
            backgroundColor: '#F5F5F5',
            border: '1px solid #C2C9DB',
            borderRadius: '10px',
            boxShadow: '0px 4px 14.2px 0px rgba(0,0,0,0.25)',
            padding: '24px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top bar: Language + Close */}
          <div className="flex items-center w-full" style={{ marginBottom: '8px' }}>
            {/* Language dropdown */}
            <button
              className="flex items-center gap-2 hover:bg-white/50 transition-colors"
              style={{ padding: '8px', borderRadius: '10px' }}
            >
              <Globe style={{ width: '16px', height: '16px', color: '#36415D' }} />
              <span style={{ fontSize: '14px', color: '#36415D', fontWeight: 'var(--font-weight-normal)' }}>
                {language}
              </span>
              <ChevronDown style={{ width: '16px', height: '16px', color: '#36415D' }} />
            </button>

            <div className="flex-1" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="flex items-center justify-center hover:bg-white/50 transition-colors"
              style={{ width: '40px', height: '40px', borderRadius: '10px' }}
            >
              <X style={{ width: '14px', height: '14px', color: '#36415D' }} />
            </button>
          </div>

          {/* Procedure thumbnail */}
          {procedure.thumbnail && (
            <div style={{ marginBottom: '12px' }}>
              <img
                src={procedure.thumbnail}
                alt={procedure.name}
                style={{ width: '274px', height: '154px', objectFit: 'cover', borderRadius: '8px' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          )}

          {/* Title */}
          <div className="w-full" style={{ marginBottom: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', lineHeight: '1.3' }}>
              {procedure.name}
            </h3>
          </div>

          {/* Meta info */}
          <div className="flex items-center w-full" style={{ marginBottom: '12px', gap: '10px', fontSize: '12px', color: '#36415D' }}>
            {procedure.steps && <span>{procedure.steps} steps estimated</span>}
            {procedure.steps && <span>|</span>}
            <span>Last updated {procedure.lastUpdated}</span>
            {procedure.version && <span>|</span>}
            {procedure.version && <span>Version {procedure.version}</span>}
          </div>

          {/* Content creator area */}
          {isContentCreator && (
            <div
              className="w-full"
              style={{
                backgroundColor: '#E9E9E9',
                borderRadius: '10px',
                padding: '12px',
                marginBottom: '12px',
              }}
            >
              <div className="flex items-center justify-between" style={{ marginBottom: '13px' }}>
                <span style={{ fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D' }}>
                  Content creator area
                </span>
                <button
                  onClick={handleSettings}
                  className="hover:underline"
                  style={{ fontSize: '12px', color: '#2F80ED', padding: '2px', borderRadius: '5px' }}
                >
                  Settings
                </button>
              </div>
              <div style={{ fontSize: '12px', color: '#36415D', marginBottom: '13px' }}>
                Last updated {procedure.lastUpdated} by User Name
              </div>
              <div className="flex items-center">
                <div className="flex-1" />
                <button
                  onClick={handleEdit}
                  className="flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  style={{
                    width: '110px',
                    padding: '12px',
                    backgroundColor: '#2F80ED',
                    borderRadius: '25px',
                    fontSize: '12px',
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          {/* Description */}
          {procedure.description && (
            <div className="w-full" style={{ marginBottom: '12px' }}>
              <p style={{ fontSize: '12px', color: '#36415D', lineHeight: '1.5' }}>
                {procedure.description}
              </p>
            </div>
          )}

          {/* Digital twin / Configuration / Mode rows */}
          <div className="flex flex-col w-full" style={{ gap: '8px', marginBottom: '8px' }}>
            {/* Digital twin row */}
            <div className="flex items-center" style={{ gap: '12px' }}>
              <span style={{ width: '100px', fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', flexShrink: 0 }}>
                Digital twin
              </span>
              <div
                className="flex-1 flex items-center"
                style={{ padding: '8px 12px', borderRadius: '10px' }}
              >
                <span style={{ fontSize: '14px', color: '#36415D' }}>
                  {procedure.digitalTwinName || 'Digital Twin Name'}
                </span>
              </div>
            </div>

            {/* Configuration row */}
            <div className="flex items-center" style={{ gap: '12px' }}>
              <span style={{ width: '100px', fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', flexShrink: 0 }}>
                Configuration
              </span>
              <button
                className="flex-1 flex items-center justify-between hover:bg-white/50 transition-colors"
                style={{ padding: '8px 12px', borderRadius: '10px' }}
              >
                <span style={{ fontSize: '14px', color: '#36415D' }}>
                  {procedure.configurationName || 'Select a configuration'}
                </span>
              </button>
            </div>

            {/* Mode row */}
            <div className="flex items-center" style={{ gap: '12px' }}>
              <span style={{ width: '100px', fontSize: '14px', fontWeight: 'var(--font-weight-bold)', color: '#36415D', flexShrink: 0 }}>
                Mode
              </span>
              <div
                className="flex-1 flex items-center"
                style={{ padding: '8px 12px', borderRadius: '10px' }}
              >
                <span style={{ fontSize: '14px', color: '#36415D' }}>
                  {procedure.modeName || '3D mode name'}
                </span>
              </div>
            </div>
          </div>

          {/* Run in 3D button */}
          <button
            onClick={handleRunIn3D}
            className="w-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            style={{
              padding: '12px',
              backgroundColor: '#2F80ED',
              borderRadius: '25px',
              fontSize: '12px',
              marginBottom: '10px',
            }}
          >
            Run in 3D
          </button>

          {/* Don't need a digital twin link */}
          <button
            onClick={handleRunIn2D}
            className="flex items-center justify-center hover:underline"
            style={{ fontSize: '12px', color: '#2F80ED', padding: '2px' }}
          >
            Don't need a digital twin?
          </button>
        </div>
      </div>
    </>
  );
}
