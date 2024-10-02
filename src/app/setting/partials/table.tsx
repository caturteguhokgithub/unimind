import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { blue, green, grey, red } from '@mui/material/colors';
import type { TableColumnsType, TableProps } from 'antd';
import { Table, Tag } from 'antd';

import { IconEmptyImg } from '@/components/icons/empty-img';
import { IconFA } from '@/components/icons/icon-fa';

interface DataType {
  key: React.Key;
  productName: string;
  keyword: string;
  status: string;
}

const dataSource = Array.from({ length: 123 }).map<DataType>((_, i) => ({
  key: (i + 1).toString(),
  productName: `Ridwan Kamil News#${i + 1}`,
  keyword: `Ridwan Kamil News#${i + 1}`,
  status: `${i % 2 === 0 ? 'Hold' : 'Running'}`,
}));

const columns: TableColumnsType<DataType> = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    sorter: (a: any, b: any) => a.key.length - b.key.length,
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
    sorter: true,
    render: (productName: string) => (
      <Stack direction="row" spacing={1} alignItems="center">
        <IconEmptyImg color={grey[400]} />
        <Typography fontSize={14}>{productName}</Typography>
      </Stack>
    ),
  },
  {
    title: 'Keyword',
    dataIndex: 'keyword',
    key: 'keyword',
    sorter: (a: any, b: any) => a.keyword.length - b.keyword.length,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 200,
    sorter: true,
    render: (status: string) => <Tag color={status === 'Hold' ? 'red' : 'green'}>{status.toUpperCase()}</Tag>,
  },
  {
    title: 'Action',
    key: 'operation',
    width: 200,
    render: (action: number) => (
      <Stack direction="row" gap={2}>
        <IconFA name="eye" size={18} color={green[600]} sx={{ width: 20 }} />
        <IconFA name="pencil" size={18} color={blue[600]} />
        <IconFA name="circle-play" size={17} color={green[600]} />
        <IconFA name="trash" size={18} color={red[600]} />
      </Stack>
    ),
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableSetting: React.FC = () => (
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

export default TableSetting;
