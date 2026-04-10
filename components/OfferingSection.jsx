const TERMS_ROWS = [
  { key: 'Token name',            value: 'Iron Vault Token',                    uncertain: false },
  { key: 'Ticker',                value: 'IVT',                                  uncertain: false },
  {
    key: 'Initial offering price',
    value: '$0.001 per token',
    sub: 'Subject to change prior to launch',
    uncertain: false,
  },
  {
    key: 'Presale allocation',
    value: '250,000 IVT',
    sub: 'Per participant, terms subject to change',
    uncertain: false,
  },
  { key: 'Exchange listing',      value: 'Not confirmed.\nNo listing is guaranteed.',        uncertain: true },
  { key: 'Target launch window',  value: '2026 — target only.\nNo timeline is guaranteed.', uncertain: true },
  { key: 'Contract address',      value: 'Not yet published.\nWill be disclosed pre-launch.', uncertain: true },
  { key: 'Whitepaper',            value: 'In preparation.',                      uncertain: true },
  { key: 'Purchases',             value: 'Final. Non-refundable.',               danger: true },
];

export default function OfferingSection() {
  return (
    <section id="offering" className="vault-section">
      <div className="vault-section-inner">
        <div
          className="vault-section-label"
          style={{ fontFamily: 'var(--font-mono, monospace)' }}
        >
          Presale Offering
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="vault-terms-grid"
        >
          {/* Copy */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: 28,
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              What you&rsquo;re
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>actually buying.</em>
            </h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 16 }}>
              The presale offers IVT tokens at an initial offering price. These are utility tokens —
              not shares, not securities, not a guaranteed income product.
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 16 }}>
              The parameters below are current as of this writing. They are subject to change.
              Nothing here is a commitment to any specific outcome.
            </p>
            <div
              style={{
                background: 'var(--surface-2)',
                borderLeft: '2px solid var(--gold-dim)',
                padding: '16px 20px',
                fontSize: 13,
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                marginTop: 24,
              }}
            >
              Purchasing presale tokens does not guarantee exchange listing, liquidity, or any
              financial return. All purchases are final and non-refundable. Only purchase an amount
              you are fully prepared to lose.
            </div>
          </div>

          {/* Table */}
          <div style={{ border: '1px solid var(--border)' }}>
            {TERMS_ROWS.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                  padding: '18px 24px',
                  borderBottom:
                    i < TERMS_ROWS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    flexShrink: 0,
                  }}
                >
                  {row.key}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    textAlign: 'right',
                    lineHeight: 1.5,
                    maxWidth: 200,
                    color: row.danger
                      ? '#F09595'
                      : row.uncertain
                      ? 'var(--text-dim)'
                      : 'var(--text-muted)',
                    fontStyle: row.uncertain ? 'italic' : 'normal',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {row.value}
                  {row.sub && (
                    <>
                      <br />
                      <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>{row.sub}</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
