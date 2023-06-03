import React, { useState, useEffect } from "react";
import "../Stylesheet/allev.css";
import axios from "axios";
import SideBar from "../Component/dashSide";
import DataTable from "react-data-table-component";

const EvtolList = () => {
  const [evtols, setEvtols] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://evtol-back-production.up.railway.app/api/v1/evtol/admin/all");
      // const result = await axios.get("http://localhost:4000/api/v1/evtol/admin/all");
      setEvtols(result.data.data);
    };
    fetchData();
  }, []);
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
    },
  ];
  return (
    <>
      <div className="wrpp">
        <SideBar />
        <div className="main">
          <p>All EVTOL DEVICES</p>
          <div className="evwrap">
            <DataTable columns={columns} data={evtols} pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default EvtolList;

