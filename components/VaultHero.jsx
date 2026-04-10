/**
 * VaultHero.jsx
 * Cinematic vault-door reveal hero for ironvaulttoken.com
 *
 * Dependencies:
 *   npm install gsap
 *
 * Drop into your Next.js app:
 *   import VaultHero from '@/components/VaultHero';
 *   // Use as the first section on your page.
 *
 * The component pins itself while the vault doors animate open,
 * then releases the scroll naturally. Everything below flows after.
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ─────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────── */
const LAUNCH_DATE = new Date('2026-11-01T09:00:00-07:00'); // 9 AM MST

function calcCountdown(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

/* ─────────────────────────────────────────────
   COUNTDOWN HOOK
───────────────────────────────────────────── */
function useCountdown(target) {
  const [t, setT] = useState(() => calcCountdown(target));
  useEffect(() => {
    const id = setInterval(() => setT(calcCountdown(target)), 1_000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function pad(n) { return String(n).padStart(2, '0'); }

/* ─────────────────────────────────────────────
   VAULT DOOR PANEL
   Each half of the vault door. Purely visual.
───────────────────────────────────────────── */
const BOLT_POSITIONS = [0.1, 0.23, 0.37, 0.5, 0.63, 0.77, 0.9];

function DoorPanel({ side }) {
  const L = side === 'left';

  return (
    <div
      className="absolute inset-y-0 overflow-hidden"
      style={{
        width: '50.2%', // slight overlap kills the hairline gap
        [L ? 'left' : 'right']: 0,
        background: L
          ? 'linear-gradient(to right, #090909 0%, #141419 25%, #1e1e28 60%, #252532 85%, #1a1a22 100%)'
          : 'linear-gradient(to left,  #090909 0%, #141419 25%, #1e1e28 60%, #252532 85%, #1a1a22 100%)',
        willChange: 'transform',
        zIndex: 30,
      }}
    >
      {/* ── Horizontal reinforcement ribs ── */}
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0"
          style={{
            top: `${(i / 24) * 100}%`,
            height: i % 4 === 0 ? '2px' : '1px',
            background: i % 4 === 0
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(255,255,255,0.025)',
          }}
        />
      ))}

      {/* ── Vertical channel near seam ── */}
      <div
        className="absolute inset-y-0"
        style={{
          [L ? 'right' : 'left']: 0,
          width: 48,
          background: L
            ? 'linear-gradient(to right, transparent, rgba(201,168,76,0.04), rgba(201,168,76,0.12))'
            : 'linear-gradient(to left,  transparent, rgba(201,168,76,0.04), rgba(201,168,76,0.12))',
        }}
      />

      {/* ── Outer frame rail ── */}
      <div
        className="absolute inset-y-0"
        style={{
          [L ? 'left' : 'right']: 0,
          width: 28,
          background: L
            ? 'linear-gradient(to right, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
            : 'linear-gradient(to left,  rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
          borderRight: L ? '1px solid rgba(255,255,255,0.06)' : undefined,
          borderLeft:  L ? undefined : '1px solid rgba(255,255,255,0.06)',
        }}
      />

      {/* ── Seam-edge locking bolts ── */}
      {BOLT_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${pos * 100}%`,
            [L ? 'right' : 'left']: 10,
            transform: 'translateY(-50%)',
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 32%, #3c3c50, #0e0e14)',
            border: '1.5px solid rgba(201,168,76,0.35)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.9), inset 0 1px 3px rgba(201,168,76,0.18)',
          }}
        >
          {/* bolt slot */}
          <div
            className="absolute"
            style={{
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%) rotate(45deg)',
              width: 8, height: 2,
              background: 'rgba(201,168,76,0.45)',
              borderRadius: 1,
            }}
          />
        </div>
      ))}

      {/* ── Far-edge frame bolts (smaller) ── */}
      {BOLT_POSITIONS.slice(1, -1).map((pos, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${pos * 100}%`,
            [L ? 'left' : 'right']: 10,
            transform: 'translateY(-50%)',
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 32%, #2e2e3e, #0e0e14)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 1px 6px rgba(0,0,0,0.7)',
          }}
        />
      ))}

      {/* ── Combination dial (left door only) ── */}
      {L && (
        <div
          className="absolute"
          style={{
            right: 64,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 96,
            height: 96,
          }}
        >
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full" style={{
            background: 'radial-gradient(circle at 38% 34%, #252532, #0d0d12)',
            border: '2px solid rgba(201,168,76,0.45)',
            boxShadow: '0 0 32px rgba(201,168,76,0.1), 0 4px 20px rgba(0,0,0,0.9), inset 0 2px 6px rgba(0,0,0,0.8)',
          }} />
          {/* Inner ring */}
          <div className="absolute rounded-full" style={{
            inset: 10,
            background: 'radial-gradient(circle at 40% 36%, #1e1e2a, #0a0a0f)',
            border: '1px solid rgba(201,168,76,0.22)',
          }} />
          {/* Tick marks */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                width: 2,
                height: i % 3 === 0 ? 8 : 5,
                background: i % 3 === 0 ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.25)',
                borderRadius: 1,
                transformOrigin: '50% 0',
                transform: `translate(-50%, -100%) rotate(${i * 30}deg) translateY(30px)`,
              }}
            />
          ))}
          {/* Center jewel */}
          <div className="absolute rounded-full" style={{
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 12, height: 12,
            background: 'radial-gradient(circle at 40% 35%, #e8c77d, #8a6228)',
            boxShadow: '0 0 10px rgba(201,168,76,0.6)',
          }} />
          {/* Indicator line */}
          <div className="absolute" style={{
            top: '50%', left: '50%',
            width: 2, height: 28,
            background: 'rgba(201,168,76,0.7)',
            transformOrigin: '50% 100%',
            transform: 'translate(-50%, -100%) rotate(37deg)',
            borderRadius: 1,
          }} />
          {/* Label */}
          <div className="absolute w-full text-center" style={{
            bottom: -22,
            fontSize: 9,
            letterSpacing: '0.2em',
            color: 'rgba(201,168,76,0.4)',
            fontFamily: 'var(--font-mono, monospace)',
            textTransform: 'uppercase',
          }}>
            IVT · CWV
          </div>
        </div>
      )}

      {/* ── Vertical handle bar (right door) ── */}
      {!L && (
        <div
          className="absolute"
          style={{
            left: 52,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 14,
            height: 72,
            borderRadius: 7,
            background: 'linear-gradient(to bottom, #3c3c50, #1a1a22, #3c3c50)',
            border: '1px solid rgba(201,168,76,0.35)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.9), 2px 0 4px rgba(255,255,255,0.04)',
          }}
        />
      )}

      {/* ── Embossed IVT mark (each door, inset) ── */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          [L ? 'left' : 'right']: '18%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 11,
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.04)',
          fontFamily: 'var(--font-sans, sans-serif)',
          fontWeight: 700,
          textTransform: 'uppercase',
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
          transform: `translateY(-50%) rotate(${L ? 0 : 180}deg)`,
        }}
      >
        COMMON WEALTH VENTURES · IRON VAULT TOKEN · IVT ·
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   COUNTDOWN UNIT
───────────────────────────────────────────── */
function CountUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 400,
          lineHeight: 1,
          color: '#C9A84C',
          letterSpacing: '-0.02em',
          textShadow: '0 0 40px rgba(201,168,76,0.3)',
          minWidth: '2ch',
          textAlign: 'center',
        }}
      >
        {pad(value)}
      </div>
      <div style={{
        fontSize: 10,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
        fontFamily: 'var(--font-mono, monospace)',
      }}>
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function VaultHero() {
  const wrapperRef = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);
  const seamGlow   = useRef(null);
  const contentRef = useRef(null);
  const scanRef    = useRef(null);

  const liveCountdown = useCountdown(LAUNCH_DATE);
  const [displayCountdown, setDisplayCountdown] = useState(() => calcCountdown(LAUNCH_DATE));
  const [catchupComplete, setCatchupComplete] = useState(false);
  const catchupStartedRef = useRef(false);

  useEffect(() => {
    if (!catchupStartedRef.current || catchupComplete) {
      setDisplayCountdown(liveCountdown);
    }
  }, [liveCountdown, catchupComplete]);

  function startCountdownCatchup() {
    if (catchupStartedRef.current) return;
    catchupStartedRef.current = true;

    const live = calcCountdown(LAUNCH_DATE);
    const boosted = {
      days: live.days + 5,
      hours: live.hours + (5 * 24),
      minutes: live.minutes + (5 * 60),
      seconds: live.seconds + (5 * 60),
    };
    const anim = { ...boosted };

    setDisplayCountdown(boosted);

    gsap.to(anim, {
      days: live.days,
      hours: live.hours,
      minutes: live.minutes,
      seconds: live.seconds,
      duration: 1.15,
      ease: 'expo.out',
      onUpdate: () => {
        setDisplayCountdown({
          days: Math.max(0, Math.ceil(anim.days)),
          hours: Math.max(0, Math.ceil(anim.hours)),
          minutes: Math.max(0, Math.ceil(anim.minutes)),
          seconds: Math.max(0, Math.ceil(anim.seconds)),
        });
      },
      onComplete: () => {
        setDisplayCountdown(calcCountdown(LAUNCH_DATE));
        setCatchupComplete(true);
      },
    });
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ── Master timeline, pinned until fully open ── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=300%',          // 3× viewport of scroll pinned
          pin: true,
          scrub: 1.8,
          anticipatePin: 1,
        },
      });

      /* ── 0 → 0.22 : Violent quake / pressure build ── */
      tl.set(wrapperRef.current, {
        transformOrigin: '50% 50%',
        force3D: true,
      });

      tl.to(
        wrapperRef.current,
        {
          keyframes: [
            { x: -20, y: 10, rotation: -0.6, duration: 0.015 },
            { x: 24, y: -12, rotation: 0.75, duration: 0.015 },
            { x: -28, y: 14, rotation: -0.9, duration: 0.015 },
            { x: 22, y: -10, rotation: 0.65, duration: 0.015 },
            { x: -30, y: 16, rotation: -1.0, duration: 0.015 },
            { x: 26, y: -14, rotation: 0.85, duration: 0.015 },
            { x: -16, y: 9, rotation: -0.5, duration: 0.014 },
            { x: 14, y: -8, rotation: 0.45, duration: 0.014 },
            { x: 0, y: 0, rotation: 0, duration: 0.026 },
          ],
          ease: 'none',
        },
        0,
      );

      tl.to(
        [leftRef.current, rightRef.current],
        {
          keyframes: [
            { x: (i) => (i === 0 ? -14 : 14), duration: 0.018 },
            { x: (i) => (i === 0 ? 10 : -10), duration: 0.018 },
            { x: (i) => (i === 0 ? -18 : 18), duration: 0.018 },
            { x: (i) => (i === 0 ? 12 : -12), duration: 0.018 },
            { x: (i) => (i === 0 ? -20 : 20), duration: 0.018 },
            { x: (i) => (i === 0 ? 9 : -9), duration: 0.018 },
            { x: 0, duration: 0.04 },
          ],
          ease: 'none',
        },
        0,
      );

      /* ── 0.24 → 0.36 : Aftershock so the whole screen still rattles ── */
      tl.to(
        wrapperRef.current,
        {
          keyframes: [
            { x: -12, y: 6, rotation: -0.35, duration: 0.016 },
            { x: 13, y: -7, rotation: 0.4, duration: 0.016 },
            { x: -10, y: 5, rotation: -0.3, duration: 0.016 },
            { x: 8, y: -4, rotation: 0.2, duration: 0.016 },
            { x: 0, y: 0, rotation: 0, duration: 0.03 },
          ],
          ease: 'none',
        },
        0.24,
      );

      /* ── 0.08 → 0.12 : Seam glow ignites ── */
      tl.fromTo(
        seamGlow.current,
        { scaleY: 0.2, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.06, ease: 'power2.out' },
        0.06,
      );

      /* ── 0.12 → 0.80 : Doors swing open ── */
      tl.to(
        leftRef.current,
        { x: '-100%', duration: 0.68, ease: 'power3.inOut' },
        0.12,
      );
      tl.to(
        rightRef.current,
        { x: '100%', duration: 0.68, ease: 'power3.inOut' },
        0.12,
      );

      /* ── 0.20 → 0.55 : Glow blooms then fades ── */
      tl.to(
        seamGlow.current,
        {
          keyframes: [
            { opacity: 1, scaleX: 3, duration: 0.2 },
            { opacity: 0, scaleX: 6, duration: 0.25 },
          ],
          ease: 'power1.inOut',
        },
        0.20,
      );

      /* ── 0.55 → 0.90 : Content rises in ── */
      const kids = Array.from(contentRef.current?.children ?? []);
      tl.fromTo(
        kids,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.06,
          duration: 0.35,
          ease: 'power2.out',
          onStart: startCountdownCatchup,
        },
        0.58,
      );

      /* ── 0.72 → 0.82 : Scanline sweep on content ── */
      tl.fromTo(
        scanRef.current,
        { top: '-5%', opacity: 0.6 },
        { top: '105%', opacity: 0, duration: 0.15, ease: 'none' },
        0.72,
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    /**
     * Outer wrapper — ScrollTrigger pins this entire div.
     * height: 100vh keeps layout correct; GSAP handles pinning.
     */
    <div
      ref={wrapperRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh' }}
    >
      {/* ── Ambient floor glow ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '40%',
          background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
          zIndex: 2,
        }}
      />

      {/* ── HERO CONTENT (revealed behind doors) ── */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        style={{ zIndex: 10 }}
      >
        {/* Vault mark */}
        <div
          style={{
            width: 64, height: 64,
            border: '1.5px solid rgba(201,168,76,0.5)',
            transform: 'rotate(45deg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 28,
            boxShadow: '0 0 24px rgba(201,168,76,0.12)',
          }}
        >
          <div style={{ width: 26, height: 26, background: 'rgba(201,168,76,0.25)', border: '1px solid rgba(201,168,76,0.5)' }} />
        </div>

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.7)',
          marginBottom: 20,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(201,168,76,0.4)' }} />
          Common Wealth Ventures · IVT Presale
          <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(201,168,76,0.4)' }} />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif, Georgia, serif)',
            fontSize: 'clamp(38px, 6vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.0,
            color: '#F0EDE6',
            marginBottom: 16,
            maxWidth: 800,
          }}
        >
          A platform access token.
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A84C' }}>Early access to a system still being built.</em>
        </h1>

        {/* Sub */}
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: 15,
          maxWidth: 480,
          lineHeight: 1.75,
          marginBottom: 40,
        }}>
          We're building something that doesn't exist yet.
          Some people want to see it first. Others want to be early.
          Both are valid.
        </p>

        {/* ── COUNTDOWN ── */}
        <div style={{ marginBottom: 44 }}>
          <div style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: 18,
          }}>
            Target launch — Nov 1, 2026 · not guaranteed
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'clamp(20px, 4vw, 52px)',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <CountUnit value={displayCountdown.days}    label="days"    />
            <div style={{ color: 'rgba(201,168,76,0.35)', fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1, paddingTop: 4 }}>:</div>
            <CountUnit value={displayCountdown.hours}   label="hours"   />
            <div style={{ color: 'rgba(201,168,76,0.35)', fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1, paddingTop: 4 }}>:</div>
            <CountUnit value={displayCountdown.minutes} label="minutes" />
            <div style={{ color: 'rgba(201,168,76,0.35)', fontSize: 'clamp(28px,4vw,56px)', lineHeight: 1, paddingTop: 4 }}>:</div>
            <CountUnit value={displayCountdown.seconds} label="seconds" />
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="#get-involved"
            style={{
              background: 'transparent',
              border: '1px solid #C9A84C',
              color: '#C9A84C',
              padding: '14px 36px',
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#0a0a0e'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A84C'; }}
          >
            See what's being built
          </a>
          <a
            href="#what"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.45)',
              padding: '14px 36px',
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: 13,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
          >
            What does IVT do?
          </a>
        </div>

        {/* Scanline effect */}
        <div
          ref={scanRef}
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: '-5%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6), transparent)',
            zIndex: 20,
            opacity: 0,
          }}
        />
      </div>

      {/* ── SEAM CENTER GLOW ── */}
      <div
        ref={seamGlow}
        className="absolute pointer-events-none"
        style={{
          top: 0,
          bottom: 0,
          left: '50%',
          width: 3,
          transform: 'translateX(-50%) scaleY(0)',
          background: 'linear-gradient(to bottom, transparent 5%, rgba(201,168,76,0.9) 20%, #fff 50%, rgba(201,168,76,0.9) 80%, transparent 95%)',
          boxShadow: '0 0 40px 10px rgba(201,168,76,0.5), 0 0 100px 40px rgba(201,168,76,0.15)',
          zIndex: 40,
          opacity: 0,
        }}
      />

      {/* ── LEFT DOOR ── */}
      <div ref={leftRef} className="absolute inset-0" style={{ width: '50.2%', zIndex: 30 }}>
        <DoorPanel side="left" />
      </div>

      {/* ── RIGHT DOOR ── */}
      <div ref={rightRef} className="absolute inset-0" style={{ width: '50.2%', left: 'auto', right: 0, zIndex: 30 }}>
        <DoorPanel side="right" />
      </div>

      {/* ── Scroll hint (fades once scroll begins) ── */}
      <div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
        style={{ zIndex: 50, opacity: 0.5 }}
      >
        <div style={{
          fontSize: 10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'var(--font-mono, monospace)',
        }}>
          Scroll to open
        </div>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)',
          animation: 'vaultPulse 1.6s ease-in-out infinite',
        }} />
      </div>

      {/* ── Keyframe for scroll hint ── */}
      <style>{`
        @keyframes vaultPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1);   }
          50%       { opacity: 0.8; transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
}
