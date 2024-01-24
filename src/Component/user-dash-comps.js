import React from "react";
import "../Stylesheet/User/user-dash-comp.css";
import { MdLocalLibrary } from "react-icons/md";
import { Table } from "@mantine/core";

const ReportCards = () => {
  return (
    <>
      <div className="rep-card-wrp">
        <div className="rep-card">
          <div className="rep-card-hd">
            <div className="rep-card-hd-i">
              <MdLocalLibrary />
            </div>
            <p>Total Requests</p>
          </div>
          <div className="rep-card-fig">
            <h1>35</h1>
            <span>in total</span>
          </div>
        </div>
        <div className="rep-card">
          <div className="rep-card-hd">
            <div className="rep-card-hd-i">
              <MdLocalLibrary />
            </div>
            <p>Total Requests</p>
          </div>
          <div className="rep-card-fig">
            <h1>35</h1>
            <span>in total</span>
          </div>
        </div>
        <div className="rep-card">
          <div className="rep-card-hd">
            <div className="rep-card-hd-i">
              <MdLocalLibrary />
            </div>
            <p>Total Requests</p>
          </div>
          <div className="rep-card-fig">
            <h1>35</h1>
            <span>in total</span>
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
    <Table.Tr key={element.name} className="t-bod">
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
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
      <div className="rep-tb-wrp">
        <Table withRowBorders={false} captionSide="top" verticalSpacing="sm">
          <Table.Caption>Recently Delivered Parcels</Table.Caption>
          <Table.Thead style={{color: 'white'}}>{ths}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </>
  );
};

export { ReportCards, ReportTable };
