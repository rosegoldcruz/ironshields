const ENTITY_ROWS = [
  { label: 'Status',      value: null,                      badge: true },
  { label: 'Filed',       value: 'September 15, 2025' },
  { label: 'Document no.', value: '23883142',               mono: true },
  { label: 'Address',     value: '16165 N. 83rd Avenue\nPeoria, AZ 85382', multiline: true },
  { label: 'Phone',       value: '888-368-2502',            href: 'tel:8883682502' },
  { label: 'Email',       value: 'info@ironvaulttoken.com', href: 'mailto:info@ironvaulttoken.com' },
  { label: 'Verify (AZ ACC)', value: 'ecorp.azcc.gov →',   href: 'https://ecorp.azcc.gov', external: true, gold: true },
];

export default function WhoSection() {
  return (
    <section id="who" className="vault-section" style={{ background: 'var(--vault)' }}>
      <div className="vault-section-inner">
        <div
          className="vault-section-label"
          style={{ fontFamily: 'var(--font-mono, monospace)' }}
        >
          Who Is Building This
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="vault-who-grid"
        >
          {/* Copy */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: 'clamp(34px, 5vw, 52px)',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              An early-stage
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)' }}>
                Arizona company.
              </em>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 16 }}>
              This project is being developed by Common Wealth Ventures LLC, an
              Arizona-registered entity formed in September 2025. The project is early-stage and
              currently in development.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 16 }}>
              We are not going to present this as an established institution with a long track record.
              We don&rsquo;t have one. What we have is a registered entity, a clear concept, and a
              team actively working on building it.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 16 }}>
              If you want to speak with someone directly, call us. We answer questions honestly
              including the ones about what isn&rsquo;t done yet.
            </p>
            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border-subtle)',
                padding: '20px 24px',
                fontSize: 13,
                color: 'var(--text-dim)',
                lineHeight: 1.75,
                marginTop: 24,
              }}
            >
              CWV was formed in 2025. We have limited operating history. Assume we are building from
              scratch. Because we are.
            </div>
          </div>

          {/* Entity card */}
          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: 36,
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 28,
                paddingBottom: 24,
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  width: 48, height: 48,
                  border: '1px solid var(--border)',
                  transform: 'rotate(45deg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 20, height: 20,
                    background: 'var(--gold-dim)',
                    transform: 'rotate(0deg)',
                  }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif, Georgia, serif)',
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  Common Wealth Ventures LLC
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono, monospace)',
                    letterSpacing: '0.06em',
                    marginTop: 4,
                  }}
                >
                  Arizona Limited Liability Company
                </div>
              </div>
            </div>

            {/* Rows */}
            {ENTITY_ROWS.map((row, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 0',
                  borderBottom: i < ENTITY_ROWS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: row.multiline ? 'flex-start' : 'center',
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    flexShrink: 0,
                  }}
                >
                  {row.label}
                </span>

                {row.badge ? (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      color: '#5DCAA5',
                      border: '1px solid rgba(93,202,165,0.3)',
                      padding: '3px 10px',
                    }}
                  >
                    <span
                      style={{
                        width: 5, height: 5,
                        borderRadius: '50%',
                        background: '#5DCAA5',
                        display: 'block',
                      }}
                    />
                    Active
                  </span>
                ) : row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? '_blank' : undefined}
                    rel={row.external ? 'noopener noreferrer' : undefined}
                    style={{
                      fontSize: row.gold ? 12 : 13,
                      color: row.gold ? 'rgba(201,168,76,0.7)' : 'var(--text-muted)',
                      textDecoration: 'none',
                      textAlign: 'right',
                    }}
                  >
                    {row.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: row.mono ? 12 : 13,
                      color: 'var(--text-muted)',
                      textAlign: 'right',
                      whiteSpace: 'pre-line',
                      fontFamily: row.mono ? 'var(--font-mono, monospace)' : undefined,
                    }}
                  >
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
