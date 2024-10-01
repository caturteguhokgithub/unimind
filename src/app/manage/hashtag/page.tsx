import * as React from 'react';

import EmptyState from '@/components/emptyState';
import DashboardLayout from '@/components/layouts/layout';

export default function PageManageHashtag(): React.JSX.Element {
  return (
    <DashboardLayout title="Manage Dashboard / Manage Hashtag">
      <EmptyState />
    </DashboardLayout>
  );
}
