import React, { useState, useEffect } from "react";
import "../Stylesheet/allev.css";
import axios from "axios";
import SideBar from "../Component/dashSide";
import DataTable from "react-data-table-component";

const EvtolList = () => {
  const [evtols, setEvtols] = useState([]);
  const [filteredEvtols, setFilteredEvtols] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/api/v1/evtol/admin/all");
      setEvtols(result.data.data);
      setFilteredEvtols(result.data.data);
    };
    fetchData();
  }, []);

  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredData = evtols.filter((evtol) =>
      evtol.state.toLowerCase().includes(keyword)
    );
    setFilteredEvtols(filteredData);
  };

  const columns = [
    {
      name: "Serial Number",
      selector: "serialNo",
    },
    {
      name: "Model",
      selector: "model",
    },
    {
      name: "Weight",
      selector: "weight",
      cell: (row) => `${row.weight}gr`,
    },
    {
      name: "Battery",
      selector: "battery",
      cell: (row) => `${row.battery}%`,
    },
    {
      name: "State",
      selector: "state",
      sortable: true, // Enable sorting for the State column
      cell: (row) => <span className="state-cell">{row.state}</span>,
    },
  ];

  return (
    <>
      <div className="wrpp">
        <SideBar />
        <div className="main">
          <p>All EVTOL DEVICES</p>
          <div className="evwrap">
            <input style={{border: "1px solid whitesmoke", padding: "2px"}}
              type="text"
              placeholder="Filter by state"
              className="state-filter"
              onChange={handleFilter}
            />
            <DataTable columns={columns} data={filteredEvtols} pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default EvtolList;
