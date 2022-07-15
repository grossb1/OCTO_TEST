/* eslint-disable react/prop-types */
import React from 'react';
import CellDetails from './CellDetails';

export default [
  {
    accessorKey: 'guid',
    header: 'GUID',
  },
  {
    accessorKey: 'datasetType',
    header: 'datasetType',
  },
  {
    accessorKey: 'setTerm',
    header: 'Name',
    Cell: ({ cell }) => (
      <CellDetails cell={cell} />
    ),
  },
  {
    accessorKey: 'domain',
    header: 'Domain',
    Cell: ({ cell }) => (
      <CellDetails cell={cell} />
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
    width: 500,
    Cell: ({ cell }) => (
      <CellDetails cell={cell} />
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    Cell: ({ cell }) => (
      <CellDetails cell={cell} />
    ),
  },
  {
    accessorKey: 'organization',
    header: 'Organization',
    Cell: ({ cell }) => (
      <CellDetails cell={cell} />
    ),
  },
];
