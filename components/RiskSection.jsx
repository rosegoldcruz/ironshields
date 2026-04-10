const RISK_CARDS = [
  {
    title: 'You May Lose Everything',
    body: 'IVT is a speculative digital asset in pre-launch phase. You may lose the entire amount you spend. Do not participate with funds you need or cannot afford to lose completely.',
  },
  {
    title: 'No Guaranteed Returns',
    body: 'There are no guaranteed returns, profits, passive income, or financial outcomes of any kind from holding IVT tokens. There is no expectation of profit built into this offering.',
  },
  {
    title: 'No Exchange Listing Guarantee',
    body: 'IVT may never be listed on any cryptocurrency exchange. Presale tokens may have no secondary market. All purchases are final regardless of whether a listing occurs.',
  },
  {
    title: 'Platform May Not Be Built',
    body: 'The CWV platform is in early development. Features described on this site are concepts and intentions — not built products. The platform may never launch or may launch in a substantially different form.',
  },
  {
    title: 'Participation Structures Not Finalized',
    body: 'Any optional participation or distribution structures are exploratory. Legal structure, terms, payout mechanics, and documentation have not been finalized. Nothing is guaranteed.',
  },
  {
    title: 'Early-Stage Company Risk',
    body: 'Common Wealth Ventures LLC was formed in September 2025. This is a new company with limited operating history. Key milestones may not be achieved. The company may fail.',
  },
  {
    title: 'Regulatory Risk',
    body: 'Crypto asset laws are changing rapidly. CWV or IVT may face regulatory action that restricts or halts operations. Verify whether participation is legal in your jurisdiction before proceeding.',
  },
  {
    title: 'All Purchases Are Final',
    body: 'Token purchases are non-refundable. There are no buybacks, refunds, or redemptions available. Once you purchase, CWV is under no obligation to return any funds.',
  },
];

export default function RiskSection() {
  return (
    <section
      id="risks"
      className="vault-section"
      style={{
        borderTop: '1px solid rgba(226,75,74,0.2)',
        borderBottom: '1px solid rgba(226,75,74,0.2)',
      }}
    >
      <div className="vault-section-inner">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <div
            style={{
              width: 40, height: 40,
              border: '1px solid rgba(226,75,74,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--danger)',
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 16, fontWeight: 500,
              flexShrink: 0,
            }}
          >
            !
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif, Georgia, serif)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#F09595',
              margin: 0,
            }}
          >
            Risk Disclosures
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            background: 'rgba(226,75,74,0.1)',
            border: '1px solid rgba(226,75,74,0.15)',
            marginBottom: 32,
          }}
          className="vault-risk-grid"
        >
          {RISK_CARDS.map((card, i) => (
            <div
              key={i}
              style={{ background: 'var(--danger-bg)', padding: '24px 28px' }}
            >
              <h4
                style={{
                  fontSize: 13, fontWeight: 500,
                  color: '#F7C1C1',
                  marginBottom: 8,
                  letterSpacing: '0.02em',
                }}
              >
                {card.title}
              </h4>
              <p style={{ fontSize: 13, color: '#C07070', lineHeight: 1.72 }}>{card.body}</p>
            </div>
          ))}
        </div>

        {/* Full statement */}
        <div
          style={{
            background: 'rgba(226,75,74,0.04)',
            border: '1px solid rgba(226,75,74,0.1)',
            padding: '28px 32px',
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 14 }}>
            <strong style={{ color: 'var(--text-muted)' }}>Full Risk Statement:</strong> Iron Vault
            Token (IVT) is a speculative digital asset in pre-launch phase. Nothing on this website
            constitutes financial, investment, legal, or tax advice. Common Wealth Ventures LLC is
            not a registered investment advisor, broker-dealer, or securities issuer. IVT is not a
            registered security. There is no expectation of profit.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 14 }}>
            Participation involves substantial risk of total loss. Any scenarios, examples, or
            descriptions of potential platform features are conceptual only and do not represent
            predictions, promises, or commitments to any outcome. All offering terms, prices,
            timelines, and features are subject to change without notice prior to any launch.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: 14 }}>
            By participating, you represent that you are of legal age in your jurisdiction, that you
            have independently evaluated the risks, that you have not relied on any CWV
            communications as financial advice, and that you are prepared for a total loss of your
            participation amount.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.85 }}>
            <strong style={{ color: 'var(--text-muted)' }}>Jurisdictional notice:</strong> This
            offering may not be available in all U.S. states or countries. It is solely your
            responsibility to determine whether participation is lawful in your jurisdiction. CWV
            makes no representation that this offering is appropriate or legally available in your
            location.
          </p>
        </div>
      </div>
    </section>
  );
}
