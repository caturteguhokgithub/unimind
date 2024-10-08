import React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageProfile(): React.JSX.Element {
  return (
    <DashboardLayout title="Profile">
      <EmptyState />
    </DashboardLayout>
  );
}
