'use client';

import * as React from 'react';
import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { SxProps } from '@mui/material/styles';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/core/chart';

function useChartOptions(): ApexOptions {
  return {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        show: false,
      },
      offsetY: -15,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
  };
}

export interface SalesProps {
  chartSeries?: { name: string; data: number[] }[];
  sx?: SxProps;
}

export function InsightView({ chartSeries, sx }: SalesProps): React.JSX.Element {
  const chartOptions = useChartOptions();
  const series = [
    {
      name: 'Kementerian Luar Negeri',
      data: [
        { x: new Date('2023-01-01').getTime(), y: 30 },
        { x: new Date('2023-02-01').getTime(), y: 40 },
        { x: new Date('2023-03-01').getTime(), y: 35 },
        { x: new Date('2023-04-01').getTime(), y: 50 },
        { x: new Date('2023-05-01').getTime(), y: 49 },
        { x: new Date('2023-06-01').getTime(), y: 60 },
        { x: new Date('2023-07-01').getTime(), y: 70 },
        { x: new Date('2023-08-01').getTime(), y: 91 },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader title="Historical by page view" />
      <CardContent>
        <Chart height={350} options={chartOptions} series={series} type="area" width="100%" />
      </CardContent>
    </Card>
  );
}
