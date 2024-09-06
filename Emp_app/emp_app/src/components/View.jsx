import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"

const View = () => {
    var [emp, setEmp] = useState([]);
    axios.get("http://localhost:3004/view").then((res) => {
        console.log(res)
        setEmp(res.data);
    })
        .catch((err) => console.log(err));

const delValue = (id) => {
    axios.delete("http://localhost:3004/remove/" + id).then((res) => {
        alert(res.data.message);
    })
}
    return (
        <div>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Age&nbsp;</TableCell>
                            <TableCell align="right">Department&nbsp;</TableCell>
                            <TableCell align="right">Salary&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emp.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell align="right">{val.Name}</TableCell>
                                    <TableCell align="right">{val.Age}&nbsp;</TableCell>
                                    <TableCell align="right">{val.Dept}&nbsp;</TableCell>
                                    <TableCell align="right">{val.Sal}&nbsp;</TableCell>
                                    <Button size='small' variant='contained'>UPDATE</Button>&nbsp;
                                    <Button size='small' variant='contained' onClick={() => {
                                        delValue(val._id)
                                    }}>DELETE</Button>
                                </TableRow>

                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default View