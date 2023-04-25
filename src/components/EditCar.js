import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Carlist from './Carlist';

export default function EditCar( props ) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: '', model: '', color: '', fuel: '', year: '', price: ''
  });

const handleChangeInput = event => {
  setCar({...car, [event.target.name]: event.target.value});
};

  const handleClickOpen = () => {
    setCar(props.car);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.updateCar(car._links.car.href, car);
    setOpen(false);
  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={car.brand}
          />
          <TextField
            margin="dense"
            name="model"
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={car.model}
          />
          <TextField
            margin="dense"
            name="color"
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={car.color}
          />
          <TextField
            margin="dense"
            name="year"
            label="Year"
            type="number"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={car.year}
          />
          <TextField
            margin="dense"
            name="fuel"
            label="Fuel"
            type="Text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={car.fuel}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
            value={car.price}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}