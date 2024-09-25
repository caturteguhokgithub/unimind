import * as React from 'react';
import type { Metadata, Viewport } from 'next';

import '@/styles/global.css';

import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Unimind',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://res.cloudinary.com/caturteguh/image/upload/v1727305904/unimind/favicon-unimind_dwwv6f.png',
        href: 'https://res.cloudinary.com/caturteguh/image/upload/v1727305904/unimind/favicon-unimind_dwwv6f.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://res.cloudinary.com/caturteguh/image/upload/v1727305904/unimind/favicon-unimind_dwwv6f.png',
        href: 'https://res.cloudinary.com/caturteguh/image/upload/v1727305904/unimind/favicon-unimind_dwwv6f.png',
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
