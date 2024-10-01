import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageManageGrouping(): React.JSX.Element {
  return (
    <DashboardLayout title="Manage Dashboard / Social Media Grouping">
      <EmptyState />
    </DashboardLayout>
  );
}
