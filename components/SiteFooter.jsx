const FOOTER_NAV = [
  ['#what',         'What IVT Does'],
  ['#offering',     'Offering Terms'],
  ['#who',          'Who We Are'],
  ['#get-involved', 'Get Involved'],
  ['#risks',        'Risk Disclosures'],
  ['#faq',          'FAQ'],
];

const FOOTER_LEGAL = [
  ['/terms-of-service',  'Terms of Service'],
  ['/privacy-policy',    'Privacy Policy'],
  ['/risk-disclosures',  'Full Risk Disclosures'],
  ['/referral-terms',    'Referral Program Terms'],
];

const FOOTER_CONTACT = [
  { href: 'tel:8883682502',                      label: '888-368-2502' },
  { href: 'mailto:info@ironvaulttoken.com',       label: 'info@ironvaulttoken.com' },
  { href: null,                                   label: '16165 N. 83rd Ave' },
  { href: null,                                   label: 'Peoria, AZ 85382' },
  { href: 'https://ecorp.azcc.gov', external: true, label: 'Verify LLC (ACC) →' },
];

function FooterLink({ href, external, label }) {
  return (
    <li style={{ marginBottom: 9 }}>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          style={{ fontSize: 13, color: 'var(--text-dim)', textDecoration: 'none' }}
        >
          {label}
        </a>
      ) : (
        <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>{label}</span>
      )}
    </li>
  );
}

export default function SiteFooter() {
  return (
    <footer
      style={{
        background: '#070709',
        borderTop: '1px solid var(--border-subtle)',
        padding: '56px 48px 32px',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 40,
          paddingBottom: 40,
          borderBottom: '1px solid var(--border-subtle)',
        }}
        className="vault-footer-top"
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 26, height: 26,
                border: '1.5px solid var(--gold)',
                transform: 'rotate(45deg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <div style={{ width: 11, height: 11, background: 'var(--gold)' }} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: 16, fontWeight: 600,
                color: 'var(--text)', letterSpacing: '0.05em',
              }}
            >
              Iron<span style={{ color: 'var(--gold)' }}>Vault</span> Token
            </span>
          </div>
          <p
            style={{
              fontSize: 12, color: 'var(--text-dim)',
              marginTop: 14, lineHeight: 1.8, maxWidth: 280,
            }}
          >
            IVT is a speculative digital asset by Common Wealth Ventures LLC. Not financial advice.
            Not a securities offering. No expectation of profit. You may lose everything.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 10, letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)', marginBottom: 14,
            }}
          >
            Navigate
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {FOOTER_NAV.map(([href, label]) => (
              <FooterLink key={href} href={href} label={label} />
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 10, letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)', marginBottom: 14,
            }}
          >
            Legal
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {FOOTER_LEGAL.map(([href, label]) => (
              <FooterLink key={href} href={href} label={label} />
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 10, letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)', marginBottom: 14,
            }}
          >
            Contact
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {FOOTER_CONTACT.map((item, i) => (
              <FooterLink key={i} href={item.href} external={item.external} label={item.label} />
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            fontSize: 11, color: 'var(--text-dim)',
            lineHeight: 1.85, maxWidth: 700,
          }}
        >
          <strong style={{ color: 'var(--text-muted)' }}>DISCLAIMER:</strong> Iron Vault Token
          (IVT) is a speculative digital asset in pre-launch phase. Nothing on this site is
          financial, investment, legal, or tax advice. Common Wealth Ventures LLC is not a registered
          investment advisor or broker-dealer. IVT is not a registered security. There is no
          expectation of profit. You may lose all funds used to purchase IVT. All purchases are final
          and non-refundable. Offering terms, prices, and timelines are subject to change. Platform
          features described are conceptual and not yet built. Exchange listing is not confirmed or
          guaranteed.
          <br />
          <br />
          &copy; 2026 Common Wealth Ventures LLC &middot; All rights reserved &middot; Arizona LLC
          Doc No. 23883142 &middot;{' '}
          <a href="/terms-of-service" style={{ color: 'var(--text-dim)' }}>Terms</a>
          {' · '}
          <a href="/privacy-policy" style={{ color: 'var(--text-dim)' }}>Privacy</a>
        </div>
        <div
          style={{
            fontSize: 11, color: 'var(--text-dim)',
            textAlign: 'right', flexShrink: 0,
            fontFamily: 'var(--font-mono, monospace)',
            lineHeight: 1.7,
          }}
          className="vault-footer-meta"
        >
          IVT · ironvaulttoken.com
          <br />
          Common Wealth Ventures LLC
          <br />
          Peoria, AZ 85382
        </div>
      </div>
    </footer>
  );
}
