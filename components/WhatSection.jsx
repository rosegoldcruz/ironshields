const WHAT_ITEMS = [
  {
    status: 'Concept',
    type: 'concept',
    title: 'Platform Access',
    body: 'IVT is intended to provide access to features within the CWV platform, if and when those features are developed and launched.',
  },
  {
    status: 'Not Built',
    type: 'not-built',
    title: 'Internal Transaction Use',
    body: 'IVT may be used for transactional functions within platform systems currently in development. No live system exists today.',
  },
  {
    status: 'Not Built',
    type: 'not-built',
    title: 'Community Participation',
    body: 'Participation in community-level interactions and platform governance, if these systems are implemented. Currently undefined.',
  },
  {
    status: 'Concept',
    type: 'concept',
    title: 'Voluntary Participation Structures',
    body: 'Optional enrollment structures tied to platform activity are being explored. Legal framework, terms, and mechanics have not been finalized. No distributions are guaranteed.',
  },
  {
    status: 'Not Built',
    type: 'not-built',
    title: 'Future Ecosystem Features',
    body: 'Long-term product concepts including a digital finance layer are exploratory only. These may not be built. There is no committed timeline.',
  },
];

export default function WhatSection() {
  return (
    <section id="what" className="vault-section" style={{ background: 'var(--vault)' }}>
      <div className="vault-section-inner">
        <div className="vault-section-label" style={{ fontFamily: 'var(--font-mono, monospace)' }}>
          What IVT Actually Does
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="vault-what-grid"
        >
          {/* Left copy */}
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
              Honest about
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)' }}>
                what&rsquo;s built.
              </em>
            </h2>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}>
              This is an early-stage concept for a digital platform. Most components are not built
              yet. The list below reflects what IVT is <em>intended</em> to be used for — with a
              clear status on each item.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}>
              We are not going to tell you this is a finished product. It is not. We are telling you
              what we are working toward, and letting you decide whether to participate at this stage.
            </p>

            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border-subtle)',
                padding: '20px 24px',
                marginTop: 28,
                fontSize: 13,
                color: 'var(--text-dim)',
                lineHeight: 1.75,
                fontFamily: 'var(--font-mono, monospace)',
              }}
            >
              IVT has no confirmed contract address, no published whitepaper, and no live platform.
              These details will be published before any exchange launch. Do not participate based on
              implied features that do not yet exist.
            </div>
          </div>

          {/* Right item list */}
          <div style={{ border: '1px solid var(--border-subtle)' }}>
            {WHAT_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '24px 28px',
                  borderBottom:
                    i < WHAT_ITEMS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: 20,
                  alignItems: 'start',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    padding: '4px 10px',
                    border: '1px solid',
                    whiteSpace: 'nowrap',
                    marginTop: 2,
                    color: item.type === 'concept' ? 'var(--gold-dim)' : 'var(--text-dim)',
                    borderColor: item.type === 'concept' ? 'var(--gold-dim)' : 'var(--text-dim)',
                  }}
                >
                  {item.status}
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--text)',
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </strong>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
