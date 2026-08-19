import Link from 'next/link';
import { Icon } from '@/components/ui';
import { siteConfig, routes } from '@/config/site.config';

const quickLinks = [
  { label: 'Upcoming live batch', href: routes.bootcamp },
  { label: 'Free courses', href: routes.skillDevelopment },
  { label: 'Live workshop', href: routes.bootcamp },
  { label: 'Teams', href: routes.teams },
  { label: 'Trainers', href: routes.teams },
  { label: 'FAQ', href: routes.faq },
];
const companyLinks = [
  { label: 'About us', href: routes.aboutUs },
  { label: 'Contact us', href: routes.contactUs },
  { label: 'Articles', href: routes.articles },
  { label: 'Refund policy', href: routes.refundPolicy },
  { label: 'Privacy policy', href: routes.privacyPolicy },
  { label: 'Terms and conditions', href: routes.termsConditions },
];
const socials = [
  {
    name: 'Instagram',
    bg: 'linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    bg: '#FF0000',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
        <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    bg: '#0A66C2',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0A66C2" />
        <path d="M7 10H4.5V19H7V10Z" fill="#fff" />
        <circle cx="5.75" cy="6.5" r="1.5" fill="#fff" />
        <path d="M9.5 10H11.9V11.3C12.3 10.6 13.2 9.8 14.7 9.8C17.4 9.8 18 11.5 18 13.8V19H15.5V14.3C15.5 13.1 15.2 12.1 13.9 12.1C12.6 12.1 12 13 12 14.3V19H9.5V10Z" fill="#fff" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="newsletter-row">
            <h2 className="newsletter-title">
              Want to receive
              <br />
              news and updates?
            </h2>
            <div className="newsletter-form">
              <p>Unlock exclusive offers and service updates straight to your inbox.</p>
              <div className="subscribe-box">
                <input type="email" placeholder="Add your email address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="contact-strip">
            <div className="contact-cell">
              <div className="contact-label">Office</div>
              <div className="contact-value">{siteConfig.address}</div>
            </div>
            <div className="contact-cell">
              <div className="contact-label">Contact us</div>
              <div className="contact-value big">{siteConfig.phone}</div>
            </div>
            <div className="contact-cell">
              <div className="contact-label">Mail us</div>
              <div className="contact-value big">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-col about-col">
            <Link href={routes.home}>
              <img className="footer-logo" src={siteConfig.logo} alt={siteConfig.name} />
            </Link>
            <p>
              BWIN Consultants helps individuals build in-demand skills and helps businesses run better — through
              hands-on training, practical consultancy, and automation that removes the busywork from daily
              operations.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Quick links</div>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col social-col">
            <div className="footer-col-title">Social links</div>
            <div className="fb-widget">
              <div className="fb-widget-cover">
                <img className="fb-widget-logo" src={siteConfig.logo} alt="" />
                <div className="fb-widget-info">
                  <span className="fb-widget-name">{siteConfig.name}</span>
                  <span className="fb-widget-likes">2,140 likes</span>
                </div>
                <button className="fb-like-btn">
                  <Icon name="hand-thumb-up" size={14} />
                  Like Page
                </button>
              </div>
              <div className="fb-widget-friends">
                <span>Be the first of your friends to like this</span>
                <div className="fb-avatars">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span className="fb-avatar" key={i}></span>
                  ))}
                </div>
              </div>
            </div>
            <div className="social-icons">
              {socials.map((s) => (
                <a key={s.name} href="#" className="social-icon" aria-label={s.name} style={{ background: s.bg }}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="payment-strip">
          <img
            src="/assets/payment/sslcommerz-pay-with.png"
            alt="Pay with Visa, Mastercard, bKash, Nagad and other supported payment methods — verified by SSLCommerz"
          />
        </div>
        <div className="footer-legal">
          <span>© 2026 {siteConfig.name}. All rights reserved.</span>
          <span>Secure checkout powered by SSLCommerz</span>
        </div>
      </div>
    </footer>
  );
}
