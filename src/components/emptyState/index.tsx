import React from 'react';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { IconPageEmpty } from '../icons/empty';

const EmptyState = ({}: {}) => {
  return (
    <Stack
      minHeight="60vh"
      alignItems="center"
      justifyContent="center"
      bgcolor={grey[200]}
      borderRadius={3}
      p={6}
      border={`1px solid ${grey[300]}`}
    >
      <IconPageEmpty width={220} height={220} />
      <Typography component="h2" fontWeight={600} fontSize="1.5rem" pt={3}>
        Page not found
      </Typography>
      <Typography component="p" color={grey[500]}>
        Sorry, the page you’re looking for can’t be found
      </Typography>
    </Stack>
  );
};

export default EmptyState;
