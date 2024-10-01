'use client';

// import React from 'react';
// import { Table } from 'antd';
// import type { TableColumnsType, TableProps } from 'antd';

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     showSorterTooltip: { target: 'full-header' },
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Jim',
//         value: 'Jim',
//       },
//       {
//         text: 'Submenu',
//         value: 'Submenu',
//         children: [
//           {
//             text: 'Green',
//             value: 'Green',
//           },
//           {
//             text: 'Black',
//             value: 'Black',
//           },
//         ],
//       },
//     ],
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     onFilter: (value, record) => record.name.indexOf(value as string) === 0,
//     sorter: (a, b) => a.name.length - b.name.length,
//     sortDirections: ['descend'],
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: 'London',
//         value: 'London',
//       },
//       {
//         text: 'New York',
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.indexOf(value as string) === 0,
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const App: React.FC = () => (
//   <Table<DataType>
//     columns={columns}
//     dataSource={data}
//     onChange={onChange}
//     showSorterTooltip={{ target: 'sorter-icon' }}
//   />
// );

// export default App;
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Box } from '@mui/material';
import type { TableColumnsType, TableProps } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';

import { IconFA } from '@/components/icons/icon-fa';

interface ExpandedDataType {
  key: React.Key;
  source: string;
  mention: string;
  monthlyHistory: string;
  prValue: string;
  pageViews: string;
  positiveMention: string;
  negativeMention: string;
}

interface DataType {
  key: React.Key;
  source: string;
  mention: string;
  monthlyHistory: string;
  prValue: string;
  pageViews: string;
  positiveMention: string;
  negativeMention: string;
}

const expandDataSource = Array.from({ length: 3 }).map<ExpandedDataType>((_, i) => ({
  key: i.toString(),
  source: `cnbcindonesia#${i}`,
  mention: (500 * (i + 1) * 15).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  monthlyHistory: (500 * (i + 1) * 125).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  prValue: (500 * (i + 1) * 522).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  pageViews: (500 * (i + 1) * 236).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  positiveMention: (500 * (i + 1) * 142).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  negativeMention: (500 * (i + 1) * 555).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
}));

// const dataSource = [
//   {
//     key: '1',
//     name: `Screen`,
//     platform: 'iOS',
//     version: '10.3.4.5654',
//     upgradeNum: 500,
//     creator: 'Jack',
//     createdAt: '2014-12-24 23:12:00',
//   },
//   {
//     key: '2',
//     name: `Jim Green`,
//     platform: 'iOS',
//     version: '10.3.4.5654',
//     upgradeNum: 500,
//     creator: 'Jack',
//     createdAt: '2014-12-24 23:12:00',
//   },
//   {
//     key: '3',
//     name: `Joe Black`,
//     platform: 'iOS',
//     version: '10.3.4.5654',
//     upgradeNum: 500,
//     creator: 'Jack',
//     createdAt: '2014-12-24 23:12:00',
//   },
//   {
//     key: '4',
//     name: `Jim Red`,
//     platform: 'iOS',
//     version: '10.3.4.5654',
//     upgradeNum: 500,
//     creator: 'Jack',
//     createdAt: '2014-12-24 23:12:00',
//   },
// ];

const dataSource = Array.from({ length: 123 }).map<DataType>((_, i) => ({
  key: i.toString(),
  source: `cnbcindonesia#${i}`,
  mention: (500 * (i + 1) * 5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  monthlyHistory: (500 * (i + 1) * 15).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  prValue: (500 * (i + 1) * 52).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  pageViews: (500 * (i + 1) * 26).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  positiveMention: (500 * (i + 1) * 12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  negativeMention: (500 * (i + 1) * 555).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
}));

const expandColumns: TableColumnsType<ExpandedDataType> = [
  { title: 'Source', dataIndex: 'source', key: 'source' },
  { title: 'Mention', dataIndex: 'mention', key: 'mention' },
  { title: 'PR Value', dataIndex: 'prValue', key: 'prValue' },
  { title: 'Pageviews', dataIndex: 'pageViews', key: 'pageViews' },
  { title: 'Positive Mention', dataIndex: 'positiveMention', key: 'positiveMention' },
  { title: 'Negative Mention', dataIndex: 'negativeMention', key: 'negativeMention' },
];

const columns: TableColumnsType<DataType> = [
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    sorter: (a: any, b: any) => a.source.length - b.source.length,
  },
  { title: 'Mention', dataIndex: 'mention', key: 'mention', sorter: true, width: 200 },
  { title: 'PR Value', dataIndex: 'prValue', key: 'prValue', sorter: true, width: 200 },
  { title: 'Pageviews', dataIndex: 'pageViews', key: 'pageViews', sorter: true, width: 200 },
  { title: 'Positive Mention', dataIndex: 'positiveMention', key: 'positiveMention', sorter: true, width: 200 },
  { title: 'Negative Mention', dataIndex: 'negativeMention', key: 'negativeMention', sorter: true, width: 200 },
  //   {
  //     key: 'expandIcon',
  //     render: (props) => (
  //       <span style={{ float: 'right' }}>
  //         {props.expanded ? <IconFA name="eye" size={20} /> : <IconFA name="eye-slash" size={20} />}
  //       </span>
  //     ),
  //   },
  //   {
  //     key: 'expandIcon',
  //     render: (props) => {
  //       const onExpand = () => {
  //         props.onExpand(props.record, !props.expanded);
  //       };

  //       return (
  //         <span style={{ float: 'right' }} onClick={onExpand}>
  //           {props.expanded ? <IconFA name="eye" size={20} /> : <IconFA name="eye-slash" size={20} />}
  //         </span>
  //       );
  //     },
  //   },
];

const expandedRowRender = () => (
  <Table<ExpandedDataType> columns={expandColumns} dataSource={expandDataSource} pagination={false} />
);

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => (
  <Box
    sx={{
      '.ant-table-pagination': {
        px: 2,
      },
    }}
  >
    <Table<DataType>
      columns={columns}
      expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
      dataSource={dataSource}
      showSorterTooltip={{ target: 'sorter-icon' }}
      onChange={onChange}
    />
  </Box>
);

export default App;
