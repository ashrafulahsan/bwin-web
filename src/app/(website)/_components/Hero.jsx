'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button, Icon } from '@/components/ui';
import { routes } from '@/config/site.config';
import { accreditationPartners } from '../_data/accreditation-partners';

function HeroVisual() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });
  const t = (mx, my, r) => ({
    transform: `translate(${pos.x * mx}px, ${pos.y * my}px)` + (r ? ` rotate(${pos.x * r}deg)` : ''),
  });

  return (
    <div className="hero-visual" ref={ref} onMouseMove={handleMove} onMouseLeave={reset}>
      <div className="hero-blob" style={t(6, 6)}></div>
      <div className="hero-orbit" style={t(-10, -10, 4)}></div>
      <div className="hero-dot hero-dot-orange" style={t(22, 18)}></div>
      <div className="hero-dot hero-dot-tan" style={t(-16, 16)}></div>

      <div className="hero-photo" style={t(10, 10)}>
        <Image src="/assets/hero/person-cutout.png" alt="Services illustration" fill sizes="280px" style={{ objectFit: 'contain' }} priority />
      </div>

      <div className="hero-stat hero-stat-tl" style={t(-18, 12)}>
        <span className="hero-stat-icon"><Icon name="academic-cap" size={18} /></span>
        <span>
          <span className="hero-stat-value">20+</span>
          <span className="hero-stat-label">Skill courses</span>
        </span>
      </div>
      <div className="hero-stat hero-stat-tr hero-stat-ring" style={t(16, -14)}>
        <svg width="46" height="46" viewBox="0 0 46 46">
          <circle cx="23" cy="23" r="19" fill="none" stroke="var(--navy-100)" strokeWidth="4" />
          <circle
            cx="23"
            cy="23"
            r="19"
            fill="none"
            stroke="var(--orange-500)"
            strokeWidth="4"
            strokeDasharray="119.4"
            strokeDashoffset="18"
            strokeLinecap="round"
            transform="rotate(-90 23 23)"
          />
        </svg>
        <span>
          <span className="hero-stat-value">35+</span>
          <span className="hero-stat-label">Consultants</span>
        </span>
      </div>
      <div className="hero-stat hero-stat-br" style={t(14, 18)}>
        <span className="hero-stat-icon"><Icon name="cpu-chip" size={18} /></span>
        <span>
          <span className="hero-stat-value">12+</span>
          <span className="hero-stat-label">Automations built</span>
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  const router = useRouter();
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Empowering businesses with skills, expertise and technology.</h1>
        <p className="hero-subtitle">Your trusted partner in learning, consulting, and digital transformation.</p>
        <div className="hero-buttons">
          <Button variant="secondary" size="lg" onClick={() => router.push(routes.skillDevelopment)}>Start learning</Button>
          <Button variant="accent" size="lg" onClick={() => router.push(routes.bookACall)}>Book a call</Button>
        </div>
        <div className="hero-partners">
          <div className="hero-partners-title">Accreditation partner</div>
          <div className="hero-partners-row">
            {accreditationPartners.map((p) => (
              <img key={p.name} src={p.src} alt={p.name} className="partner-logo" />
            ))}
          </div>
        </div>
        <div className="hero-reviews">
          <div className="review-avatars">
            {['reader-1', 'reader-2', 'reader-3', 'reader-4', 'reader-5'].map((name) => (
              <img key={name} src={`/assets/reviews/${name}.png`} alt="" className="review-avatar-img" />
            ))}
          </div>
          <div className="review-meta">
            <div className="review-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange-500)" strokeWidth="1.5">
                  <path d="M12 3.5l2.47 5.01 5.53.8-4 3.9.94 5.5L12 16.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.5z" />
                </svg>
              ))}
              <span className="review-score">5.0</span>
            </div>
            <div className="review-caption">+2000 readers worldwide</div>
          </div>
        </div>
      </div>
      <div className="hero-right"><HeroVisual /></div>
    </section>
  );
}
