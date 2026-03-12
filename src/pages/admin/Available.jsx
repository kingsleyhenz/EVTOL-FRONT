import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/dashSide";
import { Table, Badge } from "@mantine/core";
import { MdBatteryChargingFull } from "react-icons/md";

const Available = () => {
    const [evtols, setEvtols] = useState([]);
    const baseUrl = `https://droneservice.onrender.com`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${baseUrl}/api/v1/evtol/admin/availableEV`);
                setEvtols(result.data.data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };
        fetchData();
    }, [baseUrl]);

    const getBatteryColor = (level) => {
        if (level > 75) return 'text-green-500';
        if (level > 25) return 'text-orange-500';
        return 'text-red-500';
    };

    const rows = evtols.map((evtol, index) => (
        <Table.Tr key={evtol._id} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
            <Table.Td className="py-5 font-bold text-[#111]">#{String(index + 1).padStart(3, '0')}</Table.Td>
            <Table.Td className="py-5 font-bold text-gray-700">{evtol.serialNo}</Table.Td>
            <Table.Td className="py-5 text-gray-500 font-medium">{evtol.model}</Table.Td>
            <Table.Td className="py-5 text-gray-500 font-medium">{evtol.weight}g</Table.Td>
            <Table.Td className="py-5">
                <div className={`flex items-center gap-1 font-bold ${getBatteryColor(evtol.battery)}`}>
                    <MdBatteryChargingFull className="text-lg" /> {evtol.battery}%
                </div>
            </Table.Td>
            <Table.Td className="py-5">
                <Badge color="green" variant="light" radius="sm">Ready for mission</Badge>
            </Table.Td>
        </Table.Tr>
    ));

    const ths = (
        <Table.Tr className="border-b-2 border-gray-100 font-['Poppins']">
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">ID</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Serial Number</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Model</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Weight Capacity</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Battery</Table.Th>
            <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-[11px] pb-4">Status</Table.Th>
        </Table.Tr>
    );

    return (
        <div className="w-full h-screen flex bg-gray-50 font-['Poppins']">
            <SideBar />
            <div className="flex-1 h-full flex flex-col px-10 py-8 gap-8 overflow-y-auto">
                <div className="w-full">
                    <h1 className="text-2xl font-black tracking-tight text-[#111]">Available Fleet</h1>
                    <p className="text-gray-500 text-sm font-medium mt-1">Drones currently idle and ready for deployment.</p>
                </div>

                <div className="w-full flex-1 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm overflow-hidden flex flex-col">
                    <div className="w-full overflow-y-auto pr-2">
                        {evtols.length === 0 ? (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-4 py-20">
                                <p className="text-sm font-medium">No drones are currently available.</p>
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

export default Available;

