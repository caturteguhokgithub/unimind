import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageBrandComparison(): React.JSX.Element {
  return (
    <DashboardLayout title="Brand Comparison">
      <EmptyState />
    </DashboardLayout>
  );
}
