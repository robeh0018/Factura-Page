import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (name, amount, price, totalCost ) => {
    return { name, amount, price, totalCost };
};


export const ArticulesTableComponent = ({articules = []}) => {

    const rows = articules?.map( articule => {

        return {
                name: articule.name,
                amount: articule.amount,
                price: articule.price,
                totalCost: articule.totalCost,
            };
     });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow sx={{backgroundColor: 'grey.A400'}}>
                        <TableCell>Nombre del articulo</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Pecio</TableCell>
                        <TableCell align="right">Monto</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.price} USD</TableCell>
                            <TableCell align="right">{row.totalCost} USD</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}