import * as React from 'react';
import DashboardBlock from '@/app/dashboard/partials/block';
import { Card, Grid, Typography } from '@mui/material';

import DashboardLayout from '@/components/layouts/layout';

import TableFigure from './partials/tableFigure';
import TableOrg from './partials/tableOrg';

export default function PageMentionAnalytics(): React.JSX.Element {
  return (
    <DashboardLayout title="News Media / Mention Analytics">
      <DashboardBlock title="News Media Mention Analytics">
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Card>
              <Typography fontWeight={500} fontSize="1rem" py={2} px={3}>
                Top 10 Figure Mention
              </Typography>
              <TableFigure />
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card>
              <Typography fontWeight={500} fontSize="1rem" py={2} px={3}>
                Top 10 Organization Mention
              </Typography>
              <TableOrg />
            </Card>
          </Grid>
        </Grid>
      </DashboardBlock>
    </DashboardLayout>
  );
}
