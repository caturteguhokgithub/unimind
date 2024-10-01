'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Autocomplete,
  Avatar,
  Button,
  Container,
  Divider,
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { Cloud } from '@phosphor-icons/react';

import { paths } from '@/paths';
import { usePopover } from '@/hooks/use-popover';
import DateRangePicker from '@/components/dateRange';

import { IconFA } from '../icons/icon-fa';

const listKodeKl = [
  {
    id: '1',
    value: '1',
    code: 'KL-001.001',
    name: 'Kementerian Kesehatan',
  },
  {
    id: '2',
    value: '2',
    code: 'KL-001.002',
    name: 'Kementerian Pertanian',
  },
  {
    id: '3',
    value: '3',
    code: 'KL-002.001',
    name: 'Kementerian PUPR',
  },
  {
    id: '4',
    value: '4',
    code: 'KL-002.002',
    name: 'Kementerian Perindustrian',
  },
];

export function HeaderNav({ title, isDashboardView }: { title: string; isDashboardView?: boolean }): React.JSX.Element {
  const [valueKl, setValueKl] = React.useState<string | null>('');
  const [inputValueKl, setInputValueKl] = React.useState('');
  const [klCode, setKlCode] = React.useState('');

  const handleChangeKl = (value: any) => {
    setKlCode(value);
  };

  const userPopover = usePopover<HTMLDivElement>();

  const optionsListKl = listKodeKl.map((item) => {
    return item['name'];
  });

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid var(--mui-palette-divider)',
        backgroundColor: 'var(--mui-palette-background-paper)',
        position: 'sticky',
        top: 0,
        zIndex: 'var(--mui-zIndex-appBar)',
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" height={64}>
          {isDashboardView ? (
            <Stack direction="row" justifyContent="center" sx={{ userSelect: 'none' }}>
              <Stack justifyContent="center" height={64}>
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
                <Typography color="black" fontSize={16} fontWeight={600}>
                  Media Monitoring Dashboard
                </Typography>
              </Stack>
            </Stack>
          ) : (
            <Typography component="h2" fontSize="1.5rem" fontWeight={500}>
              {title}
            </Typography>
          )}
          <Stack alignItems="center" direction="row" spacing={2}>
            <FormControl fullWidth>
              <Autocomplete
                size="small"
                options={optionsListKl}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    placeholder="Pilih kementerian"
                  />
                )}
                value={valueKl}
                onChange={(event: any, newValue: string | null) => {
                  setValueKl(newValue);
                }}
                inputValue={inputValueKl}
                onInputChange={(event, newInputValue) => {
                  setInputValueKl(newInputValue);

                  const optionVal = listKodeKl.find((res: any) => {
                    return res.code === newInputValue;
                  });

                  handleChangeKl(optionVal?.value || '');
                  console.log(klCode);
                }}
                //
                sx={{
                  minWidth: 300,
                  '.MuiInputBase-root': {
                    borderRadius: 1,
                  },
                }}
              />
            </FormControl>
            <DateRangePicker placeholder="Pilih tanggal" />
            <Button aria-describedby={id} size="small" onClick={handleClick} sx={{ p: 0, minWidth: 'auto' }}>
              <Avatar
                alt="Account"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                sx={{ width: 40, height: 40 }}
              />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Paper sx={{ width: 200, maxWidth: '100%' }}>
                <MenuList>
                  <MenuItem>
                    <ListItemIcon sx={{ minWidth: '32px !important' }}>
                      <IconFA name="user-gear" size={14} sx={{ width: 20 }} />
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <IconFA name="right-from-bracket" size={14} sx={{ width: 20, color: red[600] }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: red[600] }}>Logout</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Popover>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
