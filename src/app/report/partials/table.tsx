'use client';

import React from 'react';
import { Box, Stack } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import type { TableColumnsType, TableProps } from 'antd';
import { Table, Tag } from 'antd';

import { IconFA } from '@/components/icons/icon-fa';

interface DataType {
  key: React.Key;
  reportName: string;
  freq: string;
  status: string;
  createdAt: string;
}

const dataSource = Array.from({ length: 123 }).map<DataType>((_, i) => ({
  key: i.toString(),
  reportName: `Ridwan Kamil News#${i + 1}`,
  freq: `${i + 1} time`,
  upgradeNum: 500,
  status: `${i % 2 === 0 ? 'Pending' : 'Running'}`,
  createdAt: '2014-12-24 23:12:00',
}));

const columns: TableColumnsType<DataType> = [
  {
    title: 'Report Name',
    dataIndex: 'reportName',
    key: 'reportName',
    sorter: (a: any, b: any) => a.reportName.length - b.reportName.length,
  },
  { title: 'Freq.', dataIndex: 'freq', key: 'freq', sorter: true, width: 200 },
  {
    title: 'Created Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: 200,
    sorter: (a: any, b: any) => a.createdAt.length - b.createdAt.length,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 200,
    sorter: true,
    render: (status: string) => <Tag color={status === 'Pending' ? 'red' : 'green'}>{status.toUpperCase()}</Tag>,
  },
  {
    title: 'Action',
    key: 'operation',
    width: 200,
    render: () => (
      <Stack direction="row" gap={2}>
        <IconFA name="download" size={18} color={blue[600]} />
        <IconFA name="eye" size={18} color={green[600]} sx={{ width: 20 }} />
        <IconFA name="pencil" size={18} color={blue[600]} />
        <IconFA name="circle-pause" size={17} color={red[600]} />
      </Stack>
    ),
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableReport: React.FC = () => (
  <Box
    sx={{
      '.ant-table-pagination': {
        px: 2,
      },
    }}
  >
    <Table<DataType>
      columns={columns}
      dataSource={dataSource}
      showSorterTooltip={{ target: 'sorter-icon' }}
      onChange={onChange}
    />
  </Box>
);

export default TableReport;
