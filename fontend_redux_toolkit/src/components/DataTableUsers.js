import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = props => {
  const columns = [
    {
      name: "ID",
      selector: (row,i) => i + 1
    },
    {
      name: "Name",
      selector: (row, i) => row.name,
      sortable: true,
    },
    
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );


  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    const handleChangeItem = (event) => {
      console.log("handleChangeItem :", event.target.value);
      console.log("handleChangeItem :", filteredItems);
    };

    return (
      <>
        <FilterComponent
          onFilter={e => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="List Users"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
      className="table table-striped table-hover"
    />
  );
};

export default Table;