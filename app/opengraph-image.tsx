import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Jair Molina Arce — Embedded Systems & Advanced Technology Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'linear-gradient(rgba(0,194,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Radar glow */}
        <div style={{
          position: 'absolute', right: 120, top: 80,
          width: 320, height: 320,
          borderRadius: '50%',
          border: '1px solid rgba(0,194,255,0.15)',
          boxShadow: '0 0 80px rgba(0,194,255,0.06)',
        }} />
        <div style={{
          position: 'absolute', right: 200, top: 160,
          width: 160, height: 160,
          borderRadius: '50%',
          border: '1px solid rgba(0,194,255,0.2)',
        }} />

        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 40, height: 40,
            border: '1px solid rgba(0,194,255,0.5)',
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#00C2FF', fontSize: 14, fontWeight: 600, fontFamily: 'monospace' }}>JM</span>
          </div>
          <span style={{ color: 'rgba(0,194,255,0.8)', fontSize: 13, fontFamily: 'monospace', letterSpacing: 3 }}>
            EMBEDDED SYSTEMS · AEROSPACE · IoT · FIRMWARE
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ color: 'rgba(0,194,255,0.6)', fontSize: 14, fontFamily: 'monospace' }}>
            // engineer profile
          </div>
          <h1 style={{ color: '#F0F0F0', fontSize: 72, fontWeight: 600, margin: 0, lineHeight: 1.1 }}>
            Jair Molina Arce
          </h1>
          <p style={{ color: '#888', fontSize: 28, margin: 0, fontWeight: 300 }}>
            Embedded Systems & Advanced Technology Engineer
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
            {['ESP32 · STM32', 'IAC 2024 Milan', 'IPN Researcher', 'CO.DE Aerospace'].map((tag) => (
              <div key={tag} style={{
                color: '#00C2FF', fontSize: 13, fontFamily: 'monospace',
                border: '1px solid rgba(0,194,255,0.25)',
                borderRadius: 4, padding: '4px 12px',
                background: 'rgba(0,194,255,0.05)',
              }}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ color: '#333', fontSize: 13, fontFamily: 'monospace' }}>
            github.com/smookymolina · ORCID: 0009-0009-6732-8100
          </span>
          <span style={{ color: 'rgba(0,194,255,0.4)', fontSize: 13, fontFamily: 'monospace' }}>
            Mexico City, MX
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
