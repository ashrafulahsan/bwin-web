import { buildMetadata } from '@/lib/seo';
import { routes } from '@/config/site.config';
import { pageMetadata } from '../_data/page-metadata';
import { LoginSignupContent } from '../_components/LoginSignupContent';

export const metadata = buildMetadata({ ...pageMetadata.loginSignup, path: routes.loginSignup });

export default function LoginSignupPage() {
  return <LoginSignupContent />;
}
