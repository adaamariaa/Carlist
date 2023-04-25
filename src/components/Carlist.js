import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Button } from '@mui/material';
import AddCar from './AddCar';
import EditCar from './EditCar';

export default function Carlist() {
    const [cars, setCars] = useState([]);
    
    
    const fetchData = () => {
        fetch('http://carrestapi.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(error => console.error(error));
        console.log(cars);
    }

    useEffect(fetchData, []);
    
    const columns = [
        { field: "brand"},
        { field: "model"},
        { field: "color"},
        { field: "fuel"},
        { field: "year"},
        { field: "price"},
        { field: "_links.self.href", headerName: "Delete", sortable: false, floatingFilter: false, cellRenderer: params => {
            return(
                <Button onClick={() => deleteCar(params.value)}>
                    Delete</Button>
            )
        }},
        { field: "_links.self.href", headerName: "Edit", sortable: false, floatingFilter: false, cellRenderer: params => {
            return(
                <EditCar car={params.data} updateCar={updateCar}/>
            )
        }}
        ]


        
    
        const deleteCar = url => {
            if (!window.confirm("Delete car?")) return;
           const options={
            method : 'delete'
           };

            fetch('http://carrestapi.herokuapp.com/cars', options)
            .then(response => fetchData())
            .catch(error => console.error(error))
            }

        const defaultColDef = {
            sortable: true,
            filter: true,
            floatingFilter: true
        }

        const saveCar = car => {
            const options={
                method : 'post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(car)
               };
    
                fetch('http://carrestapi.herokuapp.com/cars', options)
                .then(response => fetchData())
                .catch(error => console.error(error))
                
        }

        const updateCar = (url, car) => {
            const options={
                method : 'put',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(car)
               };
    
                fetch(url, options)
                .then(response => fetchData())
                .catch(error => console.error(error))
                
        }

    return(
        <div>
            <AddCar saveCar={saveCar}/>

            <div className="ag-theme-material"
              style={{height: '700px', width: '70%', margin: 'auto'}} >
            <AgGridReact
                
                columnDefs={columns}
                rowData={cars}
                defaultColDef={defaultColDef}
                >
                
            </AgGridReact>
            </div>
        </div>
    )
    }