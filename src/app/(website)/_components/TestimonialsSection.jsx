'use client';

import { useEffect, useRef, useState } from 'react';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { testimonialCategories } from '../_data/testimonial-categories';

function Stars({ n }) {
  return (
    <div className="rv-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? 'var(--orange-500)' : 'var(--navy-100)'}>
          <path d="M12 3.5l2.47 5.01 5.53.8-4 3.9.94 5.5L12 16.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8L12 3.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ cat, review }) {
  return (
    <div className={'rv-card rv-accent-' + cat.accent}>
      <div className="rv-card-top">
        <span className="rv-tag">{cat.label}</span>
        <svg className="rv-quote" width="26" height="20" viewBox="0 0 26 20" fill="none">
          <path d="M0 20V11.4C0 4.6 4.2 0.6 10.6 0L11.4 3.2C7.8 4 5.8 6.2 5.6 9.4H10V20H0ZM14.6 20V11.4C14.6 4.6 18.8 0.6 25.2 0L26 3.2C22.4 4 20.4 6.2 20.2 9.4H24.6V20H14.6Z" fill="currentColor" />
        </svg>
      </div>
      <Stars n={review.rating} />
      <p className="rv-text">{review.text}</p>
      <div className="rv-person">
        <ImagePlaceholder label={review.name} style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0 }} />
        <div>
          <div className="rv-name">{review.name}</div>
          <div className="rv-role">{review.role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const len = testimonialCategories[0].reviews.length;
  const timerRef = useRef(null);

  const go = (dir) => setIdx((p) => (p + dir + len) % len);

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx((p) => (p + 1) % len), 6000);
    return () => clearInterval(timerRef.current);
  }, [len]);

  return (
    <section className="rv-section">
      <div className="rv-inner">
        <div className="rv-head">
          <div className="rv-eyebrow">Testimonials</div>
          <h2 className="rv-title">Loved across every <em>service we offer</em></h2>
          <p className="rv-sub">One rotating set, three sides of BWIN — hear from learners, clients, and operators at the same time.</p>
        </div>

        <div className="rv-grid">
          {testimonialCategories.map((cat) => (
            <ReviewCard key={cat.key + idx} cat={cat} review={cat.reviews[idx % cat.reviews.length]} />
          ))}
        </div>

        <div className="rv-nav">
          <button className="rv-arrow" onClick={() => go(-1)} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="rv-dots">
            {Array.from({ length: len }).map((_, i) => (
              <span key={i} className={'rv-dot' + (i === idx ? ' active' : '')} onClick={() => setIdx(i)}></span>
            ))}
          </div>
          <button className="rv-arrow" onClick={() => go(1)} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
