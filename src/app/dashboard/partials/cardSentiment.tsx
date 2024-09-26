import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { grey } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { IconFA } from '@/components/icons/icon-fa';

export interface CardProps {
  title: string;
  sx?: SxProps;
  valueMention: string;
  valueView: string;
  captionMention: string;
  captionView: string;
  color: string;
  noIcon?: boolean;
}

export function CardSentiment({
  sx,
  valueMention,
  valueView,
  title,
  captionMention,
  captionView,
  color,
  noIcon,
}: CardProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardContent sx={{ py: 3, pb: '24px !important' }}>
        <Stack spacing={2} width="100%">
          <Typography color="text.base" fontSize={14} textTransform="capitalize" fontWeight={600}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="top" spacing={1}>
              {!noIcon && (
                <Box mt={0.3}>
                  <IconFA
                    name="at"
                    color={color}
                    size={24}
                    sx={{ display: 'inline-flex !important', alignItems: 'center', height: '28px' }}
                  />
                </Box>
              )}
              <Stack>
                <Typography variant="h4" color={color} fontSize={24} fontWeight={700}>
                  {valueMention}
                </Typography>
                <Typography variant="caption" color={grey[600]}>
                  {captionMention}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="top" spacing={0.5}>
              {!noIcon && (
                <Box mt={0.3}>
                  <IconFA name="eye" color={color} size={24} sx={{ width: 40, height: 40 }} />
                </Box>
              )}
              <Stack>
                <Typography variant="h4" color={color} fontSize={24} fontWeight={700}>
                  {valueView}
                </Typography>
                <Typography variant="caption" color={grey[600]}>
                  {captionView}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
