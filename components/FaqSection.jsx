'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What exactly am I buying?',
    a: 'You are purchasing IVT utility tokens at the initial presale price. These tokens are intended for use within the CWV platform — a digital system currently under development. You are not buying shares, securities, or an income product. The platform is not live. Full technical documentation, contract address, and tokenomics will be published before any exchange launch.',
  },
  {
    q: 'Is there any chance I\'ll make money from this?',
    a: 'This is a speculative digital asset. We cannot predict or guarantee any financial outcome. There is no built-in expectation of profit. Like any early-stage crypto token, the value could go to zero. Do not participate with funds you need or cannot afford to lose. The offering is for platform access utility — not investment returns.',
  },
  {
    q: 'You mention optional participation structures — what does that mean exactly?',
    a: 'We are exploring optional enrollment structures tied to platform activity. The legal structure, documentation, mechanics, and terms have not been finalized. Nothing about these structures is guaranteed, confirmed, or operational. We will publish full details when and if these systems are developed, reviewed by legal counsel, and ready to launch. Do not factor unfinalized features into any participation decision.',
  },
  {
    q: 'Will IVT be listed on exchanges?',
    a: 'There is no confirmed exchange listing. The 2026 window referenced is a development target, not a commitment. Many early-stage token projects do not achieve exchange listings. If IVT is never listed, presale tokens may have no liquid secondary market. All purchases are final regardless of whether a listing occurs.',
  },
  {
    q: 'I\'ve seen other "Iron Vault" or "IVT" tokens online — are those the same?',
    a: 'No. There are unrelated projects using similar names. The IVT offered at ironvaulttoken.com is exclusively the product of Common Wealth Ventures LLC (Peoria, AZ). We have not published a contract address yet — any currently circulating IVT contract addresses belong to different, unaffiliated projects. Verify all details through official CWV channels only: ironvaulttoken.com or 888-368-2502.',
  },
  {
    q: 'Can I get a refund?',
    a: 'No. All token purchases are final and non-refundable. This is a firm condition of participation and is stated in our Terms of Service. Please only purchase what you can afford to lose permanently, and please complete the information call first so you fully understand what you are buying.',
  },
  {
    q: 'Do I have to get on a call to learn more?',
    a: 'No. The call is optional. You can download the project overview PDF or read through this site and the FAQ at your own pace. If you want to ask questions directly, call us at 888-368-2502. There is no pressure and no requirement to purchase anything at any point.',
  },
  {
    q: 'How do I verify that Common Wealth Ventures LLC is a real company?',
    a: 'Common Wealth Ventures LLC is an active Arizona LLC, document number 23883142, filed September 15, 2025. You can verify this directly at the Arizona Corporation Commission public records portal: ecorp.azcc.gov. We encourage you to do this before participating.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i));
  }

  return (
    <section id="faq" className="vault-section">
      <div className="vault-section-inner">
        <div
          className="vault-section-label"
          style={{ fontFamily: 'var(--font-mono, monospace)' }}
        >
          Frequently Asked Questions
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
          Honest answers
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)' }}>
            to hard questions.
          </em>
        </h2>

        <p
          style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            maxWidth: 560,
            lineHeight: 1.85,
            marginBottom: 52,
          }}
        >
          Including the ones most projects avoid.
        </p>

        <div
          style={{
            border: '1px solid var(--border-subtle)',
            maxWidth: 760,
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: i < FAQS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    color: isOpen ? 'var(--gold)' : 'var(--text)',
                    textAlign: 'left',
                    padding: '22px 28px',
                    fontFamily: 'var(--font-sans, sans-serif)',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      color: 'var(--text-dim)',
                      fontSize: 11,
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                    }}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '18px 28px 22px',
                      fontSize: 13,
                      color: 'var(--text-muted)',
                      lineHeight: 1.8,
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
