'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon, Button } from '@/components/ui';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { routes } from '@/config/site.config';
import { teamStats, teamLeadership, teamPeople, teamFilters } from '../_data/teams-content';

function LeaderCard({ p }) {
  return (
    <div className="leader-card">
      <div className="leader-photo"><ImagePlaceholder label={p.name} /></div>
      <div className="leader-body">
        <div className="leader-name">{p.name}</div>
        <div className="leader-role">{p.role}</div>
        <p className="leader-bio">{p.bio}</p>
        <div className="person-social">
          <a href="#" aria-label="LinkedIn"><Icon name="link" size={15} /></a>
          <a href="#" aria-label="Email"><Icon name="envelope" size={15} /></a>
        </div>
      </div>
    </div>
  );
}

function PersonCard({ p }) {
  return (
    <div className="person-card">
      <div className="person-photo">
        <ImagePlaceholder label={p.name} />
        <div className="person-photo-overlay">
          <div className="person-name">{p.name}</div>
          <div className="person-role">{p.role}</div>
        </div>
      </div>
      <div className="person-body">
        <div className="person-tags">{p.tags.map((t) => <span key={t} className="person-tag">{t}</span>)}</div>
        <div className="person-social">
          <a href="#" aria-label="LinkedIn"><Icon name="link" size={15} /></a>
          <a href="#" aria-label="Email"><Icon name="envelope" size={15} /></a>
        </div>
      </div>
    </div>
  );
}

export function TeamsPageContent() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? teamPeople : teamPeople.filter((p) => p.cat === filter);

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>Teams</span>
          </div>
          <h1 className="page-title">The people behind every result</h1>
          <p className="page-subtitle">Leadership, consultants, and trainers who bring decades of combined experience to every course, engagement, and build.</p>
        </div>
      </div>

      <div className="page-section page-section-tight">
        <div className="milestone-row">
          {teamStats.map((s) => (
            <div className="milestone" key={s.label}>
              <div className="milestone-value">{s.value}</div>
              <div className="milestone-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-section">
        <div className="section-head">
          <div className="section-eyebrow"><Icon name="star" size={14} />Leadership</div>
          <h2 className="section-title">Set the standard <em>every team follows</em></h2>
        </div>
        <div className="leader-grid">
          {teamLeadership.map((p) => <LeaderCard key={p.name} p={p} />)}
        </div>
      </div>

      <div className="page-section">
        <div className="section-head">
          <div className="section-eyebrow"><Icon name="user-group" size={14} />Consultants & trainers</div>
          <h2 className="section-title">Specialists, not <em>generalists</em></h2>
        </div>

        <div className="team-filter-tabs" role="tablist">
          {teamFilters.map((f) => (
            <button key={f.key} className={'skill-tab' + (filter === f.key ? ' active' : '')} onClick={() => setFilter(f.key)}>{f.label}</button>
          ))}
        </div>

        <div className="person-grid">
          {visible.map((p) => <PersonCard key={p.name} p={p} />)}
        </div>
      </div>

      <div className="cta-band">
        <div>
          <div className="cta-band-title">Want to work with our team?</div>
          <div className="cta-band-sub">Book a free consultation and we&apos;ll match you with the right specialist.</div>
        </div>
        <div className="cta-band-actions">
          <Button variant="accent" size="lg" onClick={() => router.push(routes.freeConsultation)}>Free consultation</Button>
        </div>
      </div>
    </div>
  );
}
