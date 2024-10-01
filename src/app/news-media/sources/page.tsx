import * as React from 'react';
import DashboardBlock from '@/app/dashboard/partials/block';
import { Card } from '@mui/material';

import DashboardLayout from '@/components/layouts/layout';

import TableSources from './partials/table';

export default function PageOverview(): React.JSX.Element {
  return (
    <DashboardLayout title="News Media / Sources">
      <DashboardBlock title="News Media Sources">
        <Card>
          <TableSources />
        </Card>
      </DashboardBlock>
    </DashboardLayout>
  );
}
