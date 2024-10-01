import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageSetting(): React.JSX.Element {
  return (
    <DashboardLayout title="Setting">
      <EmptyState />
    </DashboardLayout>
  );
}
