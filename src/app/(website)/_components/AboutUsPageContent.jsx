'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon, Button } from '@/components/ui';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { routes } from '@/config/site.config';
import { accreditationPartners } from '../_data/accreditation-partners';
import { aboutUsMilestones, aboutUsTeam } from '../_data/about-us-content';

export function AboutUsPageContent() {
  const router = useRouter();
  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>About us</span>
          </div>
          <h1 className="page-title">Empowering businesses with skills, expertise and technology</h1>
          <p className="page-subtitle">BWIN Consultants was built on a simple idea — that training, advisory, and automation work best when they come from one team that understands the whole business.</p>
        </div>
      </div>

      <div className="page-section">
        <div className="about-story">
          <div>
            <div className="section-eyebrow"><Icon name="sparkles" size={14} />Our story</div>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 16 }}>From a training desk to a full <em>growth partner</em></h2>
            <p className="section-body">We started in 2016 running short skill-development workshops for local businesses in Dhaka. As clients kept asking for help beyond training — fixing broken processes, advising on tax and strategy, automating manual work — we built out dedicated consultancy and automation teams to match.</p>
            <p className="section-body" style={{ marginTop: 12 }}>Today we work with individuals building new careers and organizations rethinking how they operate, backed by accreditation partners across the UK and USA.</p>
          </div>
          <div className="about-story-media">
            <ImagePlaceholder label="Team at work" />
          </div>
        </div>
      </div>

      <div className="page-section page-section-tight">
        <div className="milestone-row">
          {aboutUsMilestones.map((m) => (
            <div className="milestone" key={m.label}>
              <div className="milestone-value">{m.value}</div>
              <div className="milestone-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-section">
        <div className="section-head">
          <div className="section-eyebrow"><Icon name="user-group" size={14} />Leadership</div>
          <h2 className="section-title">The people behind <em>BWIN</em></h2>
        </div>
        <div className="team-grid">
          {aboutUsTeam.map((t) => (
            <div className="team-card" key={t.name}>
              <div className="team-photo"><ImagePlaceholder label={t.name} /></div>
              <div className="team-name">{t.name}</div>
              <div className="team-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-section page-section-tight">
        <div className="hero-partners-title" style={{ color: 'var(--text-primary)', fontSize: 'var(--fs-caption)', marginBottom: 16 }}>Accreditation partners</div>
        <div className="hero-partners-row">
          {accreditationPartners.map((p) => (
            <img key={p.name} src={p.src} alt={p.name} className="partner-logo" style={{ background: 'none', padding: 0 }} />
          ))}
        </div>
      </div>

      <div className="cta-band">
        <div>
          <div className="cta-band-title">Want to work with us?</div>
          <div className="cta-band-sub">Tell us what you&apos;re trying to solve — we&apos;ll take it from there.</div>
        </div>
        <div className="cta-band-actions">
          <Button variant="accent" size="lg" onClick={() => router.push(routes.contactUs)}>Contact us</Button>
        </div>
      </div>
    </div>
  );
}
