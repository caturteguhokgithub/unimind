'use client';

import * as React from 'react';
import Image from 'next/image';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { blue, grey, red } from '@mui/material/colors';
import { loadCSS } from 'fg-loadcss';

import { IconFA } from '@/components/icons/icon-fa';

export default function PageLogin(): React.JSX.Element {
  const [togglePassword, setTogglePassword] = React.useState(false);

  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  React.useEffect(() => {
    const node = loadCSS('https://use.fontawesome.com/releases/v6.5.1/css/all.css');
    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  return (
    <Stack
      width="100%"
      height="100vh"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage:
          'url(https://kgdata-cdn.s3.ap-southeast-1.amazonaws.com/unimind/56c2a013-9eab-4b66-9c0f-545af8f3530a-Earthfromspace-R.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Stack
        bgcolor="white"
        p={3}
        borderRadius={2}
        boxShadow={6}
        sx={{
          width: { xs: '80%', sm: 420 },
        }}
      >
        <Stack flexDirection="column" alignItems="center">
          <Image
            src="https://res.cloudinary.com/caturteguh/image/upload/v1727302971/unimind/logo-unimind_f1ehza.png"
            alt="unimind"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: '208px',
              height: 'auto',
            }}
          />
          <Typography color="black" textTransform="uppercase" fontSize="1.3rem" fontWeight={600}>
            Media Monitoring
          </Typography>
        </Stack>
        <Typography color={grey[700]} textAlign="center" fontSize="1.2rem" fontWeight={500} my={1}>
          Login
        </Typography>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Typography fontSize={14} color={grey[600]}>
              Username
            </Typography>
            <TextField
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Username"
              sx={{
                '.MuiInputBase-root': {
                  borderRadius: 1,
                },
              }}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography fontSize={14} color={grey[600]}>
              Password
            </Typography>
            <Box position="relative">
              <TextField
                fullWidth
                type={togglePassword ? 'text' : 'password'}
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Password"
                sx={{
                  '.MuiInputBase-root': {
                    borderRadius: 1,
                  },
                }}
              />
              <IconFA
                name={togglePassword ? 'eye-slash' : 'eye'}
                size={16}
                color={blue[400]}
                onclick={handleTogglePassword}
                sx={{
                  width: 20,
                  position: 'absolute',
                  top: '50%',
                  right: 16,
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              />
            </Box>
          </Stack>
          <Button
            href="/news-media/overview"
            variant="contained"
            color="primary"
            sx={{ height: 56, mt: 1, borderRadius: 1, fontSize: '1rem', fontWeight: 600, letterSpacing: 1 }}
          >
            Login
          </Button>
          <Stack alignItems="center">
            <Box component="a" href="/" display="inline" sx={{ textDecoration: 'none' }}>
              <Typography
                fontSize={14}
                color={grey[600]}
                sx={{
                  transition: 'all 300ms',
                  '&:hover': {
                    color: blue[800],
                  },
                }}
              >
                Forgot your password?
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
