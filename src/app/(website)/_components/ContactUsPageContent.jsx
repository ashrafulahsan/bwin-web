'use client';

import Link from 'next/link';
import { Icon, Button } from '@/components/ui';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { routes, siteConfig } from '@/config/site.config';
import { FaqSection } from './FaqSection';
import { officeHours, contactUsFaq } from '../_data/contact-us-content';

export function ContactUsPageContent() {
  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-inner">
          <div className="page-breadcrumb">
            <Link href={routes.home}>Home</Link>
            <Icon name="chevron-right" size={12} />
            <span>Contact us</span>
          </div>
          <h1 className="page-title">Let&apos;s talk about what you need</h1>
          <p className="page-subtitle">Whether it&apos;s a course, a consultation, or an automation project — reach out and we&apos;ll get back within one business day.</p>
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
                <input type="tel" placeholder="+880" />
              </div>
              <div className="form-field">
                <label>Interested in</label>
                <input type="text" placeholder="Skill development, consultancy..." />
              </div>
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell us a bit about what you're looking for"></textarea>
            </div>
            <Button variant="primary" size="lg">Send message</Button>
          </form>

          <div className="contact-side">
            <div className="contact-info-card">
              <div className="contact-info-row">
                <span className="contact-info-icon"><Icon name="map-pin" size={18} /></span>
                <div>
                  <div className="contact-info-label">Office</div>
                  <div className="contact-info-value">{siteConfig.address}</div>
                </div>
              </div>
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

            <div className="contact-info-card">
              <div className="contact-info-label" style={{ marginBottom: 4 }}>Office hours</div>
              {officeHours.map((h) => (
                <div className="office-hours-row" key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>

            <div className="whatsapp-cta">
              <span className="whatsapp-icon"><Icon name="chat-bubble-left-right" size={20} /></span>
              <div>
                <div className="contact-info-label">Chat on WhatsApp</div>
                <div className="contact-info-value">Fastest way to reach us — usually replies in minutes.</div>
              </div>
            </div>

            <div className="map-slot"><ImagePlaceholder label="Office map" /></div>
          </div>
        </div>
      </div>

      <FaqSection items={contactUsFaq} />
    </div>
  );
}
