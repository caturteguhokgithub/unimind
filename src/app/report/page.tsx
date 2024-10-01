import * as React from 'react';
import { Button, Card } from '@mui/material';

import { IconFA } from '@/components/icons/icon-fa';
import DashboardLayout from '@/components/layouts/layout';

import DashboardBlock from '../dashboard/partials/block';
import TableReport from './partials/table';

export default function PageReport(): React.JSX.Element {
  return (
    <DashboardLayout title="Report">
      <DashboardBlock
        title="Report"
        action={
          <Button color="primary" variant="contained" startIcon={<IconFA name="plus" size={14} />}>
            Generate Report
          </Button>
        }
      >
        <Card>
          <TableReport />
        </Card>
      </DashboardBlock>
    </DashboardLayout>
  );
}
