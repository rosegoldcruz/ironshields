export default function RiskBanner() {
  return (
    <div
      style={{
        background: 'var(--danger-bg)',
        borderBottom: '1px solid rgba(226,75,74,0.3)',
        padding: '10px 24px',
        textAlign: 'center',
        fontSize: 12,
        color: '#F09595',
        letterSpacing: '0.02em',
        lineHeight: 1.5,
      }}
    >
      <strong style={{ color: '#F7C1C1' }}>RISK WARNING:</strong>{' '}
      IVT is a speculative digital asset. You may lose everything you spend. This is not
      financial advice. No returns are guaranteed. Read full disclosures before proceeding.
    </div>
  );
}
