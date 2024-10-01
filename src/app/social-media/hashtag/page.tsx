import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageHashtag(): React.JSX.Element {
  return (
    <DashboardLayout title="Social Media / Hashtag Monitoring">
      <EmptyState />
    </DashboardLayout>
  );
}
