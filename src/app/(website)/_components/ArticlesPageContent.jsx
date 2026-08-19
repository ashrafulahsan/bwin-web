'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { routes } from '@/config/site.config';
import { articleCategories, articles } from '../_data/articles-content';

export function ArticlesPageContent() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? articles : articles.filter((a) => a.cat === active);

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>Articles</span>
          </div>
          <h1 className="page-title">Articles & insights</h1>
          <p className="page-subtitle">Notes from our consultants, trainers, and automation team on what&apos;s actually working.</p>
        </div>
      </div>

      <div className="page-section">
        <div className="article-filters">
          {articleCategories.map((c) => (
            <button key={c} className={'article-chip' + (active === c ? ' active' : '')} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="article-grid">
          {filtered.map((a) => (
            <div className="article-card" key={a.title}>
              <div className="article-card-img"><ImagePlaceholder label={a.title} /></div>
              <div className="article-card-body">
                <div className="article-tag">{a.cat}</div>
                <h3 className="article-title">{a.title}</h3>
                <p className="article-excerpt">{a.excerpt}</p>
                <div className="article-meta"><span>{a.date}</span><span>{a.read}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
