'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon, Button } from '@/components/ui';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { useTheme } from '@/hooks/useTheme';
import { siteConfig, routes } from '@/config/site.config';

const servicesMenu = [
  {
    title: 'Skill development',
    icon: 'academic-cap',
    tint: 'navy',
    href: routes.skillDevelopment,
    items: [
      { label: 'Health, Safety & Environment (HSE)', href: `${routes.skillDevelopment}?category=${encodeURIComponent('Health, Safety & Environment (HSE) Courses')}` },
      { label: 'Business Process Excellence (BPE)', href: `${routes.skillDevelopment}?category=${encodeURIComponent('Business Process Excellence (BPE)')}` },
      { label: 'Tax, VAT & Customs Training', href: `${routes.skillDevelopment}?category=${encodeURIComponent('Tax, VAT & Customs Training')}` },
      { label: "O' Level & A' Level", href: `${routes.skillDevelopment}?category=${encodeURIComponent("O' Level & A' Level")}` },
      { label: 'University Admission Test', href: `${routes.skillDevelopment}?category=${encodeURIComponent('University Admission Test')}` },
    ],
  },
  { title: 'Consultancy', icon: 'briefcase', tint: 'orange', href: routes.consultancy, items: ['Business strategy', 'Financial advisory', 'HR & talent consulting'] },
  { title: 'Business automation', icon: 'cog-6-tooth', tint: 'tan', href: routes.businessAutomation, items: ['Workflow automation', 'CRM integration', 'Custom chatbots & bots'] },
];

