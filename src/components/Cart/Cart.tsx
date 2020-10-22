import React from 'react';
import styled from "styled-components";
import {useCartContext} from "./CartContext";

const Table = styled.table`
  width: 100%;
  padding: 20px 0;
`

const Td = styled.td`
  text-align: center;
`;

const Mark = styled.span`
  color: darkred;
  font-weight: bold;
`;

export const Cart = () => {
    const {products, updateAmount, getSums, remove} = useCartContext();
    const {
        calories,
        protein,
        fat,
        carbohydrate
    } = getSums();

    return (
        <Table>
            <thead>
            <tr>
                <th>Продукт</th>
                <th>Белки, в 100 гр</th>
                <th>Жиры, в 100 гр</th>
                <th>Углеводы, в 100 гр</th>
                <th>Калории, в 100 гр</th>
                <th>Кол-во гр</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td>{product.protein}</Td>
                    <Td>{product.fat}</Td>
                    <Td>{product.carbohydrate}</Td>
                    <Td>{product.calories}</Td>
                    <Td><input type="number" value={product.amount}
                               onChange={(e) => updateAmount(product, +e.target.value)}/></Td>
                    <Td>
                        <button onClick={() => remove(product.id)}>удалить</button>
                    </Td>
                </tr>
            ))}
            </tbody>
            <tfoot>
            <tr>
                <Td>Итого</Td>
                <Td>{protein}</Td>
                <Td>{fat}</Td>
                <Td>{carbohydrate}</Td>
                <Td><Mark>{calories}</Mark></Td>
                <Td></Td>
            </tr>
            </tfoot>
        </Table>
    )
};