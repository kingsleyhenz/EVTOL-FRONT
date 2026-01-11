import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../Component/dashSide";
import { Table } from "@mantine/core";
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
      <div className="bg-[#f5f5f5] h-screen w-screen flex justify-between font-['Poppins']">
        <SideBar />
        <div className="w-[82%] h-full flex flex-col gap-[15px] pt-[15px] pr-[5px]">
          <div className="w-[60%] h-[35px]">
            <h2 className="text-xl font-bold">All Requests</h2>
          </div>
          <div className="bg-white w-full h-[600px] overflow-y-auto p-4 rounded-lg shadow [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <Table className="w-full border-collapse">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Recipient Name</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Email</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Address</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Phone</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Item</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Expected Date</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]">Status</Table.Th>
                  <Table.Th className="p-4 text-sm font-bold text-[#333] text-center border-b border-[#f5f5f5]"></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {requests.map((element) => (
                  <Table.Tr key={element._id} className="hover:bg-[#f9f9f9] transition-colors">
                    <Table.Td className="p-4 text-[13px] text-[#555] text-center">{element.recipientName}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-[#555] text-center">{element.email}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-[#555] text-center">{element.address}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-[#555] text-center">{element.phone}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-[#555] text-center">{element.item}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-[#555] text-center">{formatDate(element.expectedDeliveryDate)}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-center" style={getStatusStyle(element.requestStatus)}>{element.requestStatus}</Table.Td>
                    <Table.Td className="p-4 text-[13px] text-center">
                      <ReqMenu/>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