function MegaMenu({ open }) {
  const router = useRouter();
  return (
    <div className={'mega-panel' + (open ? ' open' : '')}>
      <div className="mega-panel-inner">
        <div className="mega-cols">
          {servicesMenu.map((col) => (
            <div className="mega-col" key={col.title}>
              <div className={'mega-col-head tint-' + col.tint}>
                <span className="mega-col-icon"><Icon name={col.icon} size={22} /></span>
                <span className="mega-col-title">{col.title}</span>
              </div>
              <ul>
                {col.items.map((it) => {
                  const label = typeof it === 'string' ? it : it.label;
                  const href = typeof it === 'string' ? '#' : it.href;
                  return (
                    <li key={label}>
                      <Link href={href}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
              <Link href={col.href} className="see-more">
                See more
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="mega-cta">
          <div>
            <div className="mega-cta-title">Not sure where to start?</div>
            <div className="mega-cta-sub">Talk to a consultant — it&apos;s free.</div>
          </div>
          <Button variant="accent" size="sm" onClick={() => router.push(routes.bookACall)}>
            Book a call
          </Button>
        </div>
      </div>
    </div>
  );
}

function MoreMenu({ open }) {
  const left = [
    { label: 'Best mentors', href: routes.teams },
    { label: 'Free courses', href: routes.skillDevelopment },
    { label: 'Demo classes', href: routes.bootcamp },
    { label: 'Live workshop', href: routes.bootcamp },
    { label: 'E-Books', href: '#' },
  ];
  const right = [
    { label: 'About us', href: routes.aboutUs },
    { label: 'Contact us', href: routes.contactUs },
    { label: 'Teams', href: routes.teams },
    { label: 'Trainers', href: routes.teams },
    { label: 'FAQ', href: routes.faq },
  ];
  return (
    <div className={'mega-panel more-panel' + (open ? ' open' : '')}>
      <div className="mega-panel-inner">
        <div className="more-cols">
          <div className="more-img-col">
            <ImagePlaceholder label="Learning image" />
          </div>
          <div className="more-col">
            <div className="more-col-title">Learning</div>
            <ul>
              {left.map((it) => (
                <li key={it.label}>
                  <Link href={it.href}>{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="more-img-col">
            <ImagePlaceholder label="Company image" />
          </div>
          <div className="more-col">
            <div className="more-col-title">Company</div>
            <ul>
              {right.map((it) => (
                <li key={it.label}>
                  <Link href={it.href}>{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState('English');
  const langs = ['English', 'Bangla'];
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-contact">
          <a href={siteConfig.phoneHref} className="top-bar-item">
            <Icon name="phone" size={15} color="#fff" />
            <span>{siteConfig.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="top-bar-item">
            <Icon name="envelope" size={15} color="#fff" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
        <div className="top-bar-right">
          <div className="top-bar-socials">
            <a href={siteConfig.social.facebook} aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" /></svg>
            </a>
            <a href={siteConfig.social.x} aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8.1-9.3L1 2h7.1l4.9 6.4L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" /></svg>
            </a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.2 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.19 2.32 4.19 5.35V21h-3.5v-6.28c0-1.5-.03-3.42-2.08-3.42-2.09 0-2.41 1.63-2.41 3.31V21H9.4V8.75Z" /></svg>
            </a>
          </div>
          <div className="top-bar-lang" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button className="top-bar-lang-btn" aria-expanded={langOpen} onClick={() => setLangOpen((o) => !o)}>
              {lang}
              <Icon name="chevron-down" size={14} style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 120ms ease-out' }} />
            </button>
            <div className={'top-bar-lang-menu' + (langOpen ? ' open' : '')}>
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLang(l);
                    setLangOpen(false);
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  return (
    <button
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  );
}

function SearchBox() {
  const [open, setOpen] = useState(false);
  return (
    <div className={'search-box' + (open ? ' open' : '')}>
      <input
        type="text"
        placeholder="Search courses, services..."
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          if (!e.target.value) setOpen(false);
        }}
      />
      <span className="search-icon"><Icon name="magnifying-glass" size={18} /></span>
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const mobileMoreLinks = [
    ['Best mentors', routes.teams],
    ['Free courses', routes.skillDevelopment],
    ['Demo classes', routes.bootcamp],
    ['Live workshop', routes.bootcamp],
    ['E-Books', '#'],
    ['About us', routes.aboutUs],
    ['Contact us', routes.contactUs],
    ['Teams', routes.teams],
    ['Trainers', routes.teams],
    ['FAQ', routes.faq],
  ];

  return (
    <>
      <TopBar />
      <header className="site-header">
        <div className="header-inner">
          <Link href={routes.home} className="logo">
            <img src={siteConfig.logo} alt={siteConfig.name} />
          </Link>

          <nav className="main-nav">
            <div className="nav-item has-mega" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="nav-link" onClick={() => setServicesOpen((o) => !o)} aria-expanded={servicesOpen}>
                All Services
                <Icon name="chevron-down" size={16} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 120ms ease-out' }} />
              </button>
              <MegaMenu open={servicesOpen} />
            </div>

            <Link href={routes.bundleOffer} className="nav-link discount-link">Offers</Link>
            <Link href={routes.eLearning} className="nav-link">E-Learning</Link>
            <Link href={routes.jobSuccess} className="nav-link">Job Success</Link>

            <div className="nav-item has-mega" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button className="nav-link" onClick={() => setMoreOpen((o) => !o)} aria-expanded={moreOpen}>
                More
                <Icon name="chevron-down" size={16} style={{ transform: moreOpen ? 'rotate(180deg)' : 'none', transition: 'transform 120ms ease-out' }} />
              </button>
              <MoreMenu open={moreOpen} />
            </div>
          </nav>

          <div className="header-actions">
            <SearchBox />
            <ThemeToggle />
            <Button variant="secondary" size="md" onClick={() => router.push(routes.loginSignup)}>Login / Signup</Button>
            <Button variant="primary" size="md" onClick={() => router.push(routes.freeConsultation)}>Consultation</Button>
          </div>

          <button className={'hamburger-btn' + (mobileOpen ? ' open' : '')} aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>

        <div className={'mobile-drawer' + (mobileOpen ? ' open' : '')}>
          <div className="mobile-drawer-inner">
            <div className="mobile-nav-item">
              <button className="mobile-nav-link" onClick={() => setMobileServicesOpen((o) => !o)} aria-expanded={mobileServicesOpen}>
                All Services
                <Icon name="chevron-down" size={16} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 120ms ease-out' }} />
              </button>
              <div className={'mobile-services-list' + (mobileServicesOpen ? ' open' : '')}>
                {servicesMenu.map((col) => (
                  <Link key={col.title} href={col.href} className="mobile-service-link" onClick={() => setMobileOpen(false)}>
                    {col.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href={routes.bundleOffer} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Offers</Link>
            <Link href={routes.eLearning} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>E-Learning</Link>
            <Link href={routes.jobSuccess} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Job Success</Link>
            <div className="mobile-nav-item">
              <button className="mobile-nav-link" onClick={() => setMobileMoreOpen((o) => !o)} aria-expanded={mobileMoreOpen}>
                More
                <Icon name="chevron-down" size={16} style={{ transform: mobileMoreOpen ? 'rotate(180deg)' : 'none', transition: 'transform 120ms ease-out' }} />
              </button>
              <div className={'mobile-services-list' + (mobileMoreOpen ? ' open' : '')}>
                {mobileMoreLinks.map(([label, href]) => (
                  <Link key={label} href={href} className="mobile-service-link" onClick={() => setMobileOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mobile-drawer-divider"></div>
            <ThemeToggle />
            <Button variant="secondary" size="md" onClick={() => router.push(routes.loginSignup)}>Login / Signup</Button>
            <Button variant="primary" size="md" onClick={() => router.push(routes.freeConsultation)}>Free Consultation</Button>
          </div>
        </div>
        {mobileOpen && <div className="mobile-drawer-scrim" onClick={() => setMobileOpen(false)}></div>}
      </header>
    </>
  );
}
