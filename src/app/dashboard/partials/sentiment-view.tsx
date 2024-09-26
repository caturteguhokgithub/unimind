'use client';

import * as React from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { blue, green, red } from '@mui/material/colors';
import { alpha, useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/core/chart';

function useChartOptions(): ApexOptions {
  const theme = useTheme();

  return {
    chart: { background: 'transparent', stacked: false, toolbar: { show: false } },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: { enabled: false },
    fill: { opacity: 1, type: 'solid' },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        distributed: true,
      },
    },
    stroke: { colors: ['transparent'], show: true, width: 2 },
    theme: { mode: theme.palette.mode },
    xaxis: {
      axisBorder: { color: theme.palette.divider, show: true },
      axisTicks: { color: theme.palette.divider, show: true },
      categories: ['Positive', 'Negative', 'Neutral'],
      labels: { offsetY: 5, style: { colors: theme.palette.text.secondary } },
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}M` : `${value}`),
        offsetX: -10,
        style: { colors: theme.palette.text.secondary },
      },
    },
  };
}

export function SentimentView({ sx }: { sx: SxProps }): React.JSX.Element {
  const chartOptions = useChartOptions();
  const series = [
    {
      name: 'Sentiment brand by pageviews',
      data: [
        { x: 'Positive', y: 12.35, fillColor: green['A400'] },
        { x: 'Negative', y: 5.43, fillColor: red['A400'] },
        { x: 'Neutral', y: 62.36, fillColor: blue[600] },
      ],
    },
  ];

  return (
    <Card sx={sx}>
      <CardHeader title="Sentiment brand by pageviews" />
      <CardContent>
        <Chart height={350} options={chartOptions} series={series} type="bar" width="100%" />
      </CardContent>
    </Card>
  );
}
