import VaultHero          from '@/components/VaultHero';
import RiskBanner         from '@/components/RiskBanner';
import NavBar             from '@/components/NavBar';
import WhatSection        from '@/components/WhatSection';
import OfferingSection    from '@/components/OfferingSection';
import WhoSection         from '@/components/WhoSection';
import GetInvolvedSection from '@/components/GetInvolvedSection';
import RiskSection        from '@/components/RiskSection';
import FaqSection         from '@/components/FaqSection';
import SiteFooter         from '@/components/SiteFooter';

export const metadata = {
  title: 'Iron Vault Token | IVT — Common Wealth Ventures LLC',
  description:
    'Iron Vault Token (IVT) is a platform access token for a system currently under development. There is no expectation of profit. Crypto assets are speculative and high-risk.',
};

export default function IronVaultPage() {
  return (
    <>
      <RiskBanner />
      <NavBar />

      {/* ── Vault door reveal hero (scroll-driven) ── */}
      <VaultHero />

      {/* ── What IVT Actually Does ── */}
      <WhatSection />
      <hr className="vault-divider" />

      {/* ── Presale Offering ── */}
      <OfferingSection />
      <hr className="vault-divider" />

      {/* ── Who Is Building This ── */}
      <WhoSection />
      <hr className="vault-divider" />

      {/* ── Get Involved / Contact Form ── */}
      <GetInvolvedSection />
      <hr className="vault-divider" />

      {/* ── Risk Disclosures ── */}
      <RiskSection />
      <hr className="vault-divider" />

      {/* ── FAQ ── */}
      <FaqSection />

      <SiteFooter />
    </>
  );
}
