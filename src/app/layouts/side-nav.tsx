'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { alpha, Avatar, Collapse, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { CaretUp } from '@phosphor-icons/react/dist/ssr';
import { CaretDown } from '@phosphor-icons/react/dist/ssr/CaretDown';

import { paths } from '@/paths';
import { IconFA } from '@/components/icon/icon-fa';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const newOpen: Record<number, boolean> = {};
    menuItems.forEach((item, index) => {
      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          if (pathname.startsWith(subItem.path)) {
            newOpen[index] = true;
          }
        });
      }
    });
    setOpen(newOpen);
  }, [pathname]);

  const handleClick = (index: number) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const menuItems = [
    {
      text: 'News Media',
      path: '/news-media',
      icon: 'newspaper',
      subItems: [
        { text: 'Overview', path: '/news-media/overview' },
        { text: 'Sources', path: '/news-media/sources' },
        { text: 'Mention Analytics', path: '/news-media/mention' },
      ],
    },
    { text: 'Brand Comparison', path: '/brand', icon: 'scale-unbalanced' },
    { text: 'Report', path: '/report', icon: 'file-pdf' },
  ];

  const isActive = (path: string) => pathname === path || pathname.startsWith(path);

  //   console.log(open);
  return (
    <Box
      bgcolor="white"
      borderRight="1px solid #dcdfe4"
      sx={{
        '--SideNav-background': 'var(--mui-palette-neutral-950)',
        '--SideNav-color': 'var(--mui-palette-common-white)',
        '--NavItem-color': 'var(--mui-palette-neutral-300)',
        '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
        '--NavItem-active-background': 'var(--mui-palette-primary-main)',
        '--NavItem-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-disabled-color': 'var(--mui-palette-neutral-500)',
        '--NavItem-icon-color': 'var(--mui-palette-neutral-400)',
        '--NavItem-icon-active-color': 'var(--mui-palette-primary-contrastText)',
        '--NavItem-icon-disabled-color': 'var(--mui-palette-neutral-600)',
        // bgcolor: 'var(--SideNav-background)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        scrollbarWidth: 'none',
        top: 0,
        width: 'var(--SideNav-width)',
        zIndex: 'var(--SideNav-zIndex)',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack p={2} alignItems="center">
        <Box component={Link} href={paths.home} sx={{ display: 'inline-flex' }}>
          <Image
            src="https://res.cloudinary.com/caturteguh/image/upload/v1727302971/unimind/logo-unimind_f1ehza.png"
            alt="unimind"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <Typography color="black" fontSize={14}>
          Media Monitoring Dashboard
        </Typography>
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-neutral-700)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
          <List>
            {menuItems.map((item, index) => (
              <div key={item.text}>
                <ListItem
                  //   button
                  component={Link}
                  href={item.subItems ? '' : item.path}
                  onClick={() => item.subItems && handleClick(index)}
                  sx={{ gap: 1, bgcolor: isActive(item.path) ? grey[200] : 'transparent' }}
                >
                  <ListItemAvatar sx={{ minWidth: 0 }}>
                    <IconFA
                      name={item.icon}
                      size={14}
                      color={isActive(item.path) ? blue[700] : 'black'}
                      sx={{ width: 20 }}
                    />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography color={isActive(item.path) ? blue[700] : 'black'} fontSize={14}>
                      {item.text}
                    </Typography>
                  </ListItemText>
                  {item.subItems ? open[index] ? <CaretUp /> : <CaretDown /> : null}
                </ListItem>
                {item.subItems ? (
                  <Collapse in={open[index]} timeout="auto" mountOnEnter unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem) => (
                        <ListItem
                          //   button
                          key={subItem.text}
                          component={Link}
                          href={subItem.path}
                          // selected={pathname === subItem.path}
                          sx={{ pl: 6, bgcolor: pathname === subItem.path ? alpha(blue[100], 0.4) : 'transparent' }}
                          //   onClick={handleSubItemClick}
                        >
                          <ListItemText>
                            <Typography
                              color={pathname === subItem.path ? blue[700] : 'black'}
                              fontWeight={pathname === subItem.path ? 700 : 'normal'}
                              fontSize={14}
                            >
                              {subItem.text}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                ) : null}
              </div>
            ))}
          </List>
        </Stack>
        {/* {renderNavSubItems({ pathname, items: navSubItems })} */}
      </Box>
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {/* {renderNavItems({ pathname, items: navItems })} */}
      </Box>
    </Box>
  );
}
