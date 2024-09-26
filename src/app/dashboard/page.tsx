import * as React from 'react';
import { InsightMention } from '@/app/dashboard/partials/insight-mention';
import { InsightView } from '@/app/dashboard/partials/insight-view';
import { SentimentMention } from '@/app/dashboard/partials/sentiment-mention';
import { SentimentView } from '@/app/dashboard/partials/sentiment-view';
import { Grid, Grow, Stack, Tooltip, Typography } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';
import dayjs from 'dayjs';

import { LatestOrders } from '@/components/dashboard/overview/latest-orders';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { IconFA } from '@/components/icons/icon-fa';

import DashboardLayout from '../../components/layouts/layout';
import { AudienceTalk } from './partials/audience-talk';
import DashboardBlock from './partials/block';
import { CardSentiment } from './partials/cardSentiment';
import { TopicBreakdown } from './partials/topic-breakdown';

export default function PageDashboard(): React.JSX.Element {
  return (
    <DashboardLayout title="Dashboard">
      <Stack spacing={4}>
        <DashboardBlock title="Summary Dashboard">
          <Grid container spacing={2}>
            <Grid item lg={4} sm={6} xs={12}>
              <CardSentiment
                color={green['A400']}
                title="Positive Sentiment"
                valueMention="33,822"
                valueView="12,352,008"
                captionMention="by mention"
                captionView="by page view"
              />
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
              <CardSentiment
                color={red['A400']}
                title="Negative Sentiment"
                valueMention="8,242"
                valueView="5,436,859"
                captionMention="by mention"
                captionView="by page view"
              />
            </Grid>
            <Grid item lg={4} sm={6} xs={12}>
              <CardSentiment
                noIcon
                color={grey[800]}
                title="Neutral Sentiment"
                valueMention="130,902"
                valueView="80,157,099"
                captionMention="total mention"
                captionView="total page view"
              />
            </Grid>
          </Grid>
        </DashboardBlock>
        <DashboardBlock title="Insight Overview">
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12}>
              <InsightMention sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <InsightView sx={{ height: '100%' }} />
            </Grid>
            {/* <Grid item lg={6} xs={12}>
              <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={8} xs={12}>
              <Sales
                chartSeries={[
                  { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
                  { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
            </Grid> */}
          </Grid>
        </DashboardBlock>
        <DashboardBlock title="Sentiment Summary">
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12}>
              <SentimentMention sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <SentimentView sx={{ height: '100%' }} />
            </Grid>
            {/* <Grid item lg={4} md={6} xs={12}>
              <LatestProducts
                products={[
                  {
                    id: 'PRD-005',
                    name: 'Soja & Co. Eucalyptus',
                    image: '/assets/product-5.png',
                    updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
                  },
                  {
                    id: 'PRD-004',
                    name: 'Necessaire Body Lotion',
                    image: '/assets/product-4.png',
                    updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
                  },
                  {
                    id: 'PRD-003',
                    name: 'Ritual of Sakura',
                    image: '/assets/product-3.png',
                    updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
                  },
                  {
                    id: 'PRD-002',
                    name: 'Lancome Rouge',
                    image: '/assets/product-2.png',
                    updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
                  },
                  {
                    id: 'PRD-001',
                    name: 'Erbology Aloe Vera',
                    image: '/assets/product-1.png',
                    updatedAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item lg={8} md={12} xs={12}>
              <LatestOrders
                orders={[
                  {
                    id: 'ORD-007',
                    customer: { name: 'Ekaterina Tankova' },
                    amount: 30.5,
                    status: 'pending',
                    createdAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                  {
                    id: 'ORD-006',
                    customer: { name: 'Cao Yu' },
                    amount: 25.1,
                    status: 'delivered',
                    createdAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                  {
                    id: 'ORD-004',
                    customer: { name: 'Alexa Richardson' },
                    amount: 10.99,
                    status: 'refunded',
                    createdAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                  {
                    id: 'ORD-003',
                    customer: { name: 'Anje Keizer' },
                    amount: 96.43,
                    status: 'pending',
                    createdAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                  {
                    id: 'ORD-002',
                    customer: { name: 'Clarke Gillebert' },
                    amount: 32.54,
                    status: 'delivered',
                    createdAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                  {
                    id: 'ORD-001',
                    customer: { name: 'Adam Denisov' },
                    amount: 16.76,
                    status: 'delivered',
                    createdAt: dayjs().subtract(10, 'minutes').toDate(),
                  },
                ]}
                sx={{ height: '100%' }}
              />
            </Grid> */}
          </Grid>
        </DashboardBlock>
        <DashboardBlock title="Audience Talk About">
          <AudienceTalk />
        </DashboardBlock>
        <DashboardBlock title="Topic Breakdown">
          <TopicBreakdown />
        </DashboardBlock>
        <DashboardBlock title="Mention Details">Mention Details</DashboardBlock>
      </Stack>
    </DashboardLayout>
  );
}
