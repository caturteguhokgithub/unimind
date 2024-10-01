import * as React from 'react';
import { Grow, Stack, Tooltip, Typography } from '@mui/material';

import { IconFA } from '@/components/icons/icon-fa';

export default function DashboardBlock({
  children,
  title,
  action,
  spacingTight,
}: {
  children?: React.ReactNode;
  title: string;
  action?: React.ReactNode;
  spacingTight?: boolean;
}): React.JSX.Element {
  const TitleContent = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography component="h3" fontSize={20}>
        {title}
      </Typography>
      <Tooltip title={title} followCursor TransitionComponent={Grow}>
        <IconFA name="info-circle" size={14} />
      </Tooltip>
    </Stack>
  );

  return (
    <Stack spacing={spacingTight ? 1 : 3}>
      {action ? (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          {TitleContent}
          {action}
        </Stack>
      ) : (
        TitleContent
      )}
      {children}
    </Stack>
  );
}
