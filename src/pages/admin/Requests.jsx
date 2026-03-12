import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/dashSide";
import { Table, Badge } from "@mantine/core";
import moment from "moment";
import ReqMenu from "../../components/requestMenu";

const Requests = () => {
    const [requests, setRequests] = useState([]);
    const baseUrl = `https://droneservice.onrender.com`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/v1/request/all-requests`);
                setRequests(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [baseUrl]);

    const formatDate = (date) => {
        return moment(date).format("MMM DD, YYYY");
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Accepted':
                return <Badge color="green" variant="light" radius="sm">Accepted</Badge>;
            case 'Rejected':
            case 'Canceled':
                return <Badge color="red" variant="light" radius="sm">{status}</Badge>;
            case 'Pending':
            default:
                return <Badge color="yellow" variant="light" radius="sm">Pending</Badge>;
        }
    };

    const rows = requests.map((element, index) => (
        <Table.Tr key={element._id} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 font-['Poppins']">
            <Table.Td className="py-5 font-bold text-[#111]">#{String(index + 1).padStart(4, '0')}</Table.Td>
            <Table.Td className="py-5 font-medium text-gray-700">{element.recipientName}</Table.Td>
            <Table.Td className="py-5 text-gray-500 font-medium">{element.item}</Table.Td>
            <Table.Td className="py-5 text-gray-500 font-medium">{element.phone}</Table.Td>
            <Table.Td className="py-5 text-gray-500 font-medium">{formatDate(element.expectedDeliveryDate)}</Table.Td>
            <Table.Td className="py-5">{getStatusBadge(element.requestStatus)}</Table.Td>
            <Table.Td className="py-5 text-right">
                <ReqMenu />
            </Table.Td>
        </Table.Tr>
    ));

    const ths = (
        <Table.Tr className="border-b-2 border-gray-100">
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">ID</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Recipient</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Item</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Contact</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Delivery Date</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Status</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4 text-right">Actions</Table.Th>
        </Table.Tr>
    );

    return (
        <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
            <SideBar />
            <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                <div className="w-full">
                    <h1 className="text-2xl font-black tracking-tight text-[#111]">Delivery Requests</h1>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mt-1">Review and manage all incoming parcel delivery requests.</p>
                </div>

                <div className="w-full flex-1 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm overflow-hidden flex flex-col">
                    <div className="w-full overflow-y-auto pr-2">
                        {requests.length === 0 ? (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-4 py-20">
                                <p className="text-sm font-medium">No active delivery requests found.</p>
                            </div>
                        ) : (
                            <Table withRowBorders={false} verticalSpacing="sm" className="w-full">
                                <Table.Thead>{ths}</Table.Thead>
                                <Table.Tbody>{rows}</Table.Tbody>
                            </Table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requests;
