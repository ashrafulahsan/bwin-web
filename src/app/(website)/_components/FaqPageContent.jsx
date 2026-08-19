'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { routes } from '@/config/site.config';
import { faqCategories, faqPageData } from '../_data/faq-page-content';

function FaqPageItem({ item, open, onToggle }) {
  return (
    <div className={'faq-item' + (open ? ' open' : '')}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <Icon name="chevron-down" size={18} className="faq-chevron" />
      </button>
      <div className="faq-answer-wrap"><p className="faq-answer">{item.a}</p></div>
    </div>
  );
}

export function FaqPageContent() {
  const [cat, setCat] = useState('general');
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>FAQ</span>
          </div>
          <h1 className="page-title">Frequently asked questions</h1>
          <p className="page-subtitle">Everything you need to know about our courses, consultancy, and automation services — organized by topic.</p>
        </div>
      </div>

      <div className="page-section">
        <div className="faq-page-layout">
          <div className="faq-cat-rail" role="tablist">
            {faqCategories.map((c) => (
              <button
                key={c.key}
                role="tab"
                className={'faq-cat-btn' + (cat === c.key ? ' active' : '')}
                onClick={() => {
                  setCat(c.key);
                  setOpenIdx(0);
                }}
              >
                <Icon name={c.icon} size={18} />{c.label}
              </button>
            ))}
          </div>

          <div className="faq-list faq-page-list">
            {faqPageData[cat].map((item, i) => (
              <FaqPageItem key={cat + i} item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
            ))}
          </div>
        </div>

        <div className="faq-cta-band">
          <div>
            <div className="faq-cta-title">Still have a question?</div>
            <div className="faq-cta-sub">Our team replies within one business day.</div>
          </div>
          <div className="faq-cta-actions">
            <Link className="faq-cta-link faq-cta-secondary" href={routes.contactUs}>Contact us</Link>
            <Link className="faq-cta-link faq-cta-primary" href={routes.freeConsultation}>Book free consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
