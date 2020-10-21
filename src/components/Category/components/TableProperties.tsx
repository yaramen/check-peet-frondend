import React from 'react';
import styled from "styled-components";

const propertiesName = ['Белки', 'Жиры', 'Углеводы', 'Калории'];

const Table = styled.table`
  display: flex;
  padding: 10px 0;
`;

const Thead = styled.thead`
  flex-grow: 1;
`

const Th = styled.th`
  margin-right: 10px;
  margin-bottom: 5px;
  text-align: left;
`;

const Td = styled.td`
  text-align: left;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const Tr = styled.td`
  display: flex;
  flex-direction: column;
`;

export const TableProperties = (props: { propertiesValues: number[] }) => {
    const propertiesValues: number[] = props.propertiesValues;

    return (
        <Table>
            <Thead>
            <Tr>
                {propertiesName.map((property, index) => <Th key={index}>{property}</Th>)}
            </Tr>
            </Thead>
            <tbody>
            <Tr>
                {propertiesValues.map((value, index) => <Td key={index}>{value}</Td>)}
            </Tr>
            </tbody>
        </Table>
    )
}