import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../Component/dashSide";
import { Table } from "@mantine/core";
import "../../Stylesheet/Admin/allev.css";
import moment from "moment";
import ReqMenu from '../../Component/requestMenu';

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const baseUrl = `https://droneservice.onrender.com`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/request/all-requests`
        );
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    return moment(date).format("MMMM DD, YYYY");
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { color: 'rgb(201, 201, 0)', fontWeight: "bold", fontSize: '12px'};
      case 'Accepted':
        return { color: 'rgb(0, 124, 0)', fontWeight: "bold",  fontSize: '12px'};
      case 'Rejected':
        return { color: 'rgb(148, 0, 0)', fontWeight: "bold",  fontSize: '12px'};
        case 'Canceled':
        return { color: 'rgb(148, 0, 0)', fontWeight: "bold",  fontSize: '12px'};
      default:
        return {};
    }
  }
  

  const rows = requests.map((element) => (
    <Table.Tr key={element._id}>
      <Table.Td>{element.recipientName}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.address}</Table.Td>
      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>{element.item}</Table.Td>
      <Table.Td>{formatDate(element.expectedDeliveryDate)}</Table.Td>
      <Table.Td style={getStatusStyle(element.requestStatus)}>{element.requestStatus}</Table.Td>
      <Table.Td>
        <ReqMenu/>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div className="all-wrp">
        <SideBar />
        <div className="all-ev-cont">
          <div className="all-ev-intro">
            <h2>All Requests</h2>
          </div>
          <div className="all-ev-main">
            <Table className="mantine-table">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Recipient Name</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Address</Table.Th>
                  <Table.Th>Phone</Table.Th>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Expected Date</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
