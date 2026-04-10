'use client';

import { useState } from 'react';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
  'Outside United States',
];

const INITIAL = {
  full_name: '', email: '', phone: '', state: '', source: '',
  consent_tos: false, consent_risk: false, consent_sms: false,
};

/*
  GHL WEBHOOK — replace with your GoHighLevel webhook URL.
  Payload fields: full_name, email, phone, state, source,
                  consent_tos, consent_risk, consent_sms, timestamp, form_name
*/
const WEBHOOK_URL = '';

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label
        style={{
          display: 'block',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-dim)',
          marginBottom: 7,
        }}
      >
        {label}
        {required && ' *'}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: 'var(--surface-2)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text)',
  padding: '11px 14px',
  fontFamily: 'var(--font-sans, sans-serif)',
  fontSize: 14,
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none',
};

export default function GetInvolvedSection() {
  const [form, setForm]         = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.full_name || !form.email || !form.phone || !form.state) {
      setError('Please complete all required fields.');
      return;
    }
    if (!form.consent_tos || !form.consent_risk) {
      setError('Please check both required consent boxes to proceed.');
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const payload = {
      ...form,
      timestamp: new Date().toISOString(),
      form_name: 'IVT Info Call Request — ironvaulttoken.com',
    };

    setLoading(true);
    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch {
      // Show success regardless; webhook errors are non-fatal for the user
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  return (
    <section
      id="get-involved"
      className="vault-section"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border-subtle)' }}
    >
      <div className="vault-section-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="vault-cta-grid"
        >
          {/* Left copy */}
          <div>
            <div
              className="vault-section-label"
              style={{ fontFamily: 'var(--font-mono, monospace)' }}
            >
              Get Involved
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: 'clamp(34px, 5vw, 52px)',
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: 20,
              }}
            >
              No pressure.
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)' }}>
                Just information.
              </em>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 20 }}>
              You can request an informational call if you want to learn more. There is no
              requirement to purchase anything.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 12, color: 'var(--text-dim)',
                lineHeight: 1.7,
                padding: '16px 20px',
                border: '1px solid var(--border-subtle)',
                marginBottom: 32,
              }}
            >
              The call is a conversation — not a sales close. We&rsquo;ll walk through the project,
              answer your questions, and tell you what we don&rsquo;t know yet. You decide what to
              do from there.
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 24 }}>
              Prefer not to call? Two other ways to get information:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                {
                  icon: 'PDF',
                  title: 'Download the Project Overview',
                  sub: 'A plain-language summary of the concept, current status, and risks.',
                  href: '/overview-pdf',
                  linkText: 'Download PDF →',
                },
                {
                  icon: 'FAQ',
                  title: 'Read the FAQ',
                  sub: 'Honest answers to the most common questions, including the uncomfortable ones.',
                  href: '#faq',
                  linkText: 'Read FAQ →',
                },
              ].map(item => (
                <div
                  key={item.icon}
                  style={{
                    border: '1px solid var(--border-subtle)',
                    padding: '20px 24px',
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 12, color: 'var(--gold-dim)',
                      flexShrink: 0, marginTop: 2,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 4 }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>{item.sub}</span>
                    <a
                      href={item.href}
                      style={{
                        display: 'inline-block', marginTop: 10,
                        fontSize: 12, color: 'var(--gold)',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(201,168,76,0.3)',
                        paddingBottom: 1,
                      }}
                    >
                      {item.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            style={{
              background: 'var(--vault)',
              border: '1px solid var(--border)',
              padding: 40,
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div
                  style={{
                    width: 48, height: 48,
                    border: '1px solid var(--border)',
                    transform: 'rotate(45deg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'var(--gold)', fontSize: 18,
                  }}
                >
                  ◆
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif, Georgia, serif)',
                    fontSize: 26, marginBottom: 10,
                  }}
                >
                  Request received.
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                  A representative will follow up within one business day to schedule your call.
                </p>
                <p style={{ marginTop: 14, fontSize: 11, color: 'var(--text-dim)' }}>
                  Questions before then: 888-368-2502
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif, Georgia, serif)',
                    fontSize: 26, marginBottom: 6,
                  }}
                >
                  Request a Call
                </h3>
                <p
                  style={{
                    fontSize: 12, color: 'var(--text-dim)',
                    marginBottom: 32,
                    fontFamily: 'var(--font-mono, monospace)',
                    letterSpacing: '0.04em',
                  }}
                >
                  We&rsquo;ll follow up within one business day.
                </p>

                <Field label="Full Name" required>
                  <input
                    type="text"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    style={inputStyle}
                    required
                  />
                </Field>

                <Field label="Email Address" required>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    required
                  />
                </Field>

                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    style={inputStyle}
                    required
                  />
                </Field>

                <Field label="State of Residence" required>
                  <select
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    required
                  >
                    <option value="">Select state…</option>
                    {US_STATES.map(s => (
                      <option key={s} value={s} style={{ background: '#1E1E25' }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="How did you hear about IVT?">
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">Select…</option>
                    <option style={{ background: '#1E1E25' }}>Referred by someone</option>
                    <option style={{ background: '#1E1E25' }}>Social media</option>
                    <option style={{ background: '#1E1E25' }}>Online search</option>
                    <option style={{ background: '#1E1E25' }}>Advertisement</option>
                    <option style={{ background: '#1E1E25' }}>Other</option>
                  </select>
                </Field>

                {/* Consent */}
                <div
                  style={{
                    marginTop: 24, paddingTop: 20,
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex', flexDirection: 'column', gap: 14,
                  }}
                >
                  {[
                    {
                      name: 'consent_tos',
                      required: true,
                      label: (
                        <>
                          I have read the{' '}
                          <a href="/terms-of-service" style={{ color: 'rgba(201,168,76,0.7)' }}>
                            Terms of Service
                          </a>{' '}
                          and{' '}
                          <a href="/privacy-policy" style={{ color: 'rgba(201,168,76,0.7)' }}>
                            Privacy Policy
                          </a>
                          . I understand that IVT token purchases are speculative, final, and
                          non-refundable. *
                        </>
                      ),
                    },
                    {
                      name: 'consent_risk',
                      required: true,
                      label: (
                        <>
                          I have read the{' '}
                          <a href="#risks" style={{ color: 'rgba(201,168,76,0.7)' }}>
                            Risk Disclosures
                          </a>{' '}
                          below. I understand I may lose all funds used to purchase IVT. Nothing on
                          this site is investment advice. *
                        </>
                      ),
                    },
                    {
                      name: 'consent_sms',
                      required: false,
                      label:
                        'I agree to receive informational text messages from Common Wealth Ventures LLC. Message frequency varies. Reply STOP to opt out. Message & data rates may apply.',
                    },
                  ].map(item => (
                    <div key={item.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={form[item.name]}
                        onChange={handleChange}
                        required={item.required}
                        style={{
                          width: 15, height: 15, flexShrink: 0,
                          marginTop: 3, accentColor: 'var(--gold)',
                          cursor: 'pointer',
                        }}
                      />
                      <label style={{ fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.65 }}>
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>

                {error && (
                  <p
                    style={{
                      marginTop: 16, fontSize: 12,
                      color: '#F09595', lineHeight: 1.5,
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    background: loading ? 'rgba(201,168,76,0.6)' : 'var(--gold)',
                    color: 'var(--obsidian)',
                    border: 'none',
                    padding: 15,
                    fontFamily: 'var(--font-sans, sans-serif)',
                    fontSize: 13, fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginTop: 24,
                    transition: 'background 0.2s',
                  }}
                >
                  {loading ? 'Submitting…' : 'Submit Request →'}
                </button>

                <p style={{ marginTop: 16, fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.6 }}>
                  Submitting does not obligate you to purchase anything. Common Wealth Ventures LLC
                  · 16165 N. 83rd Ave, Peoria, AZ 85382 · 888-368-2502
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
