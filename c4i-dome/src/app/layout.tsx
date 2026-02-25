import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'C4I-DOME'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}