import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import '../Stylesheet/User/my-request.css'
import axios from "axios"


const UserReqs = () => {
  const [requests, setRequest] = useState([]);

  const baseUrl = `https://droneservice.onrender.com`;
  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const result = await axios.get(`${baseUrl}/api/v1/request/my-requests`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }}
          );
        setRequest(result.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchRequest();
  }, []);

    
  const rows = requests.map((request) => (
    <Table.Tr key={request._id}>
      <Table.Td>{request.recipientName}</Table.Td>
      <Table.Td>{request.item}</Table.Td>
      <Table.Td>{request.requestStatus}</Table.Td>
      <Table.Td>{request.parcelWeight}kg</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );
  return (
    <>
      <div className="my-req-tb">
        <Table withRowBorders={false} captionSide="top" verticalSpacing="md" horizontalSpacing="md">
          <Table.Thead style={{color: 'white'}}>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </>
  );
};

export default UserReqs