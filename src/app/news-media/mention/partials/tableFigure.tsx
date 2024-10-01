'use client';

import React from 'react';
import { Box } from '@mui/material';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';

interface DataType {
  key: React.Key;
  figureName: string;
  total: number;
}

const dataSource = Array.from({ length: 123 }).map<DataType>((_, i) => ({
  key: i.toString(),
  no: (i + 1).toString(),
  figureName: `Shin Tae-yong Child-${i}`,
  total: 500 + i + i * 2,
}));

const columns: TableColumnsType<DataType> = [
  {
    title: 'No',
    dataIndex: 'no',
    key: 'no',
    defaultSortOrder: 'ascend',
    sorter: (a: any, b: any) => a.no.length - b.no.length,
  },
  {
    title: 'Figure Name',
    dataIndex: 'figureName',
    key: 'name',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.figureName.length - b.figureName.length,
  },
  {
    title: 'Total Mention',
    dataIndex: 'total',
    key: 'total',
    defaultSortOrder: 'ascend',
    sorter: (a: any, b: any) => a.total.length - b.total.length,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableFigure: React.FC = () => (
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

export default TableFigure;
