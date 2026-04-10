'use client';

const NAV_LINKS = [
  ['#what',        'What it does'],
  ['#offering',    'Offering'],
  ['#who',         'Who we are'],
  ['#risks',       'Risks'],
  ['#faq',         'FAQ'],
];

export default function NavBar() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(12,12,14,0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: 66,
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <div
          style={{
            width: 32, height: 32,
            border: '1.5px solid var(--gold)',
            transform: 'rotate(45deg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ width: 14, height: 14, background: 'var(--gold)' }} />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: 19,
            fontWeight: 600,
            color: 'var(--text)',
            letterSpacing: '0.05em',
          }}
        >
          Iron<span style={{ color: 'var(--gold)' }}>Vault</span>
        </span>
      </a>

      {/* Links */}
      <ul
        style={{ display: 'flex', gap: 32, listStyle: 'none' }}
        className="vault-nav-links"
      >
        {NAV_LINKS.map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: 12,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#get-involved"
        style={{
          background: 'transparent',
          border: '1px solid rgba(201,168,76,0.4)',
          color: 'var(--text-muted)',
          padding: '9px 22px',
          fontSize: 12,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--gold)';
          e.currentTarget.style.color = 'var(--gold)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
          e.currentTarget.style.color = 'var(--text-muted)';
        }}
      >
        Get Involved
      </a>
    </nav>
  );
}
