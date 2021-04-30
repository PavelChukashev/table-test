import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true,
        sticky: 'left'
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter,
        sticky: 'left'
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter,
        sticky: 'left'
    },
    {
        Header: 'Age',
        Footer: 'Age',
        accessor: 'age',
        Filter: ColumnFilter,
    },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender',
        Filter: ColumnFilter,
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
        Filter: ColumnFilter,
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header: 'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            }
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'age'
            },
            {
                Header: 'Gender',
                Footer: 'Gender',
                accessor: 'gender'
            },
            {
                Header: 'Country',
                Footer: 'Country',
                accessor: 'country'
            }
        ]
    }
]