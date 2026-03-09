import React from "react";
import { MdLocalLibrary } from "react-icons/md";
import { Table } from "@mantine/core";

const ReportCards = () => {
  return (
    <div className="w-full flex justify-between items-center gap-6">
      <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-3xl p-6 flex flex-col gap-6 text-[#111] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#ff4500]/10 rounded-2xl text-[#ff4500] flex justify-center items-center text-2xl">
            <MdLocalLibrary />
          </div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Total Requests</p>
        </div>
        <div className="flex items-baseline gap-2">
          <h1 className="text-5xl font-black">35</h1>
          <span className="text-sm text-gray-400 font-medium">in total</span>
        </div>
      </div>
      
      <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-3xl p-6 flex flex-col gap-6 text-[#111] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-2xl text-green-500 flex justify-center items-center text-2xl">
            <MdLocalLibrary />
          </div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Completed</p>
        </div>
        <div className="flex items-baseline gap-2">
          <h1 className="text-5xl font-black">28</h1>
          <span className="text-sm text-gray-400 font-medium">delivered</span>
        </div>
      </div>
      
      <div className="flex-1 bg-white border border-gray-100 shadow-sm rounded-3xl p-6 flex flex-col gap-6 text-[#111] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl text-blue-500 flex justify-center items-center text-2xl">
            <MdLocalLibrary />
          </div>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">In Transit</p>
        </div>
        <div className="flex items-baseline gap-2">
          <h1 className="text-5xl font-black">7</h1>
          <span className="text-sm text-gray-400 font-medium">on route</span>
        </div>
      </div>
    </div>
  );
};

const ReportTable = () => {
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
      ];
      
  const rows = elements.map((element) => (
    <Table.Tr key={element.name} className="hover:bg-gray-50 transition-colors border-b border-gray-50">
      <Table.Td className="border-none py-5 font-medium">{element.position}</Table.Td>
      <Table.Td className="border-none py-5 font-bold text-[#111]">{element.name}</Table.Td>
      <Table.Td className="border-none py-5 text-gray-500">{element.symbol}</Table.Td>
      <Table.Td className="border-none py-5 text-gray-500">{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr className="border-b-2 border-gray-100">
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">No.</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Item Name</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Identifier</Table.Th>
      <Table.Th className="text-gray-400 font-bold uppercase tracking-wider text-xs border-none pb-4">Weight (kg)</Table.Th>
    </Table.Tr>
  );
  
  return (
    <div className="w-full flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col">
      <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#111] font-bold text-xl">Recently Delivered Parcels</h2>
          <button className="text-sm font-bold text-[#ff4500] hover:underline">View All</button>
      </div>
      <div className="w-full flex-1 overflow-x-auto">
        <Table withRowBorders={false} verticalSpacing="sm" className="w-full min-w-[600px]">
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export { ReportCards, ReportTable };
