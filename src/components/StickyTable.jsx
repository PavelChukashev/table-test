import React, { useMemo } from 'react'
import { useSortBy, useTable, useBlockLayout, useGlobalFilter, useFilters } from "react-table";
import { useSticky } from 'react-table-sticky'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { Styles } from './TableStyles'
import { Checkbox } from './Checkbox'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import './table.css'

export const StickyTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        getToggleHideAllColumnsProps,
        allColumns,
        state,
        setGlobalFilter,
      } = useTable(
        {
          columns: columns,
          data: data,
          defaultColumn
        },
        useBlockLayout,
        useGlobalFilter,
        useFilters,
        useSortBy,
        useSticky
        );

    const { globalFilter } = state

    return (
        <>
        <div id='header'>
            <div className='togglers'>
                <div>
                    <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
                </div>
                {
                    allColumns.map(column => (
                        <div key={column.id}>
                            <label>
                                <input type='checkbox' {...column.getToggleHiddenProps()} />
                                {column.Header}
                            </label>
                        </div>
                    ))
                }
            </div>
            <div className='globalFilter'>
                <GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />  
            </div>
        </div>
        <Styles>
            <div {...getTableProps()} className="table sticky">
                <div className="header">
                {headerGroups.map((headerGroup) => (
                    <div {...headerGroup.getHeaderGroupProps()} className="tr">
                    {headerGroup.headers.map((column) => (
                        <div>
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                <span>
                                {column.isSorted ? (column.isSortDesc ? '  🔽' : '  🔼') : ""}
                                </span>
                            </th>
                            <div className='columnFilter'>{column.canFilter ? column.render('Filter') : null}</div>
                        </div>
                    ))}
                    </div>
                ))}
                </div>
                <div {...getTableBodyProps()} className="body">
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                    <div {...row.getRowProps()} className="tr">
                        {row.cells.map((cell) => (
                        <div {...cell.getCellProps()} className="td">
                            {cell.render('Cell')}
                        </div>
                        ))}
                    </div>
                    );
                })}
                </div>
            </div>
        </Styles>
        <div className="footer">
            <a href="https://github.com/PavelChukashev/table-test">Repository</a>
        </div>
        </>
    )
}
