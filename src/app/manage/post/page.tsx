import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageManagePost(): React.JSX.Element {
  return (
    <DashboardLayout title="Manage Dashboard / Manage Post">
      <EmptyState />
    </DashboardLayout>
  );
}
