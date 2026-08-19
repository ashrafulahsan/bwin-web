'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui';
import { businessAutomationCards } from '../_data/business-automation-cards';

export function BusinessAutomationSection() {
  const [start, setStart] = useState(0);
  const visible = businessAutomationCards.slice(start, start + 3);

  return (
    <section className="biz-auto">
      <div className="biz-auto-inner">
        <div className="biz-auto-head">
          <h2 className="biz-auto-title">Business <em>Automation</em></h2>
          <p className="biz-auto-sub">We design and build automation systems that cut manual work, reduce errors, and give you real-time visibility into how your business runs.</p>
          <div className="biz-auto-nav">
            <button className="biz-auto-arrow" disabled={start === 0} onClick={() => setStart(0)}>
              <Icon name="arrow-left" size={16} />
            </button>
            <button
              className="biz-auto-arrow"
              disabled={start + 3 >= businessAutomationCards.length}
              onClick={() => setStart(Math.min(businessAutomationCards.length - 3, start + 1))}
            >
              <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </div>

        <div className="biz-auto-grid">
          {visible.map((c) => (
            <div className="biz-card" key={c.title}>
              <h3 className="biz-card-title">{c.title}</h3>
              <p className="biz-card-desc">{c.desc}</p>
              <div className="biz-progress"><div className="biz-progress-fill" style={{ width: c.progress + '%' }}></div></div>
              <ul className="biz-list">
                {c.items.map((it) => (
                  <li key={it}>
                    <span className="biz-list-icon"><Icon name="arrow-right" size={13} /></span>
                    {it}
                  </li>
                ))}
              </ul>
              <button className="biz-learn-btn">
                Learn more
                <Icon name="arrow-up-right" size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
