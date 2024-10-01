import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageManageAlert(): React.JSX.Element {
  return (
    <DashboardLayout title="Manage Dashboard / Alert Notification">
      <EmptyState />
    </DashboardLayout>
  );
}
