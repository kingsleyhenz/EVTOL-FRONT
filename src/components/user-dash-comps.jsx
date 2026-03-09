import React from "react";
import { MdLocalLibrary } from "react-icons/md";
import { Table } from "@mantine/core";

const ReportCards = () => {
  return (
    <>
      <div className="w-[99%] h-[20%] flex justify-between items-center">
        <div className="w-[30%] h-full bg-[#1a1a1a] shadow-[3px_5px_5px_rgb(15,15,15)] rounded-[10px] flex flex-col p-[10px] gap-[5%] text-white">
          <div className="w-[70%] h-[30%] flex gap-[5%] items-center text-white">
            <div className="w-[25%] h-full bg-[rgba(131,131,131,0.178)] rounded-[5px] text-[#ff4500] flex justify-center items-center text-[23px]">
              <MdLocalLibrary />
            </div>
            <p className="text-[13px]">Total Requests</p>
          </div>
          <div className="w-[70%] h-[35%] pl-[3px] flex gap-[5%]">
            <h1 className="text-2xl font-bold">35</h1>
            <span className="text-[12px] self-end mb-1">in total</span>
          </div>
        </div>
        <div className="w-[30%] h-full bg-[#1a1a1a] shadow-[3px_5px_5px_rgb(15,15,15)] rounded-[10px] flex flex-col p-[10px] gap-[5%] text-white">
          <div className="w-[70%] h-[30%] flex gap-[5%] items-center text-white">
            <div className="w-[25%] h-full bg-[rgba(131,131,131,0.178)] rounded-[5px] text-[#ff4500] flex justify-center items-center text-[23px]">
              <MdLocalLibrary />
            </div>
            <p className="text-[13px]">Total Requests</p>
          </div>
          <div className="w-[70%] h-[35%] pl-[3px] flex gap-[5%]">
            <h1 className="text-2xl font-bold">35</h1>
            <span className="text-[12px] self-end mb-1">in total</span>
          </div>
        </div>
        <div className="w-[30%] h-full bg-[#1a1a1a] shadow-[3px_5px_5px_rgb(15,15,15)] rounded-[10px] flex flex-col p-[10px] gap-[5%] text-white">
          <div className="w-[70%] h-[30%] flex gap-[5%] items-center text-white">
            <div className="w-[25%] h-full bg-[rgba(131,131,131,0.178)] rounded-[5px] text-[#ff4500] flex justify-center items-center text-[23px]">
              <MdLocalLibrary />
            </div>
            <p className="text-[13px]">Total Requests</p>
          </div>
          <div className="w-[70%] h-[35%] pl-[3px] flex gap-[5%]">
            <h1 className="text-2xl font-bold">35</h1>
            <span className="text-[12px] self-end mb-1">in total</span>
          </div>
        </div>
      </div>
    </>
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
    <Table.Tr key={element.name} className="hover:bg-[#222222] transition-colors border-none text-white">
      <Table.Td className="border-none py-4">{element.position}</Table.Td>
      <Table.Td className="border-none py-4">{element.name}</Table.Td>
      <Table.Td className="border-none py-4">{element.symbol}</Table.Td>
      <Table.Td className="border-none py-4">{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr className="border-none">
      <Table.Th className="text-white border-none py-4">Element position</Table.Th>
      <Table.Th className="text-white border-none py-4">Element name</Table.Th>
      <Table.Th className="text-white border-none py-4">Symbol</Table.Th>
      <Table.Th className="text-white border-none py-4">Atomic mass</Table.Th>
    </Table.Tr>
  );
  return (
    <>
      <div className="w-[99%] h-[59%] bg-[#1a1a1a] rounded-[10px] text-white shadow-[-5px_-5px_5px_rgb(22,22,22)] p-6 overflow-y-auto">
        <Table withRowBorders={false} captionSide="top" verticalSpacing="sm" className="w-full text-white">
          <Table.Caption className="text-gray-400 mb-4">Recently Delivered Parcels</Table.Caption>
          <Table.Thead>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </>
  );
};

export { ReportCards, ReportTable };
