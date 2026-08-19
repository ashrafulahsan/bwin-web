'use client';

import { useState } from 'react';
import { Icon, Button } from '@/components/ui';
import { siteConfig } from '@/config/site.config';

export function LoginSignupContent() {
  const [mode, setMode] = useState('login');

  return (
    <div className="auth-page">
      <div className="auth-wrap">
        <div className="auth-card">
          <div className="auth-card-head">
            <h1>{mode === 'login' ? 'Log in to your account' : 'Create your account'}</h1>
            <p>{mode === 'login' ? 'Welcome back — pick up right where you left off.' : 'Join thousands of learners and businesses building better with BWIN.'}</p>
          </div>

          <div className="auth-tabs" role="tablist">
            <button role="tab" className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>Login</button>
            <button role="tab" className={mode === 'signup' ? 'active' : ''} onClick={() => setMode('signup')}>Create new account</button>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            {mode === 'signup' && (
              <div className="form-field">
                <label>Full name</label>
                <input type="text" placeholder="Your name" required />
              </div>
            )}
            <div className="form-field">
              <label>Phone number or email</label>
              <input type="text" placeholder="Provide phone number or email" required />
            </div>
            <div className="form-field">
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            {mode === 'signup' && (
              <div className="form-field">
                <label>Confirm password</label>
                <input type="password" placeholder="Re-enter password" required />
              </div>
            )}

            <Button variant="primary" size="lg" style={{ width: '100%' }}>
              <span>Continue</span>
              <Icon name="arrow-right" size={16} />
            </Button>

            <div className="auth-divider"><span>or</span></div>

            <button type="button" className="auth-social auth-social-google">
              <span className="auth-social-icon">G</span>Continue with Google
            </button>
            <button type="button" className="auth-social auth-social-facebook">
              <span className="auth-social-icon">f</span>Continue with Facebook
            </button>
          </form>

          <div className="auth-links">
            {mode === 'login' ? (
              <>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMode('signup');
                  }}
                >
                  Create account
                </a>
                <span className="auth-links-dot">•</span>
                <a href="#">Forgot password?</a>
              </>
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMode('login');
                }}
              >
                Already have an account? Log in
              </a>
            )}
          </div>

          <p className="auth-otp-note">Having trouble with OTP? Call us at <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></p>
        </div>
      </div>
    </div>
  );
}
