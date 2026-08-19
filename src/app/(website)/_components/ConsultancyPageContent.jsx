'use client';

import Link from 'next/link';
import { Icon, Button } from '@/components/ui';
import { routes, siteConfig } from '@/config/site.config';
import { FaqSection } from './FaqSection';
import { consultationInterests, freeConsultationFaq } from '../_data/free-consultation-content';

export function ConsultancyPageContent() {
  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>Free consultation</span>
          </div>
          <h1 className="page-title">Book your free consultation</h1>
          <p className="page-subtitle">Tell us what you&apos;re working on and one of our consultants will map out next steps — no cost, no obligation.</p>
        </div>
      </div>

      <div className="page-section">
        <div className="contact-layout">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label>Full name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label>Email address</label>
                <input type="email" placeholder="you@company.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Phone</label>
                <input type="tel" placeholder="+880" required />
              </div>
              <div className="form-field">
                <label>Company / role</label>
                <input type="text" placeholder="Optional" />
              </div>
            </div>
            <div className="form-field">
              <label>What do you need help with?</label>
              <select required defaultValue="">
                <option value="" disabled>Select one</option>
                {consultationInterests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label>Anything else we should know?</label>
              <textarea rows="4" placeholder="Team size, goals, current challenges..."></textarea>
            </div>
            <Button variant="primary" size="lg">Request free consultation</Button>
          </form>

          <div className="contact-side">
            <div className="contact-info-card">
              <div className="contact-info-label" style={{ marginBottom: 4 }}>What happens next</div>
              <div className="steps-mini">
                <div className="steps-mini-row"><span className="steps-mini-num">1</span>We call you within one business day to understand your goals.</div>
                <div className="steps-mini-row"><span className="steps-mini-num">2</span>We recommend the right course, service, or automation fit.</div>
                <div className="steps-mini-row"><span className="steps-mini-num">3</span>You decide — zero pressure, zero cost.</div>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-row">
                <span className="contact-info-icon"><Icon name="phone" size={18} /></span>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">{siteConfig.phone}</div>
                </div>
              </div>
              <div className="contact-info-row">
                <span className="contact-info-icon"><Icon name="envelope" size={18} /></span>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
                </div>
              </div>
            </div>
            <div className="whatsapp-cta">
              <span className="whatsapp-icon"><Icon name="chat-bubble-left-right" size={20} /></span>
              <div>
                <div className="contact-info-label">Chat on WhatsApp</div>
                <div className="contact-info-value">Prefer to talk now? We usually reply in minutes.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FaqSection items={freeConsultationFaq} />
    </div>
  );
}
