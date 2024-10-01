import * as React from 'react';
import { InsightMention } from '@/app/dashboard/partials/insight-mention';
import { InsightView } from '@/app/dashboard/partials/insight-view';
import { SentimentMention } from '@/app/dashboard/partials/sentiment-mention';
import { SentimentView } from '@/app/dashboard/partials/sentiment-view';
import { Grid, Stack } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';

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
