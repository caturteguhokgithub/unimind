import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageManageAccount(): React.JSX.Element {
  return (
    <DashboardLayout title="Manage Dashboard / Social Media Account">
      <EmptyState />
    </DashboardLayout>
  );
}
