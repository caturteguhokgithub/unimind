'use client';

import * as React from 'react';
import Image from 'next/image';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { blue, green, grey, orange, red } from '@mui/material/colors';
import { alpha } from '@mui/system';

import { IconFA } from '@/components/icons/icon-fa';

const CardMention = ({ status }: { status: string }) => {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Image
              src="https://picsum.photos/id/1/200/300"
              alt="unimind"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '80px',
                height: '30px',
                objectFit: 'cover',
              }}
            />
            <Stack direction="row" spacing={2}>
              <Typography color={grey[800]} fontSize={15}>
                tribunwow toraja
              </Typography>
              <Typography color={grey[600]} fontSize={14}>
                2024-08-01 07:50:25
              </Typography>
            </Stack>
            <Button size="small" variant="outlined" startIcon={<IconFA name="eye" size={14} />}>
              Quick View
            </Button>
          </Stack>
          <Chip
            label={status === 'neutral' ? 'Neutral' : status === 'negative' ? 'Negative' : 'Positive'}
            sx={{
              px: 2,
              fontWeight: 700,
              textTransform: 'uppercase',
              color: status === 'neutral' ? blue[600] : status === 'negative' ? red[600] : green[600],
              fontSize: 14,
              bgcolor:
                status === 'neutral'
                  ? alpha(blue[600], 0.2)
                  : status === 'negative'
                    ? alpha(red[600], 0.2)
                    : alpha(green[600], 0.2),
              border: `1px solid ${status === 'neutral' ? blue[600] : status === 'negative' ? red[600] : green[600]}`,
            }}
          />
        </Stack>
        <Typography color={grey[500]} fontSize={14}>
          Author: Anonymous
        </Typography>
        <Typography color={grey[800]} fontWeight={600} fontSize={14}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolores dolorem repudiandae minus?
        </Typography>
        <Typography
          color={grey[800]}
          fontSize={14}
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dolores dolorem repudiandae minus? Modi numquam
          minus pariatur eius, voluptatem aspernatur corrupti sunt non reiciendis suscipit necessitatibus expedita quam,
          exercitationem aliquid? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quos fuga optio, atque
          est nesciunt impedit aliquam, maiores laboriosam, sint odit consequatur distinctio voluptatibus molestiae
          officia omnis maxime natus sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis magni
          voluptatibus odio inventore, ullam ipsam ut officia dicta id repudiandae ad esse necessitatibus nesciunt
          magnam autem consequatur recusandae accusantium harum.
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography color={grey[600]} fontSize={14}>
            Tag:
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Chip
              size="small"
              label="Positive"
              sx={{
                fontSize: 12,
              }}
            />
            <Chip
              size="small"
              label="Negative"
              sx={{
                fontSize: 12,
              }}
            />
            <Chip
              size="small"
              label="Neutral"
              sx={{
                fontSize: 12,
              }}
            />
            <Chip
              size="small"
              label="KPK"
              sx={{
                fontSize: 12,
              }}
            />
            <Chip
              size="small"
              label="Skybridge"
              sx={{
                fontSize: 12,
              }}
            />
            <Chip
              size="small"
              label="Lorem Ipsum"
              sx={{
                fontSize: 12,
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export function MentionDetail(): React.JSX.Element {
  return (
    <Box maxHeight="50vh" overflow="auto" p={1} m={-1}>
      <Stack spacing={1}>
        <CardMention status="neutral" />
        <CardMention status="positive" />
        <CardMention status="negative" />
      </Stack>
    </Box>
  );
}
