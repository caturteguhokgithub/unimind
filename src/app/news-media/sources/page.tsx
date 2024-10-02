import * as React from 'react';
import DashboardBlock from '@/app/dashboard/partials/block';
import { Card, Grid, Stack, Typography } from '@mui/material';
import { blue, brown, green, grey, orange, purple, red, teal } from '@mui/material/colors';

import { MaterialSymbolsGlobeAsia } from '@/components/icons/globe';
import { IconFA } from '@/components/icons/icon-fa';
import { MaterialSymbolsSatelliteAltSharp } from '@/components/icons/sattelite';
import { IconSosmedFacebook } from '@/components/icons/sosmed-fb';
import { IconSosmedTwitter } from '@/components/icons/sosmed-twitter';
import { IconSosmedYoutube } from '@/components/icons/sosmed-youtube';
import { MaterialSymbolsBrowseActivityOutlineRounded } from '@/components/icons/website';
import DashboardLayout from '@/components/layouts/layout';

import TableSources from './partials/table';

const CardSource = ({
  title,
  link,
  value,
  icon,
  color,
}: {
  title: string;
  link: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <Card
      sx={{
        p: 3,
        cursor: 'pointer',
        transition: 'all 500ms',
        '&:hover': {
          backgroundColor: blue[50],
        },
      }}
    >
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between">
          {icon}
          <Stack spacing={2}>
            <Typography color={color} fontSize="2rem" fontWeight={700}>
              {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Stack>
            <Typography fontWeight={500}>{title}</Typography>
            <Typography
              fontSize={14}
              color={grey[500]}
              sx={{ textOverflow: 'ellipsis', overflow: 'hidden', lineClamp: 1, whiteSpace: 'nowrap', maxWidth: 260 }}
            >
              {link}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default function PageOverview(): React.JSX.Element {
  return (
    <DashboardLayout title="News Media / Sources">
      <DashboardBlock title="News Media Sources">
        {/* <TableSources /> */}
        <Grid container spacing={2}>
          <Grid item lg={4} md={6} xs={12}>
            <CardSource
              title="Ridwan Kamil"
              value={5466}
              link="https://x.com/rdwnKamilailailailailailailail"
              color={brown[700]}
              icon={<IconSosmedTwitter width={40} height={40} color={brown[700]} />}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CardSource
              title="Prabowo"
              value={452}
              link="https://youtube.com/prabowowowowowowowowowowowowowo"
              color={red[500]}
              icon={<IconSosmedYoutube width={40} height={40} color={red[500]} />}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CardSource
              title="Jokowi"
              value={12444}
              link="https://facebook.com/jokowidodododododododododododododo"
              color={blue[500]}
              icon={<IconSosmedFacebook width={40} height={40} color={blue[500]} />}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CardSource
              title="Ridwan Kamil"
              value={56}
              link="https://x.com/rdwnKamilailailailailailailail"
              color={green[500]}
              icon={<MaterialSymbolsBrowseActivityOutlineRounded width={40} height={40} color={green[500]} />}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CardSource
              title="Prabowo"
              value={648}
              link="https://youtube.com/prabowowowowowowowowowowowowowo"
              color={orange[500]}
              icon={<MaterialSymbolsSatelliteAltSharp width={40} height={40} color={orange[500]} />}
            />
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <CardSource
              title="Jokowi"
              value={111}
              link="https://facebook.com/jokowidodododododododododododododo"
              color={purple[500]}
              icon={<MaterialSymbolsGlobeAsia width={40} height={40} color={purple[500]} />}
            />
          </Grid>
        </Grid>
      </DashboardBlock>
    </DashboardLayout>
  );
}
