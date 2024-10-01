'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { alpha, Collapse, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { CaretUp } from '@phosphor-icons/react/dist/ssr';
import { CaretDown } from '@phosphor-icons/react/dist/ssr/CaretDown';

import { paths } from '@/paths';
import { IconFA } from '@/components/icons/icon-fa';

import { MenuItems } from './partials/menuItems';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newOpen: Record<string, boolean> = {};
    MenuItems.forEach((group, groupIndex) => {
      group.items.forEach((item, itemIndex) => {
        if (item.subItems) {
          item.subItems.forEach((subItem) => {
            if (pathname.startsWith(subItem.path)) {
              newOpen[`${groupIndex}-${itemIndex}`] = true;
            }
          });
        }
      });
    });
    setOpen(newOpen);
  }, [pathname, MenuItems]);

  const handleClick = (groupIndex: number, itemIndex: number, isParent: boolean) => {
    const key = `${groupIndex}-${itemIndex}`;
    setOpen((prevOpen) => {
      const newOpen = isParent ? {} : { ...prevOpen };
      newOpen[key] = !prevOpen[key];
      return newOpen;
    });
  };

  const isActive = (path: string) => pathname === path || pathname.startsWith(path);

  return (
    <Box
      bgcolor="white"
      borderRight="1px solid var(--mui-palette-divider)"
      sx={{
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
      <Stack direction="row" justifyContent="center">
        <Stack justifyContent="center" alignItems="flex-end" height={64}>
          <Typography color="black" fontSize={16} fontWeight={600}>
            Media Monitoring Dashboard
          </Typography>
          <Box component={Link} href={paths.home} sx={{ display: 'inline-flex' }}>
            <Image
              src="https://res.cloudinary.com/caturteguh/image/upload/v1727302971/unimind/logo-unimind_f1ehza.png"
              alt="unimind"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '76px',
                height: 'auto',
              }}
            />
          </Box>
        </Stack>
      </Stack>
      <Divider sx={{ borderColor: 'var(--mui-palette-divider)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', px: 2, py: 4 }} overflow="auto">
        <Stack spacing={3} sx={{ listStyle: 'none', m: 0, p: 0 }}>
          {MenuItems.map((menu, groupIndex) => (
            <Box key={groupIndex}>
              <Typography
                component="h3"
                fontWeight={600}
                color={grey[600]}
                fontSize={18}
                px={2.5}
                textTransform="uppercase"
              >
                {menu.groupName}
              </Typography>
              {menu.groupName && (
                <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
                  <List>
                    {menu.items.map((item, itemIndex) => (
                      <div key={item.text}>
                        <ListItem
                          component={Link}
                          href={item.subItems ? '' : item.path}
                          onClick={() => handleClick(groupIndex, itemIndex, !item.subItems)}
                          sx={{ gap: 1, bgcolor: isActive(item.path) ? grey[200] : 'transparent', borderRadius: 1 }}
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
                          {item.subItems ? open[`${groupIndex}-${itemIndex}`] ? <CaretUp /> : <CaretDown /> : null}
                        </ListItem>
                        {item.subItems && (
                          <Collapse in={open[`${groupIndex}-${itemIndex}`]} timeout="auto" mountOnEnter unmountOnExit>
                            <List component="div" disablePadding>
                              {item.subItems.map((subItem) => (
                                <ListItem
                                  key={subItem.text}
                                  component={Link}
                                  href={subItem.path}
                                  sx={{
                                    pl: 6,
                                    bgcolor: pathname === subItem.path ? alpha(blue[100], 0.4) : 'transparent',
                                    borderRadius: 1,
                                  }}
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
                        )}
                      </div>
                    ))}
                  </List>
                </Stack>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
