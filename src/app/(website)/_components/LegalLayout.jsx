import Link from 'next/link';
import { Icon } from '@/components/ui';
import { routes, siteConfig } from '@/config/site.config';
import { linkifyEmail } from '@/utils/linkifyEmail';

export function LegalLayout({ title, updated, sections }) {
  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>{title}</span>
          </div>
          <h1 className="page-title">{title}</h1>
          <p className="page-subtitle">Last updated {updated}</p>
        </div>
      </div>
      <div className="page-section">
        <div className="legal-doc">
          {sections.map((s) => (
            <section className="legal-section" key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{linkifyEmail(p, siteConfig.email)}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
