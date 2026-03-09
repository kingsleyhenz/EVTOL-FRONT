import React, { useEffect, useState } from "react";
import { Table, Badge } from "@mantine/core";
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
  }, [baseUrl, token]);

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'delivered':
        return <Badge color="green" radius="sm" variant="light">Delivered</Badge>;
      case 'pending':
        return <Badge color="yellow" radius="sm" variant="light">Pending</Badge>;
      case 'in transit':
      case 'accepted':
        return <Badge color="blue" radius="sm" variant="light">In Transit</Badge>;
      case 'rejected':
      case 'cancelled':
        return <Badge color="red" radius="sm" variant="light">Cancelled</Badge>;
      default:
        return <Badge color="gray" radius="sm" variant="light">{status || 'Unknown'}</Badge>;
    }
  };
    
  const rows = requests.map((request, index) => (
    <Table.Tr key={request._id} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <Table.Td className="border-none py-5 font-bold text-[#111]">#{String(index + 1).padStart(4, '0')}</Table.Td>
      <Table.Td className="border-none py-5 font-medium text-gray-700">{request.recipientName}</Table.Td>
      <Table.Td className="border-none py-5 text-gray-600">{request.item}</Table.Td>
      <Table.Td className="border-none py-5">{getStatusBadge(request.requestStatus)}</Table.Td>
      <Table.Td className="border-none py-5 text-gray-500 font-medium">{request.parcelWeight} kg</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr className="border-b-2 border-gray-100">
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Request ID</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Recipient Name</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Item details</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Status</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Weight</Table.Th>
    </Table.Tr>
  );

  return (
    <div className="w-full h-full overflow-y-auto pr-2">
      {requests.length === 0 ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-4">
            <p className="text-sm font-medium">No requests found.</p>
        </div>
      ) : (
        <Table withRowBorders={false} verticalSpacing="sm" className="w-full min-w-[600px]">
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      )}
    </div>
  );
};

export default UserReqs;