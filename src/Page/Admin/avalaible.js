import React, { useState, useEffect } from "react";
import "../../Stylesheet/Admin/allev.css";
import axios from "axios";
import SideBar from "../../Component/dashSide";
import DataTable from "react-data-table-component";

const Avalaible = () => {
  const [evtols, setEvtols] = useState([]);
  const baseUrl = `https://droneservice.onrender.com`

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `${baseUrl}/api/v1/evtol/admin/availableEV`
      );
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
      cell: (row) => `${row.weight}kg`,
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
          <div className="evwrap">
            <DataTable columns={columns} data={evtols} pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Avalaible;

