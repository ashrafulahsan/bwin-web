'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { routes } from '@/config/site.config';
import { slugify } from '@/utils/slugify';
import { skillDevelopmentTabs } from '../_data/skill-development-tabs';

const PAGE_SIZE = 4;

function CourseCard({ c }) {
  const href = `${routes.courseDetails}?course=${slugify(c.title)}`;
  return (
    <div className="course-card">
      <Link href={href} className="course-card-img">
        <ImagePlaceholder label={c.title} />
        {c.badge && <span className="course-badge">{c.badge}</span>}
      </Link>
      <div className="course-card-body">
        <div className="course-meta">
          <span><Icon name="users" size={14} />{c.students} Students</span>
          <span><Icon name="clock" size={14} />{c.duration}</span>
        </div>
        <h3 className="course-title"><Link href={href}>{c.title}</Link></h3>
        {c.rating > 0 ? (
          <div className="course-rating">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--orange-500)"><path d="M12 3.5l2.47 5.01 5.53.8-4 3.9.94 5.5L12 16.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.5z" /></svg>
            <span>{c.rating.toFixed(2)} ({c.reviews} Reviews)</span>
          </div>
        ) : (
          <div className="course-rating course-rating-empty">New course</div>
        )}
        <div className="course-footer">
          {c.price ? (
            <div className="course-price">
              <span className="price-now">${c.price}</span>
              <span className="price-orig">${c.orig}</span>
            </div>
          ) : (
            <div className="course-price-note">Reserve your seat</div>
          )}
          <Link href={href} className="course-learn-btn">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export function SkillDevelopmentSection() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);
  const courses = skillDevelopmentTabs[tab].courses;
  const pages = Math.max(1, Math.ceil(courses.length / PAGE_SIZE));
  const visible = courses.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const selectTab = (i) => {
    setTab(i);
    setPage(0);
  };

  return (
    <section className="skill-dev">
      <div className="skill-dev-inner">
        <div className="skill-dev-head">
          <div className="skill-dev-eyebrow"><Icon name="sparkles" size={14} />Skill development</div>
          <h2 className="skill-dev-title">Your Trusted Partner in <em>Professional Development</em></h2>
        </div>

        <div className="skill-tabs" role="tablist">
          {skillDevelopmentTabs.map((t, i) => (
            <button key={t.key} role="tab" aria-selected={tab === i} className={'skill-tab' + (tab === i ? ' active' : '')} onClick={() => selectTab(i)}>
              <Icon name={t.icon} size={18} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        <div className="course-grid">
          {visible.map((c) => (
            <CourseCard key={c.title} c={c} />
          ))}
        </div>

        <div className="skill-dev-nav">
          <div className="skill-dots">
            {Array.from({ length: pages }).map((_, i) => (
              <span key={i} className={'skill-dot' + (i === page ? ' active' : '')} onClick={() => setPage(i)}></span>
            ))}
          </div>
          <div className="skill-arrows">
            <button className="skill-arrow" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>
              <Icon name="chevron-left" size={18} />
            </button>
            <button className="skill-arrow" disabled={page === pages - 1} onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}>
              <Icon name="chevron-right" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
