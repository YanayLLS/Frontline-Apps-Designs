import { useState } from 'react';
import { QrCode, Plus, Download, Copy, MoreVertical } from 'lucide-react';

interface QRCodeItem {
  id: string;
  name: string;
  url: string;
  scans: number;
  createdAt: string;
}

const mockQRCodes: QRCodeItem[] = [
  { id: '1', name: 'Product Demo', url: 'https://demo.example.com', scans: 847, createdAt: '2026-01-15' },
  { id: '2', name: 'Support Portal', url: 'https://support.example.com', scans: 1203, createdAt: '2026-01-10' },
  { id: '3', name: 'Training Materials', url: 'https://training.example.com', scans: 532, createdAt: '2026-02-01' },
];

export function StaticQRCodesPage() {
  const [qrCodes] = useState<QRCodeItem[]>(mockQRCodes);

  return (
    <div className="flex flex-col h-full bg-background" style={{ fontFamily: 'var(--font-family)' }}>
      <div className="border-b border-border bg-card px-6 py-4">
        <h1 className="text-foreground mb-1" style={{
          fontSize: 'var(--text-h2)',
          fontWeight: 'var(--font-weight-bold)',
          fontFamily: 'var(--font-family)'
        }}>
          Static QR Codes
        </h1>
        <p className="text-muted" style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-family)' }}>
          Create and manage QR codes for your workspace
        </p>
      </div>

      <div className="border-b border-border bg-card px-6 py-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-[var(--radius)] hover:bg-primary/90 transition-colors" style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-bold)',
          fontFamily: 'var(--font-family)'
        }}>
          <Plus size={16} />
          <span>Create QR Code</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
        <div className="space-y-3">
          {qrCodes.map((qr) => (
            <div key={qr.id} className="bg-card border border-border rounded-[var(--radius)] p-5 hover:border-primary/50 transition-colors" style={{ boxShadow: 'var(--elevation-sm)' }}>
              <div className="flex items-center gap-4">
                {/* QR Code Preview */}
                <div className="w-20 h-20 rounded-[var(--radius)] bg-secondary flex items-center justify-center flex-shrink-0">
                  <QrCode size={48} className="text-foreground" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground mb-1" style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-bold)',
                    fontFamily: 'var(--font-family)'
                  }}>
                    {qr.name}
                  </h3>
                  <p className="text-muted mb-2 truncate" style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-family)' }}>
                    {qr.url}
                  </p>
                  <div className="flex items-center gap-4 text-muted" style={{ fontSize: 'var(--text-sm)', fontFamily: 'var(--font-family)' }}>
                    <span>{qr.scans} scans</span>
                    <span>•</span>
                    <span>Created {qr.createdAt}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-secondary rounded-[var(--radius)] transition-colors" title="Copy URL">
                    <Copy size={18} className="text-muted" />
                  </button>
                  <button className="p-2 hover:bg-secondary rounded-[var(--radius)] transition-colors" title="Download">
                    <Download size={18} className="text-muted" />
                  </button>
                  <button className="p-2 hover:bg-secondary rounded-[var(--radius)] transition-colors">
                    <MoreVertical size={18} className="text-muted" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
