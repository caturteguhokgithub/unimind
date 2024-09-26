'use client';

import * as React from 'react';
import { Autocomplete, Container, FormControl, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { usePopover } from '@/hooks/use-popover';
import DateRangePicker from '@/components/dateRange';

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

export function HeaderNav({ title }: { title: string }): React.JSX.Element {
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
          <Typography component="h2" fontSize="1.5rem" fontWeight={500}>
            {title}
          </Typography>
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
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
