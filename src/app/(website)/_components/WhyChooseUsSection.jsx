'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui';
import { whyChooseUsStats } from '../_data/why-choose-us-stats';

function useCountUp(target, active) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    let start;
    const dur = 1400;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return n;
}

function StatCard({ s, active, i }) {
  const n = useCountUp(s.value, active);
  return (
    <div className="why-stat" style={{ transitionDelay: i * 70 + 'ms' }}>
      <div className="why-stat-icon" style={{ '--icon-src': `url("https://cdn.jsdelivr.net/npm/heroicons@2.1.5/24/outline/${s.icon}.svg")` }}>
        <Icon name={s.icon} size={22} />
      </div>
      <div className="why-stat-value">
        {n.toLocaleString()}
        <span>{s.suffix}</span>
      </div>
      <div className="why-stat-label">{s.label}</div>
    </div>
  );
}

export function WhyChooseUsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="why-us" ref={ref}>
      <div className="why-us-inner">
        <div className="why-us-head">
          <div className="why-us-eyebrow"><Icon name="sparkles" size={14} />Why choose us</div>
          <h2 className="why-us-title">Real progress, for people <em>who show up every day</em></h2>
          <p className="why-us-sub">Every number here is a person who decided to learn something new — and kept going. That&apos;s the only metric that has ever mattered to us.</p>
        </div>

        <div className={'why-stats' + (active ? ' is-active' : '')}>
          {whyChooseUsStats.map((s, i) => (
            <StatCard key={s.label} s={s} active={active} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
