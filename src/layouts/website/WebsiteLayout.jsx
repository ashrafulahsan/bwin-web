import { Header } from './Header';
import { Footer } from './Footer';

export function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
