'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { routes } from '@/config/site.config';
import { homeFaqItems } from '../_data/faq-items';

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={'faq-item' + (open ? ' open' : '')}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <Icon name="chevron-down" size={18} className="faq-chevron" />
      </button>
      <div className="faq-answer-wrap">
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export function FaqSection({ eyebrow, title, sub, items, dark }) {
  const [openIdx, setOpenIdx] = useState(0);
  const data = items || homeFaqItems;
  return (
    <section className={'faq-section' + (dark ? ' faq-dark' : '')}>
      <div className="faq-inner">
        <div className="faq-head">
          <div className="faq-eyebrow"><Icon name="question-mark-circle" size={14} />{eyebrow || 'FAQ'}</div>
          <h2 className="faq-title">{title || 'Questions we hear all the time'}</h2>
          <p className="faq-sub">{sub || 'Can’t find what you’re looking for? Reach out and a consultant will answer directly.'}</p>
        </div>
        <div className="faq-list">
          {data.map((item, i) => (
            <FaqItem key={i} item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
        <div className="faq-more">
          <Link className="faq-more-link" href={routes.faq}>
            See all FAQs
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
