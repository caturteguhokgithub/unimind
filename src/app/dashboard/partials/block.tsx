import * as React from 'react';
import { Grid, Grow, Stack, Tooltip, Typography } from '@mui/material';

import { IconFA } from '@/components/icons/icon-fa';

export default function DashboardBlock({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}): React.JSX.Element {
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography component="h3" fontSize={20}>
          {title}
        </Typography>
        <Tooltip title={title} followCursor TransitionComponent={Grow}>
          <IconFA name="info-circle" size={14} />
        </Tooltip>
      </Stack>
      {children}
    </Stack>
  );
}
