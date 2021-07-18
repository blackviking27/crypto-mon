import React,{ useEffect, useState } from 'react';
import './table.css'

// Imports for table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell  from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

// Imports for the update field
import UpdateIcon from '@material-ui/icons/Update';
import TextField from '@material-ui/core/TextField';

// Imports for notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TableData(){

    const [tableData, setTable] = useState([]); // Original data
    const [rowsdata, setRowsData] = useState([]); // used for searching in the table

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }
    
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Function to fetch data from the server
    async function fetchData(){
            fetch('https://api.coincap.io/v2/assets')
            .then(data => data.json())
            .then(data => {
                setTable(data.data);
                setRowsData(data.data);
                successNotify()
            })
            .catch(err => {
                failNotify()
            })}

    useEffect(() => {
        fetchData()  // Initialising the data
    },[])

    // Search function
    function search(searchVal) {
        var filteredRows = tableData.filter((row) => {
        return row.name.toLowerCase().includes(searchVal.toLowerCase())
        })
        setRowsData(filteredRows)
    }

    // toastify alert function
    const successNotify = () => {
        toast.success("Updated Data",{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
        })
    }
    const failNotify = () => {
        toast.error("An error has occured",{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
        })
    }

    return(
        <>
            <div className="data-table">
                <div className="coin-list" >

                <ToastContainer />
                <Paper >
                    <TableContainer>
                    <div className="options-container" >
                        <div className="search-bar-container" >
                            <div className="search-bar" >
                                <TextField placeholder="Search" onChange={e => search(e.target.value)} />
                            </div>
                        </div>  
                        <div className="update-container" onClick={fetchData} >
                                <div>Update</div>
                                <UpdateIcon className="update-icon" />
                        </div>
                    </div>
                        <Table stickyHeader={true} aria-label="sticky table" >
                            <TableHead >
                                <TableRow>
                                    <TableCell className="sticky">S.no</TableCell>
                                    <TableCell  align="left" >Name</TableCell>
                                    <TableCell  align="left" >Symbol </TableCell>
                                    <TableCell  align="left" >%Change(24hr)</TableCell>
                                    <TableCell  align="left" >Price($)</TableCell>
                                </TableRow>
                            </TableHead>
                        
                            <TableBody>
                                {rowsdata
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((data, idx) => (
                                    <TableRow key={data.id}>
                                        <TableCell>{idx + 1}</TableCell>
                                        <TableCell>{data.id}</TableCell>
                                        <TableCell>{data.symbol}</TableCell>
                                        <TableCell><span style={{color: data.changePercent24Hr >= 0 ? 'green' : 'red'}} >{data.changePercent24Hr}</span></TableCell>
                                        <TableCell><span style={{fontWeight: 500, color: '#185ADB'}} >{data.priceUsd}</span></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination                   
                                rowsPerPageOptions={[5, 10, 20]}
                                component="div"
                                count={rowsdata.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handlePageChange}
                                onChangeRowsPerPage={handleChangeRowsPerPage}

                            />
                    </TableContainer>
                </Paper>

                </div>
            </div>
        </>
    )
}