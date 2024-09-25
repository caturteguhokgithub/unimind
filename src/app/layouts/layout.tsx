'use client';

import * as React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import { loadCSS } from 'fg-loadcss';

import { SideNav } from './side-nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps): React.JSX.Element {
  React.useEffect(() => {
    const node = loadCSS('https://use.fontawesome.com/releases/v6.5.1/css/all.css');
    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            '--MainNav-height': '56px',
            '--MainNav-zIndex': 1000,
            '--SideNav-width': '280px',
            '--SideNav-zIndex': 1100,
            '--MobileNav-width': '320px',
            '--MobileNav-zIndex': 1100,
          },
        }}
      />
      <Box
        bgcolor="#fafafb"
        sx={{
          // bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <SideNav />
        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', pl: { lg: 'var(--SideNav-width)' } }}>
          {/* <MainNav /> */}
          <main>
            <Box p={4}>
              <Container maxWidth="xl" sx={{ py: '64px' }}>
                {children}
              </Container>
            </Box>
          </main>
        </Box>
      </Box>
    </>
  );
}
