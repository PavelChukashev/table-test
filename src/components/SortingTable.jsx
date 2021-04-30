import React, { useMemo } from "react";
import { useSortBy, useTable, useBlockLayout, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS } from "./columns";
import { Checkbox } from './Checkbox'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import MOCK_DATA from "./MOCK_DATA.json";
import "./table.css";

export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
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
    );

  const { globalFilter } = state

  return (
    <>
    <div className='filter-container'>
      <div className='checkbox-container'>
          <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
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
      <div>
      </div>
      </div>
    <GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />
    </div>
    <div className="table-container">
      <table {...getTableProps()}>
        <thead className='table-header'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <div>
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortDesc ? ' 🔽' : ' 🔼') : ""}
                    </span>
                  </th>
                  <div className='column-filter'>{column.canFilter ? column.render('Filter') : null}</div>
                </div>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className='table-body'>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};
