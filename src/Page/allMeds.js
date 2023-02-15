import React, { useState, useEffect } from "react";
import "../Stylesheet/allev.css";
import axios from "axios";
import SideBar from "../Component/dashSide";
import DataTable from "react-data-table-component";

const Meds = () => {
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://evtol-back-production.up.railway.app/api/v1/evtol/admin/checkMeds");
        setLoadedItems(response.data.data.filter((item) => item.image !== null));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Weight(gr)",
      selector: "weight",
      sortable: true,
    },
    {
      name: "Code",
      selector: "code",
      sortable: true,
    },
    {
      name: "Destination",
      selector: "carryTo",
      sortable: true,
    },
    {
      name: "Image",
      selector: "image",
      cell: (row) => <img src={row.image} alt={row.name} width={150} />,
    },
  ];

  return (
    <>
      <div className="wrpp">
        <SideBar />
        <div className="main">
          <p>All Medications </p>
          <div className="evwrap">
            <DataTable columns={columns} data={loadedItems} pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Meds;
