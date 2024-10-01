import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageSources(): React.JSX.Element {
  return (
    <DashboardLayout title="Social Media / Sources">
      <EmptyState />
    </DashboardLayout>
  );
}
