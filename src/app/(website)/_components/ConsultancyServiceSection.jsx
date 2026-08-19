'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Icon } from '@/components/ui';
import { routes } from '@/config/site.config';
import { consultancyServices } from '../_data/consultancy-services';

export function ConsultancyServiceSection() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const s = consultancyServices[active];

  return (
    <section className="consult-service">
      <div className="consult-inner">
        <div className="consult-head">
          <div className="consult-eyebrow"><Icon name="sparkles" size={14} />Consultancy Service</div>
          <h2 className="consult-title">
            Building <em>enduring value</em>
            <br />
            through <em>bold</em> strategies
          </h2>
        </div>

        <div className="consult-body">
          <div className="consult-tabs" role="tablist">
            {consultancyServices.map((item, i) => (
              <button key={item.key} role="tab" aria-selected={active === i} className={'consult-tab' + (active === i ? ' active' : '')} onClick={() => setActive(i)}>
                <span>{item.label}</span>
                <Icon name="arrow-right" size={16} />
              </button>
            ))}
          </div>

          <div className="consult-panel">
            <div className="consult-panel-img">
              <img src={s.imgSrc} alt={`${s.label} photo`} />
            </div>
            <div className="consult-panel-content">
              <h3 className="consult-panel-title">{s.title}</h3>
              <p className="consult-panel-desc">{s.desc}</p>
              <div className="consult-features">
                {s.features.map((f) => (
                  <div className="consult-feature" key={f.title}>
                    <div className="consult-feature-icon"><Icon name={f.icon} size={20} /></div>
                    <div>
                      <div className="consult-feature-title">{f.title}</div>
                      <div className="consult-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="consult-cta">
          <Button variant="primary" size="lg" onClick={() => router.push(routes.getAFreeQuote)}>
            Get a free quote
            <Icon name="arrow-right" size={16} />
          </Button>
          <Button variant="secondary" size="lg" onClick={() => router.push(routes.contactUs)}>
            <Icon name="phone" size={18} />
            Our help center
          </Button>
        </div>
      </div>
    </section>
  );
}
