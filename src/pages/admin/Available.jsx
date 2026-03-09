import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/dashSide";
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
      <div className="bg-[#f5f5f5] h-screen w-screen flex justify-between font-['Poppins']">
        <SideBar />
        <div className="w-[82%] h-full flex flex-col pt-[15px] pr-[5px] gap-4">
          <div className="bg-white w-full h-full overflow-y-auto p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Available Devices</h2>
            <DataTable columns={columns} data={evtols} pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Avalaible;

