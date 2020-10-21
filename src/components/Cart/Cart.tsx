import React from 'react';
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  padding: 20px 0;
`

const Td = styled.td`
  text-align: center;
`;

export const Cart = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Продукт</th>
                    <th>Белки</th>
                    <th>Жиры</th>
                    <th>Улгеводы</th>
                    <th>Калории</th>
                    <th>Кол-во гр</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Td>Американская смесь Hortex</Td>
                    <Td>2.4</Td>
                    <Td>0.5</Td>
                    <Td>5.1</Td>
                    <Td>39</Td>
                    <Td><input type="number" defaultValue={100} /></Td>
                </tr>
                <tr>
                    <Td>Американская смесь Hortex</Td>
                    <Td>2.4</Td>
                    <Td>0.5</Td>
                    <Td>5.1</Td>
                    <Td>39</Td>
                    <Td><input type="number" defaultValue={100} /></Td>
                </tr>
                <tr>
                    <Td>Американская смесь Hortex</Td>
                    <Td>2.4</Td>
                    <Td>0.5</Td>
                    <Td>5.1</Td>
                    <Td>39</Td>
                    <Td><input type="number" defaultValue={100} /></Td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <Td>Итого</Td>
                    <Td>25</Td>
                    <Td>13</Td>
                    <Td>14</Td>
                    <Td><b>13</b></Td>
                </tr>
            </tfoot>
        </Table>
    )
};